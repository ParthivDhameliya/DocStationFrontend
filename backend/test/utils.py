from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from fastapi.testclient import TestClient
import pytest
from backend.models import Staff, Registration
from backend.database import Base
from backend.main import app
from dotenv import dotenv_values
values = dotenv_values(".env")

SQLALCHEMY_DATABASE_URL = values["TEST_DATABASE_URL"]

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)


def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


client = TestClient(app)


@pytest.fixture
def test_admin():
    staff = Staff(
        username="pdhameli2933",
        firstName="Parthiv",
        middleName="",
        lastName="Dhameliya",
        contactNumber=2375992911,
        email="parthivdhameliya7@gmail.com",
        street="849 Kred road",
        apt=0,
        city="Vancouver",
        province="BC",
        postalCode="V2G 7F7",
        country="Canada",
        position="Doctor",
        hashed_password="Abcd$$123",
        isAdmin=True
    )

    db = TestingSessionLocal()
    db.add(staff)
    db.commit()
    yield db
    with engine.connect() as connection:
        connection.execute(text("DELETE FROM staffs"))
        connection.commit()


@pytest.fixture
def test_intake():
    patient = Registration(
        patientPrefix="Mr",
        firstName="Parthiv",
        middleName="",
        lastName="Dhameliya",
        preferredName="Parthiv",
        email="parthivdhameliya@gmail.com",
        mobile=2363381127,
        homeNumber=0,
        birthDate="12-03-2003",
        age=21,
        gender="Male",
        healthCareNumber=0,
        street="442 Rutland road south",
        apt=0,
        city="Kelowna",
        province="BC",
        postalCode="V1X 3A1",
        country="Canada",
        relation="Friend",
        emergencyContactName="Jashan",
        emergencyContactEmail="jashan@gmail.com",
        emergencyContactNumber=2363381097,
        currentDate="03-17-2024",
        symptoms="Cold, Fever",
        isDiabetesMellitus=True,
        isStroke=False,
        isHighBloodPressure=False,
        isHeartAttack=False,
        isHeartSurgeryOrBypass=False,
        isCancer=False,
        isThyroidDisease=True,
        isRespiratoryCondition=False,
        isHighCholesterol=False,
        isParentFracturedHip=False,
        isMentalHealthCondition=False,
        isFoodAllergy=False,
        isAnimalsAllergy=True,
        isPollenAllergy=False,
        isMoldAllergy=False,
        isDustMitesAllergy=False,
        isMedicationsAllergy=True,
        isLatexAllergy=False,
        isInsectStingsAllergy=False,
        isPerfumesOrHouseholdChemicalsAllergy=False
    )

    db = TestingSessionLocal()
    db.add(patient)
    db.commit()
    yield db
    with engine.connect() as connection:
        connection.execute(text("DELETE FROM registrations"))
        connection.commit()

