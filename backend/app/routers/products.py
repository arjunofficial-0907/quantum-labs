from fastapi import APIRouter, Depends, HTTPException, Query, File, UploadFile, Form
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.product import Product
from app.models.user import User
from app.utils.auth import get_current_user
from app.models.category import Category
from fastapi.responses import JSONResponse
import uuid, os, json

router = APIRouter(prefix="/api/products", tags=["Products"])


# ---------- SERIALIZER ----------
def serialize_product(p: Product):
    item = jsonable_encoder(p)

    if p.category_rel:
        item["category_name"] = p.category_rel.name
        item["category_slug"] = p.category_rel.slug
    else:
        item["category_name"] = ""
        item["category_slug"] = ""

    return item


# ---------- LIST PRODUCTS ----------
@router.get("/")
def list_products(
    category: str | None = Query(default=None),
    featured: bool | None = Query(default=None),
    db: Session = Depends(get_db),
):
    query = db.query(Product).filter(Product.is_active == True)

    if category:
        category_record = db.query(Category).filter(Category.slug == category.lower()).first()
        if category_record:
            query = query.filter(Product.category_id == category_record.id)
        else:
            return []

    if featured is not None:
        query = query.filter(Product.is_featured == featured)

    products = query.all()
    return [serialize_product(p) for p in products]


# ---------- GET PRODUCT BY ID ----------
@router.get("/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return serialize_product(product)


# ---------- GET PRODUCT BY SLUG ----------
@router.get("/slug/{slug}")
def get_product_by_slug(slug: str, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.slug == slug).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return serialize_product(product)


# ---------- CREATE PRODUCT ----------
@router.post("/")
def create_product(
    title: str = Form(...),
    description: str = Form(...),
    price: float = Form(...),
    discount_price: float = Form(None),
    category_id: int = Form(...),
    tech_stack: str = Form("[]"),
    features: str = Form("[]"),
    rating: float = Form(0.0),                # NEW
    reviews_count: int = Form(0),             # NEW
    is_featured: bool = Form(True),
    image: UploadFile = File(...),
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    if not user.is_admin:
        raise HTTPException(status_code=403, detail="Not allowed")

    category_exists = db.query(Category).filter(Category.id == category_id).first()
    if not category_exists:
        raise HTTPException(status_code=404, detail="Invalid category_id")

    # generate slug
    slug = title.lower().replace(" ", "-")
    existing_slug = db.query(Product).filter(Product.slug == slug).first()
    if existing_slug:
        slug = f"{slug}-{uuid.uuid4().hex[:6]}"

    # save file
    filename = f"{uuid.uuid4().hex}.jpg"
    save_path = f"uploads/products/{filename}"
    os.makedirs("uploads/products", exist_ok=True)

    with open(save_path, "wb") as buffer:
        buffer.write(image.file.read())

    image_url = f"http://127.0.0.1:8000/static/products/{filename}"

    # parse json fields
    try:
        tech_list = json.loads(tech_stack)
    except:
        tech_list = []

    try:
        feature_list = json.loads(features)
    except:
        feature_list = []

    new_product = Product(
        title=title,
        description=description,
        price=price,
        discount_price=discount_price,
        category_id=category_id,
        image=image_url,
        slug=slug,
        is_featured=is_featured,
        stock=100,
        tech_stack=tech_list,
        features=feature_list,
        rating=rating,                      # NEW
        reviews_count=reviews_count,        # NEW
    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return JSONResponse({"message": "Product created", "product": serialize_product(new_product)})


# ---------- DELETE PRODUCT ----------
@router.delete("/{product_id}")
def delete_product(
    product_id: int,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if not user.is_admin:
        raise HTTPException(status_code=403, detail="Not allowed")

    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()

    return {"message": "Product deleted successfully"}
