import sys

sys.path.append("..")

from fastapi import Depends, APIRouter
from pydantic import BaseModel
from typing import Optional, Annotated
import backend.models as models
from backend.database import engine, SessionLocal
from sqlalchemy.orm import Session
from backend.routers.auth import get_password_hash, get_user_exception
import random
from starlette import status
from backend.routers.emails import send_staff_credentials


router = APIRouter(
    tags=["admin"],
    responses={404: {"description": "Not found"}}
)

models.Base.metadata.create_all(bind=engine)


class CreateUser(BaseModel):
    firstName: str
    middleName: Optional[str] = None
    lastName: str
    contactNumber: int
    email: str
    street: str
    apt: Optional[int] = None
    city: str
    province:  str
    postalCode: str
    country: str
    position: str
    password: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@router.get("/staff/", status_code=status.HTTP_200_OK)
async def get_staff(db: db_dependency):
    return db.query(models.Staff).all()


@router.post("/create_user/", status_code=status.HTTP_201_CREATED)
async def create_new_user(body: CreateUser, db: db_dependency):
    create_user_model = models.Staff()

    create_user_model.firstName = body.firstName
    create_user_model.middleName = body.middleName
    create_user_model.lastName = body.lastName
    create_user_model.contactNumber = body.contactNumber
    create_user_model.email = body.email
    create_user_model.street = body.street
    create_user_model.apt = body.apt
    create_user_model.city = body.city
    create_user_model.province = body.province
    create_user_model.postalCode = body.postalCode
    create_user_model.country = body.country
    create_user_model.position = body.position

    random_sequence = ''.join([str(random.randint(0, 9)) for _ in range(4)])
    username = create_user_model.firstName[:1].lower() + create_user_model.lastName[:5].lower() + random_sequence
    create_user_model.username = username

    hash_password = get_password_hash(body.password)
    create_user_model.hashed_password = hash_password

    create_user_model.isAdmin = False

    db.add(create_user_model)
    await send_staff_credentials(body.email, username, body.password)

    db.commit()


@router.get('/staff/{p_id}', status_code=status.HTTP_200_OK)
async def get_specific_staff(p_id: int, db: db_dependency):
    response = db.query(models.Staff).filter(models.Staff.id == p_id).first()
    if response is None:
        raise get_user_exception()
    return response


@router.delete('/staff/{p_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_specific_staff(p_id: int, db: db_dependency):
    response = db.query(models.Staff).filter(models.Staff.id == p_id).first()
    if response is None:
        raise get_user_exception()
    db.delete(response)
    db.commit()


@router.put('/staff/{p_id}', status_code=status.HTTP_200_OK)
async def update_specific_staff(p_id: int, body: CreateUser, db: db_dependency):
    response = db.query(models.Staff).filter(models.Staff.id == p_id).first()
    if response is None:
        raise get_user_exception()

    response.firstName = body.firstName
    response.middleName = body.middleName
    response.lastName = body.lastName
    response.contactNumber = body.contactNumber
    response.email = body.email
    response.street = body.street
    response.apt = body.apt
    response.city = body.city
    response.province = body.province
    response.postalCode = body.postalCode
    response.country = body.country
    response.position = body.position

    db.commit()
    db.refresh(response)
