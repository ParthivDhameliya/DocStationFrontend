import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const PatientDetails = () => {
	const location = useLocation();
  const { patient } = location.state || {};

	return (
		<PageLayout>
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
					<MDTypography variant="h4" fontWeight="medium" color="white" mt={1} fullWidth>
						Patient Details
					</MDTypography>
			</MDBox>
			<MDBox>
				{patient}
			</MDBox>
		</PageLayout>
	);
}

export default PatientDetails;