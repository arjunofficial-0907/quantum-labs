# backend/app/schemas/order.py
from pydantic import BaseModel
from datetime import datetime

class OrderCreate(BaseModel):
    shipping_address: str

class OrderResponse(BaseModel):
    id: int
    total_amount: float
    status: str
    payment_status: str
    created_at: datetime

    class Config:
        from_attributes = True
