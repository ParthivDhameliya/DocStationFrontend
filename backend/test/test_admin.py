import sys
sys.path.append("..")

from backend.routers.admin import get_db
from fastapi import status
from backend.test.utils import *


app.dependency_overrides[get_db] = override_get_db


def test_get_all_staff(test_admin):
    response = client.get("/staff/")
    assert response.status_code == status.HTTP_200_OK


def test_get_one_staff(test_admin):
    response = client.get("/staff/1")
    assert response.status_code == status.HTTP_200_OK


def test_get_one_not_authorized(test_admin):
    response = client.get("staff/48")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_create_staff(test_admin):
    request_data = {
      "firstName": "Parthiv",
      "middleName": "",
      "lastName": "Dhameliya",
      "contactNumber": 2363381192,
      "email": "parthivdhameliya0208@gmail.com",
      "street": "849 Dued road",
      "apt": 0,
      "city": "Kelowna",
      "province": "BC",
      "postalCode": "V1F 4H3",
      "country": "Canada",
      "position": "Clerk",
      "password": "Abcd$$123"
    }

    response = client.post("/create_user/", json=request_data)
    assert response.status_code == status.HTTP_201_CREATED


def test_update_staff(test_admin):
    request_data = {
      "firstName": "Raj",
      "middleName": "",
      "lastName": "Dhameliya",
      "contactNumber": 2363381192,
      "email": "parthivdhameliya0208@gmail.com",
      "street": "849 Dued road",
      "apt": 0,
      "city": "Kelowna",
      "province": "BC",
      "postalCode": "V1F 4H3",
      "country": "Canada",
      "position": "Clerk",
      "password": "Abcd$$123"
    }

    response = client.put("/staff/1", json=request_data)
    assert response.status_code == status.HTTP_200_OK


def test_update_staff_unauthorized(test_admin):
    request_data = {
      "firstName": "Parth",
      "middleName": "",
      "lastName": "Dhameliya",
      "contactNumber": 2363381192,
      "email": "parthivdhameliya0208@gmail.com",
      "street": "849 Dued road",
      "apt": 0,
      "city": "Kelowna",
      "province": "BC",
      "postalCode": "V1F 4H3",
      "country": "Canada",
      "position": "Clerk",
      "password": "Abcd$$123"
    }

    response = client.put("/staff/93", json=request_data)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_delete_staff(test_admin):
    response = client.delete("staff/54")
    assert response.status_code == status.HTTP_204_NO_CONTENT


def test_delete_staff_not_found(test_admin):
    response = client.delete("staff/433")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
