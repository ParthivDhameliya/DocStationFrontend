import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { PatientProvider } from "layouts/patients/data/patientContexProvider";
import { StaffProvider } from "layouts/staff/data/staffContexProvider";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <PatientProvider>
      <StaffProvider>
        <App />
      </StaffProvider>
      </PatientProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
