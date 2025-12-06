from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
import os

router = APIRouter(prefix="/api/contact", tags=["Contact"])

class ContactMessage(BaseModel):
    name: str
    email: str
    phone: str
    college: str
    message: str

@router.post("/send")
def send_message(data: ContactMessage):
    recipient_email = os.getenv("MAIL_RECEIVER")
    sender_email = os.getenv("MAIL_SENDER")
    sender_password = os.getenv("MAIL_PASSWORD")

    mail_body = f"""
    New Contact Form Submission:

    Name: {data.name}
    Email: {data.email}
    Phone: {data.phone}
    College: {data.college}

    Message:
    {data.message}
    """

    try:
        msg = MIMEText(mail_body)
        msg["Subject"] = "New Contact Form Enquiry - Quantum Labs"
        msg["From"] = sender_email
        msg["To"] = recipient_email

        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(msg["From"], [msg["To"]], msg.as_string())

        return {"success": True, "message": "Email sent successfully"}
    except Exception as e:
        print("Email error:", e)
        raise HTTPException(status_code=500, detail="Failed to send message")
