from typing import List
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import BaseModel, EmailStr

from dotenv import dotenv_values
values = dotenv_values(".env")


class EmailSchema(BaseModel):
    email: List[EmailStr]


conf = ConnectionConfig(
    MAIL_USERNAME=values['EMAIL'],
    MAIL_PASSWORD=values['PASS'],
    MAIL_FROM=values['EMAIL'],
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)


async def send_staff_credentials(email: EmailSchema, username: str, password: str):
    html = f"""
    <p>You are signed up for DocStation. This email includes
    your username and password credentials for login into the system.</p>
     
    <h5><b>Username: </b>{username}<h5>
    <h5><b>Password: </b>{password}<h5>
    
    <p>Thank you.</p>
    """

    message = MessageSchema(
        subject="Staff credentials",
        recipients=[email],
        body=html,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    await fm.send_message(message)
    return {"status": "ok"}
