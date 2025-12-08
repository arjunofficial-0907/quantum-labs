# backend/app/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
import os

from app.database import Base, engine
from app.routers import auth, products, cart, orders, categories, contact, payments

# Load environment variables
load_dotenv()

app = FastAPI(
    title="QuantumLabs API",
    version="1.0.0"
)

# Read allowed URLs from .env
FRONTEND_URL = os.getenv("FRONTEND_URL")
ADMIN_URL = os.getenv("ADMIN_URL")

# Allowed origins
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "https://quantum-labs-backend.onrender.com",
]

# Add production URLs if present
if FRONTEND_URL:
    origins.append(FRONTEND_URL)
if ADMIN_URL:
    origins.append(ADMIN_URL)

# CORS SETTINGS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure uploads folder exists
os.makedirs("uploads/products", exist_ok=True)

# Serve uploaded images
app.mount(
    "/static/products",
    StaticFiles(directory="uploads/products"),
    name="product_images"
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Routers
app.include_router(auth.router)
app.include_router(products.router)
app.include_router(cart.router)
app.include_router(orders.router)
app.include_router(categories.router)
app.include_router(contact.router)
app.include_router(payments.router)


@app.get("/")
def root():
    return {"message": "QuantumLabs API v1.0 running 🚀"}
