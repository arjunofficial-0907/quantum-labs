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
    slug: str
    description: str
    category_id: int
    price: float
    discount_price: Optional[float]
    stock: int
    tech_stack: List[str]
    features: Optional[List[str]]
    image: str
    images: Optional[List[str]]
    demo_url: Optional[str]
    documentation_url: Optional[str]
    rating: float
    reviews_count: int
    is_featured: bool
    is_active: bool

    class Config:
        from_attributes = True
