# backend/app/routers/payments.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import razorpay
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/api/payment", tags=["Payment"])


class PaymentRequest(BaseModel):
    amount: int


RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")

client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))


@router.post("/create-order")
def create_order(data: PaymentRequest):
    try:
        print("Received amount:", data.amount)

        order = client.order.create({
            "amount": data.amount * 100,   # Convert to paise
            "currency": "INR",
            "payment_capture": 1
        })

        print("Order created:", order)

        return {
            "order_id": order["id"],
            "amount": order["amount"],
            "currency": order["currency"],
            "key": RAZORPAY_KEY_ID,
        }

    except Exception as e:
        print("❌ Razorpay Error:", str(e))
        raise HTTPException(status_code=500, detail=str(e))
