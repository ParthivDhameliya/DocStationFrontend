import axios from "axios";
import { useEffect, useContext, useState } from "react";
import {patientContext} from "./patientContexProvider"
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import ProductsRow from "./patientsTableRow";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";


export default function data() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const [patients, setPatients] = useContext(patientContext);

  const handleUpdate = (id) => {

  }

  const handleDelete = async (id) => {
    const res = await axios.delete("http://127.0.0.1:8000/intake/patient/"+id);

    if (res.status === 204) {
      const filteredPatients = patients.data.filter((patient) => patient.id !== id);
      setPatients({ data: [...filteredPatients] })
      alert("Patient deleted successfully!");
    } else {
      alert("Error occurred!");
    }
  }

  const handleDetails = async (id) => {
    setIsOpen(!isOpen);
    try {
      const res = await axios.get("http://127.0.0.1:8000/intake/patient/"+id);
      console.log(res);
      
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const res = axios.get("http://127.0.0.1:8000/intake/registration/");

    res.then(results => {
      setPatients({ "data": [...results.data] })
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <>
      <MDBox mt={2} mb={3}>
        <MDButton variant="gradient" color="info">
          New registration
        </MDButton>
      </MDBox>
      <Table striped bordered hover className="mx-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            patients.data.map((patient) => (
                <ProductsRow
                  id = {patient.id}
                  name = {patient.firstName + " " + patient.lastName}
                  email = {patient.email}
                  phone = {patient.mobile}
                  birthdate = {patient.birthDate}
                  key={patient.id}
                  handleUpdate={handleUpdate}
                  handleDetails={handleDetails}
                  handleDelete={handleDelete}
                  className="text-center"
                />
            ))
          }
          </tbody>
      </Table>
    </>
  );
}
