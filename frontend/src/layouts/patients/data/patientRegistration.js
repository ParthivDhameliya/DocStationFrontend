import { useState } from "react";
import BasicLayout from "layouts/authentication/components/BasicLayout";

import { Card, Box } from "@mui/material";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import PageLayout from "examples/LayoutContainers/PageLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const PatientRegistration = () => {
		const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        patientPrefix: '',
        firstName: '',
        middleName: '',
        lastName: '',
        preferredName: '',
        email: '',
        mobile: '',
        homeNumber: '',
        birthDate: '',
        age: '',
        gender: '',
        healthCareNumber: '',
        street: '',
        apt: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
        relation: '',
        emergencyContactName: '',
        emergencyContactEmail: '',
        emergencyContactNumber: '',
        currentDate: '',
        symptoms: '',
        isDiabetesMellitus: checked,
        isStroke: checked,
        isHighBloodPressure: checked,
        isHeartAttack: checked,
        isHeartSurgeryOrBypass: checked,
        isCancer: checked,
        isThyroidDisease: checked,
        isRespiratoryCondition: checked,
        isHighCholesterol: checked,
        isParentFracturedHip: checked,
        isMentalHealthCondition: checked,
        isFoodAllergy: checked,
        isAnimalsAllergy: checked,
        isPollenAllergy: checked,
        isMoldAllergy: checked,
        isDustMitesAllergy: checked,
        isMedicationsAllergy: checked,
        isLatexAllergy: checked,
        isInsectStingsAllergy: checked,
        isPerfumesOrHouseholdChemicalsAllergy: checked,
      });
    
      const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
			const onCheckboxChange = (e) => setFormData({...formData, [e.target.checked]: setChecked(true)})
    
      const onSubmit = async (e) => {
        e.preventDefault();
				console.log(formData)
				// try {
				// 	const res = await axios.post("http://127.0.0.1:8000/intake/create_registration/", formData);     

				// } catch (err) {
				// 		console.log(err)
				// }
      };

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
              Patient Registration
            </MDTypography>
          </MDBox>
					<MDBox>
					<div class="container m-5">
						<div class="form-container">
							<form id="patientForm">
								<div class="row mb-3">
									<div class="col-md-4">
										<div class="form-group">
											<label for="patientPrefix">Prefix:</label>
											<input type="text" id="patientPrefix" name="patientPrefix" value={formData.patientPrefix} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="firstName">First Name:</label>
											<input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => onChange(e)}class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="middleName">Middle Name:</label>
											<input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-4">
										<div class="form-group">
											<label for="lastName">Last Name:</label>
											<input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => onChange(e)}class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="preferredName">Preferred Name:</label>
											<input type="text" id="preferredName" name="preferredName" value={formData.preferredName} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="email">Email:</label>
											<input type="email" id="email" name="email" value={formData.email} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-4">
										<div class="form-group">
											<label for="mobile">Mobile Number:</label>
											<input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={(e) => onChange(e)}class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="homeNumber">Home Number:</label>
											<input type="tel" id="homeNumber" name="homeNumber" value={formData.homeNumber} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="birthDate">Birth Date:</label>
											<input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-4">
										<div class="form-group">
											<label for="age">Age:</label>
											<input type="number" id="age" name="age" value={formData.age} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="sex">Gender:</label>
											<select id="sex" name="sex" value={formData.gender} onChange={(e) => onChange(e)} class="form-control">
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="other">Other</option>
											</select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="healthCareNumber">Health Care Number:</label>
											<input type="text" id="healthCareNumber" name="healthCareNumber" onChange={(e) => onChange(e)} value={formData.healthCareNumber} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6">
										<div class="form-group">
											<label for="street">Street:</label>
											<input type="text" id="street" name="street" value={formData.street} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-group">
											<label for="apt">Apt:</label>
											<input type="text" id="apt" name="apt" value={formData.apt} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-3">
										<div class="form-group">
											<label for="city">City:</label>
											<input type="text" id="city" name="city" value={formData.city} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-4">
										<div class="form-group">
											<label for="province">Province:</label>
											<input type="text" id="province" name="province" value={formData.province} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="postalCode">Postal Code:</label>
											<input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-4">
										<div class="form-group">
											<label for="country">Country:</label>
											<input type="text" id="country" name="country" value={formData.country} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6">
										<div class="form-group">
											<label for="relation">Relation:</label>
											<input type="text" id="relation" name="relation" value={formData.relation} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="emergencyContactName">Emergency Contact Name:</label>
											<input type="text" id="emergencyContactName" name="emergencyContactName" value={formData.emergencyContactName} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6">
										<div class="form-group">
											<label for="emergencyContactEmail">Emergency Contact Email:</label>
											<input type="email" id="emergencyContactEmail" name="emergencyContactEmail" value={formData.emergencyContactEmail} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="emergencyContactNumber">Emergency Contact Number:</label>
											<input type="tel" id="emergencyContactNumber" name="emergencyContactNumber" value={formData.emergencyContactNumber} onChange={(e) => onChange(e)} class="form-control" />
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="symptoms">Symptoms:</label>
										<textarea type="text" id="symptoms" name="symptoms" value={formData.symptoms} onChange={(e) => onChange(e)} class="form-control" />
								</div>
								<div class="row mb-3">
									<div class="col-md-6">
										<span>Family History:</span>
										<div class="form-group">
											<label for="diabetesMellitus">Diabetes Mellitus:</label>
											<input type="checkbox" id="diabetesMellitus" name="diabetesMellitus" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="stroke">Stroke:</label>
											<input type="checkbox" id="stroke" name="stroke" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="highBloodPressure">High Blood Pressure:</label>
											<input type="checkbox" id="highBloodPressure" name="highBloodPressure" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="heartAttack">Heart Attack:</label>
											<input type="checkbox" id="heartAttack" name="heartAttack" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="heartSurgeryOrBypass">Heart Surgery or Bypass:</label>
											<input type="checkbox" id="heartSurgeryOrBypass" name="heartSurgeryOrBypass" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="cancer">Cancer:</label>
											<input type="checkbox" id="cancer" name="cancer" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="thyroidDisease">Thyroid Disease:</label>
											<input type="checkbox" id="thyroidDisease" name="thyroidDisease" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="respiratoryCondition">Respiratory Condition:</label>
											<input type="checkbox" id="respiratoryCondition" name="respiratoryCondition" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="highCholesterol">High Cholesterol: </label>
											<input type="checkbox" id="highCholesterol" name="highCholesterol" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="parentFracturedHip">Parent Fractured Hip:</label>
											<input type="checkbox" id="parentFracturedHip" name="parentFracturedHip" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="mentalHealthCondition">Mental Health Condition:</label>
											<input type="checkbox" id="mentalHealthCondition" name="mentalHealthCondition" onChange={(e) => onCheckboxChange(e)} />
										</div>
									</div>
									<div class="col-md-6">
										<span>Allergies:</span>
										<div class="form-group">
											<label for="foodAllergy">Food Allergy:</label>
											<input type="checkbox" id="foodAllergy" name="foodAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="animalsAllergy">Animals Allergy:</label>
											<input type="checkbox" id="animalsAllergy" name="animalsAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="pollenAllergy">Pollen Allergy:</label>
											<input type="checkbox" id="pollenAllergy" name="pollenAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="moldAllergy">Mold Allergy:</label>
											<input type="checkbox" id="moldAllergy" name="moldAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="dustMitesAllergy">Dust Mites Allergy:</label>
											<input type="checkbox" id="dustMitesAllergy" name="dustMitesAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="medicationsAllergy">Medications Allergy:</label>
											<input type="checkbox" id="medicationsAllergy" name="medicationsAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="latexAllergy">Latex Allergy:</label>
											<input type="checkbox" id="latexAllergy" name="latexAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="insectStingsAllergy">Insect Stings Allergy:</label>
											<input type="checkbox" id="insectStingsAllergy" name="insectStingsAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>

										<div class="form-group">
											<label for="perfumesOrHouseholdChemicalsAllergy">Perfumes or Household Chemicals Allergy:</label>
											<input type="checkbox" id="perfumesOrHouseholdChemicalsAllergy" name="perfumesOrHouseholdChemicalsAllergy" onChange={(e) => onCheckboxChange(e)} />
										</div>
									</div>
								</div>
								<div class="text-center">
									<button type="submit" class="btn btn-primary mt-4" onClick={(e) => onSubmit(e)}>Submit</button>
								</div>
							</form>
						</div>
					</div>
				</MDBox>
      </PageLayout>
    );
}

export default PatientRegistration;