import sys
sys.path.append("..")

from backend.routers.intake import get_db
from fastapi import status
from backend.test.utils import *


app.dependency_overrides[get_db] = override_get_db


def test_get_all_registrations(test_intake):
    response = client.get("/intake/registration/")
    assert response.status_code == status.HTTP_200_OK


def test_get_one_not_authorized_patient(test_intake):
    response = client.get("/intake/patient/48")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED

