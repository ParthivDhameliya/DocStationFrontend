import datetime
import sys

sys.path.append("..")

from fastapi import Depends, APIRouter
import models as models
from pydantic import BaseModel
from database import engine, SessionLocal
from typing import Optional
from sqlalchemy.orm import Session
from starlette import status
from routers.auth import get_user_exception


router = APIRouter(
    prefix="/intake",
    tags=["intake"],
    responses={404: {"description": "Not found"}}
)

models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class CreateRegistration(BaseModel):
    patientPrefix: Optional[str] = None
    firstName: str
    middleName: Optional[str] = None
    lastName: str
    preferredName: Optional[str] = None
    email: str
    mobile: int
    homeNumber: Optional[int] = None
    birthDate: str
    age: int
    gender: str
    healthCareNumber: Optional[int] = None
    street: str
    apt: Optional[int] = None
    city: str
    province: str
    postalCode: str
    country: str
    relation: str
    emergencyContactName: str
    emergencyContactEmail: str
    emergencyContactNumber: int
    currentDate: Optional[str] = None
    symptoms: str
    isDiabetesMellitus: Optional[bool] = False
    isStroke: Optional[bool] = False
    isHighBloodPressure: Optional[bool] = False


    isHeartAttack: Optional[bool] = False
    isHeartSurgeryOrBypass: Optional[bool] = False
    isCancer: Optional[bool] = False
    isThyroidDisease: Optional[bool] = False
    isRespiratoryCondition: Optional[bool] = False
    isHighCholesterol: Optional[bool] = False
    isParentFracturedHip: Optional[bool] = False
    isMentalHealthCondition: Optional[bool] = False
    isFoodAllergy: Optional[bool] = False
    isAnimalsAllergy: Optional[bool] = False
    isPollenAllergy: Optional[bool] = False
    isMoldAllergy: Optional[bool] = False
    isDustMitesAllergy: Optional[bool] = False
    isMedicationsAllergy: Optional[bool] = False
    isLatexAllergy: Optional[bool] = False
    isInsectStingsAllergy: Optional[bool] = False
    isPerfumesOrHouseholdChemicalsAllergy: Optional[bool] = False


@router.get("/registration/", status_code=status.HTTP_200_OK)
async def get_patients(db: Session = Depends(get_db)):
    return db.query(models.Registration).all()


@router.post("/create_registration/", status_code=status.HTTP_201_CREATED)
async def create_registration(body: CreateRegistration, db: Session = Depends(get_db)):
    create_registration_model = models.Registration(**body.dict())
    create_registration_model.currentDate = datetime.date.today()
    db.add(create_registration_model)
    db.commit()


@router.get('/patient/{p_id}', status_code=status.HTTP_200_OK)
async def get_specific_patient(p_id: int, db: Session = Depends(get_db)):
    response = db.query(models.Registration).filter(models.Registration.id == p_id).first()
    if response is None:
        raise get_user_exception()
    return response


@router.delete('/patient/{p_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_specific_patient(p_id: int, db: Session = Depends(get_db)):
    response = db.query(models.Registration).filter(models.Registration.id == p_id).first()
    if response is None:
        raise get_user_exception()
    db.delete(response)
    db.commit()


# @router.put('/patient/{p_id}', status_code=status.HTTP_200_OK)
# async def get_specific_patient(p_id: int, body: CreateRegistration, db: Session = Depends(get_db)):
#     response = db.query(models.Registration).filter(models.Registration.id == p_id).first()
#     if response is None:
#         raise get_user_exception()
#
#     db.commit()
#     db.refresh(response)
#     return response

