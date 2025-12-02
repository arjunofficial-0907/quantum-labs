# backend/app/routers/orders.py
from fastapi import APIRouter, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.order import Order, OrderItem
from app.models.cart import Cart
from app.models.user import User
from app.schemas.order import OrderCreate, OrderResponse
from app.utils.auth import get_current_user

router = APIRouter(prefix="/api/orders", tags=["Orders"])


@router.post("/", response_model=OrderResponse)
def place_order(data: OrderCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    items = db.query(Cart).filter(Cart.user_id == user.id).all()
    if not items:
        raise HTTPException(status_code=400, detail="Cart is empty")

    total = sum(i.product.discount_price or i.product.price for i in items)
    order = Order(
        user_id=user.id,
        total_amount=total,
        shipping_address=data.shipping_address
    )

    db.add(order)
    db.commit()
    db.refresh(order)

    for i in items:
        db.add(OrderItem(
            order_id=order.id,
            product_id=i.product_id,
            quantity=i.quantity,
            price_at_purchase=i.product.price
        ))
        db.delete(i)

    db.commit()
    db.refresh(order)
    return jsonable_encoder(order)


@router.get("/", response_model=list[OrderResponse])
def get_orders(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    orders = db.query(Order).filter(Order.user_id == user.id).all()
    return jsonable_encoder(orders)
