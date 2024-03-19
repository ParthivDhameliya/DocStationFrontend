from sqlalchemy import Boolean, Column, Integer, String, Date
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime


class Registration(Base):
    __tablename__ = "registrations"

    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True)
    patientPrefix = Column(String)
    firstName = Column(String)
    middleName = Column(String)
    lastName = Column(String)
    preferredName = Column(String)
    email = Column(String)
    mobile = Column(Integer)
    homeNumber = Column(Integer)
    birthDate = Column(Date)
    age = Column(Integer)
    gender = Column(String)
    healthCareNumber = Column(Integer)
    street = Column(String)
    apt = Column(Integer)
    city = Column(String)
    province = Column(String)
    postalCode = Column(String)
    country = Column(String)
    relation = Column(String)
    emergencyContactName = Column(String)
    emergencyContactEmail = Column(String)
    emergencyContactNumber = Column(Integer)
    currentDate = Column(Date, default=datetime.now())
    symptoms = Column(String)
    isDiabetesMellitus = Column(Boolean)
    isStroke = Column(Boolean)
    isHighBloodPressure = Column(Boolean)
    isHeartAttack = Column(Boolean)
    isHeartSurgeryOrBypass = Column(Boolean)
    isCancer = Column(Boolean)
    isThyroidDisease = Column(Boolean)
    isRespiratoryCondition = Column(Boolean)
    isHighCholesterol = Column(Boolean)
    isParentFracturedHip = Column(Boolean)
    isMentalHealthCondition = Column(Boolean)
    isFoodAllergy = Column(Boolean)
    isAnimalsAllergy = Column(Boolean)
    isPollenAllergy = Column(Boolean)
    isMoldAllergy = Column(Boolean)
    isDustMitesAllergy = Column(Boolean)
    isMedicationsAllergy = Column(Boolean)
    isLatexAllergy = Column(Boolean)
    isInsectStingsAllergy = Column(Boolean)
    isPerfumesOrHouseholdChemicalsAllergy = Column(Boolean)

    # owner = relationship("Users", back_populates="todos")


# class Guardian(Base):
#     __tablename__ = "guardians"
#
#     __table_args__ = {'extend_existing': True}
#
#     id = Column(Integer, primary_key=True)
#     prefixGuardian = Column(String)
#     firstName = Column(String)
#     middleName = Column(String)
#     lastName = Column(String)
#     preferredName = Column(String)
#     contactNumber = Column(Integer)
#     sameAddressAsAbove = Column(Boolean)
#     street = Column(String)
#     apt = Column(Integer)
#     city = Column(String)
#     province = Column(String)
#     postalCode = Column(String)
#     country = Column(String)
#     patient_id = Column(Integer, ForeignKey("registrations.id"))
#

class Staff(Base):
    __tablename__ = "staffs"

    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True)
    username = Column(String)
    firstName = Column(String)
    middleName = Column(String)
    lastName = Column(String)
    contactNumber = Column(Integer)
    email = Column(String, unique=True)
    street = Column(String)
    apt = Column(Integer)
    city = Column(String)
    province = Column(String)
    postalCode = Column(String)
    country = Column(String)
    position = Column(String)
    hashed_password = Column(String)
    isAdmin = Column(Boolean)

