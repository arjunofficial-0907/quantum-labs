# backend/app/routers/categories.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.category import Category

router = APIRouter(prefix="/api/categories", tags=["Categories"])

@router.get("/")
def get_categories(db: Session = Depends(get_db)):
    categories = db.query(Category).all()
    return [{"id": c.id, "name": c.name, "slug": c.slug} for c in categories]
