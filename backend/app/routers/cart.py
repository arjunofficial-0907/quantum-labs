# backend/app/routers/cart.py 

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from app.database import get_db
from app.models.cart import Cart
from app.models.product import Product
from app.models.user import User
from app.schemas.cart import CartItemCreate, CartItemResponse
from app.schemas.product import ProductResponse
from app.utils.auth import get_current_user

router = APIRouter(prefix="/api/cart", tags=["Cart"])


@router.get("/", response_model=list[CartItemResponse])
def get_cart(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    items = db.query(Cart).filter(Cart.user_id == user.id).all()

    response = []
    for item in items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        response.append({
            "id": item.id,
            "product_id": item.product_id,
            "quantity": item.quantity,
            "product": ProductResponse.from_orm(product)
        })

    return jsonable_encoder(response)


@router.post("/", response_model=CartItemResponse)
def add_to_cart(item: CartItemCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == item.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    existing = db.query(Cart).filter(
        Cart.user_id == user.id, Cart.product_id == item.product_id
    ).first()

    if existing:
        existing.quantity += item.quantity
        db.commit()
        db.refresh(existing)
        return {
            "id": existing.id,
            "product_id": existing.product_id,
            "quantity": existing.quantity,
            "product": ProductResponse.from_orm(product)
        }

    cart_item = Cart(user_id=user.id, product_id=item.product_id, quantity=item.quantity)
    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)

    return {
        "id": cart_item.id,
        "product_id": cart_item.product_id,
        "quantity": cart_item.quantity,
        "product": ProductResponse.from_orm(product)
    }


@router.delete("/{cart_id}")
def delete_cart(cart_id: int, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    item = db.query(Cart).filter(Cart.id == cart_id, Cart.user_id == user.id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Not found")

    db.delete(item)
    db.commit()
    return {"message": "Removed"}
