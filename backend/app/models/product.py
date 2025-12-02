from sqlalchemy import Column, Integer, String, Float, Boolean, Text, DateTime, JSON, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True)
    description = Column(Text)
    price = Column(Float, nullable=False)
    discount_price = Column(Float)
    stock = Column(Integer, default=0)
    tech_stack = Column(JSON)
    features = Column(JSON)
    image = Column(String)
    images = Column(JSON)
    demo_url = Column(String)
    documentation_url = Column(String)
    rating = Column(Float, default=0.0)
    reviews_count = Column(Integer, default=0)
    is_featured = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    category_id = Column(Integer, ForeignKey("categories.id"))
    category_rel = relationship("Category", back_populates="products")   # <-- IMPORTANT

    cart_items = relationship("Cart", back_populates="product")
    order_items = relationship("OrderItem", back_populates="product")
    reviews = relationship("Review", back_populates="product")
    wishlist_items = relationship("Wishlist", back_populates="product")
