import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

// react-router-dom components
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Dashboard from "layouts/dashboard";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const res = await axios.post("http://127.0.0.1:8000/auth/login", formData);

        const token = res.data.token
        const user = jwtDecode(token); 
        localStorage.setItem('username', user.sub);
        localStorage.setItem('isAdmin', user.isAdmin);
        localStorage.setItem('token', token);

        setFormData({
          username: "",
          password: "",
        }); 

    } catch (err) {
        console.log(err)
    }
  };

  const token = localStorage.getItem("token");
  if (token !== null)
    return <Navigate to="/dashboard" />

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="username" label="Username"  name="username" value={username} onChange={(e) => onChange(e)} fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password"  name="password" value={password} onChange={(e) => onChange(e)}fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={(e) => onSubmit(e)} fullWidth>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
