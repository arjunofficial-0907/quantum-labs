from pydantic import BaseModel
from typing import Optional, List


class ProductCreate(BaseModel):
    title: str
    description: str
    category_id: int
    price: float
    discount_price: Optional[float] = None
    stock: int = 100
    tech_stack: List[str]
    features: Optional[List[str]] = None
    image: str
    images: Optional[List[str]] = None
    demo_url: Optional[str] = None
    documentation_url: Optional[str] = None
    is_featured: bool = False


class ProductResponse(BaseModel):
    id: int
    title: str
    slug: Optional[str]
    description: Optional[str]

    category_id: Optional[int]
    category_name: Optional[str] = None   # Hybrid property returned
    category_slug: Optional[str] = None
    
    price: float
    discount_price: Optional[float] = None
    stock: int

    tech_stack: Optional[List[str]] = []
    features: Optional[List[str]] = []

    image: Optional[str] = None
    images: Optional[List[str]] = None

    demo_url: Optional[str] = None
    documentation_url: Optional[str] = None

    rating: float = 0.0
    reviews_count: int = 0

    is_featured: bool = False
    is_active: bool = True

    class Config:
        from_attributes = True
        orm_mode = True
