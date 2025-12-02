from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.models import *   # <-- IMPORTANT

from app.routers import auth, products, cart, orders, categories

app = FastAPI(title="QuantumLabs API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(cart.router)
app.include_router(orders.router)
app.include_router(categories.router)

@app.get("/")
def root():
    return {"message": "QuantumLabs API v1.0 running"}
