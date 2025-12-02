# backend/app/routers/categories.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product

router = APIRouter(prefix="/api/categories", tags=["Categories"])

@router.get("/")
def get_categories(db: Session = Depends(get_db)):
    cats = db.query(Product.category).distinct().all()
    return [{"name": c[0]} for c in cats]
