from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product
from app.schemas.product import ProductCreate, ProductResponse
from app.models.user import User
from app.utils.auth import get_current_user
from app.models.category import Category
import uuid

router = APIRouter(prefix="/api/products", tags=["Products"])


# ---------------- LIST PRODUCTS ----------------
@router.get("", response_model=list[ProductResponse])
@router.get("/", response_model=list[ProductResponse])
def list_products(
    category: int | None = Query(default=None),
    featured: bool | None = Query(default=None),
    db: Session = Depends(get_db)
):
    query = db.query(Product).filter(Product.is_active == True)

    if category:
        query = query.filter(Product.category_id == category)

    if featured:
        query = query.filter(Product.is_featured == True)

    return jsonable_encoder(query.all())


# ---------------- GET PRODUCT BY ID ----------------
@router.get("/{product_id}", response_model=ProductResponse)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Not found")

    return jsonable_encoder(product)


# ---------------- CREATE PRODUCT (ADMIN ONLY) ----------------
@router.post("/", response_model=ProductResponse)
def create_product(data: ProductCreate, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not user.is_admin:
        raise HTTPException(status_code=403, detail="Not allowed")

    category_exists = db.query(Category).filter(Category.id == data.category_id).first()
    if not category_exists:
        raise HTTPException(status_code=404, detail="Invalid category_id")

    slug = data.title.lower().replace(" ", "-")
    existing = db.query(Product).filter(Product.slug == slug).first()
    if existing:
        slug = f"{slug}-{uuid.uuid4().hex[:6]}"

    new = Product(
        title=data.title,
        description=data.description,
        price=data.price,
        discount_price=data.discount_price,
        stock=data.stock,
        tech_stack=data.tech_stack,
        features=data.features,
        image=data.image,
        images=data.images,
        demo_url=data.demo_url,
        documentation_url=data.documentation_url,
        category_id=data.category_id,
        is_featured=data.is_featured,
        slug=slug,
    )

    db.add(new)
    db.commit()
    db.refresh(new)

    return jsonable_encoder(new)
