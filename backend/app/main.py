# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
import os

from app.database import Base, engine
from app.routers import auth, products, cart, orders, categories, contact

# Load environment variables from .env
load_dotenv()

# Initialize FastAPI
app = FastAPI(
    title="QuantumLabs API",
    version="1.0.0"
)

# Frontend & Admin URLs from .env
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
ADMIN_URL = os.getenv("ADMIN_URL", "http://localhost:5174")

origins = [FRONTEND_URL, ADMIN_URL]

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create uploads folder if not exists
os.makedirs("uploads/products", exist_ok=True)

# Serve static product images
app.mount(
    "/static/products",
    StaticFiles(directory="uploads/products"),
    name="product_images"
)

# Create DB tables
Base.metadata.create_all(bind=engine)

# Routers
app.include_router(auth.router)
app.include_router(products.router)
app.include_router(cart.router)
app.include_router(orders.router)
app.include_router(categories.router)
app.include_router(contact.router)


@app.get("/")
def root():
    return {"message": "QuantumLabs API v1.0 running"}
