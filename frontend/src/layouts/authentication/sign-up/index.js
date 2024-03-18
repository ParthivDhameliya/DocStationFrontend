// react-router-dom components
import axios from 'axios';

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useState } from "react";

function Cover() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    street: "",
    apt: 0,
    city: "",
    province: "",
    postalCode: "",
    country: "",
    position: "",
    password: "",
  });

  const { firstName, lastName, middleName, contactNumber, email, street, apt, city, province, postalCode, country, position, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const res = await axios.post("http://127.0.0.1:8000/create_user/", formData);

        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          contactNumber: "",
          email: "",
          street: "",
          apt: 0,
          city: "",
          province: "",
          postalCode: "",
          country: "",
          position: "",
          password: "",
        });        
    } catch (err) {
        console.log(err)
    }
  };
  
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography display="h4" variant="medium" color="white" my={1}>
            Enter staff details
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="First Name" name="firstName" value={firstName} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Middle Name" name="middleName" value={middleName} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Last Name" name="lastName" value={lastName} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="email" label="Email" name="email" value={email} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Contact Number" name="contactNumber" value={contactNumber} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Street" name="street" value={street} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Apt" name="apt" value={apt} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="city" name="city" value={city} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Province" name="province" value={province} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Postal Code" name="postalCode" value={postalCode} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Country" name="country" value={country} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Position" name="position" value={position} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" name="password" value={password} onChange={(e) => onChange(e)} variant="standard" fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={(e) => onSubmit(e)} fullWidth>
                Register
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
