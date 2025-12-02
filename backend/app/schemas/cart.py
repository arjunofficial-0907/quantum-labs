# backend/app/schemas/cart.py
from pydantic import BaseModel
from typing import Optional
from app.schemas.product import ProductResponse

class CartItemCreate(BaseModel):
    product_id: int
    quantity: int = 1

class CartItemResponse(BaseModel):
    id: int
    product_id: int
    quantity: int
    product: Optional[ProductResponse] = None

    class Config:
        from_attributes = True
        orm_mode = True
