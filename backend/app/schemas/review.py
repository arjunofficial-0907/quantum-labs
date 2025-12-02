# backend/app/schemas/review.py
from pydantic import BaseModel
from datetime import datetime

class ReviewCreate(BaseModel):
    product_id: int
    rating: int
    comment: str

class ReviewResponse(BaseModel):
    id: int
    product_id: int
    user_id: int
    rating: int
    comment: str
    created_at: datetime

    class Config:
        from_attributes = True
