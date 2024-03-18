import axios from "axios";
import { useEffect, useContext } from "react";
import {staffContext} from "./staffContexProvider"
import Table from "@mui/material/Table";
import StaffRow from "./staffTableRow";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function data() {

  const [staffs, setStaffs] = useContext(staffContext);

  const handleUpdate = (id) => {

  }

  const handleDetails = (id) => {

  }

  const handleDelete = async (id) => {
    const res = await axios.delete("http://127.0.0.1:8000/staff/"+id);

    if (res.status === 204) {
      const filteredStaffs = staffs.data.filter((staff) => staff.id !== id);
      setStaffs({ data: [...filteredStaffs] })
      alert("Staff deleted successfully!");
    } else {
      alert("Error occurred!");
    }
  }

  useEffect(() => {
    const res = axios.get("http://127.0.0.1:8000/staff/");

    res.then(results => {
      setStaffs({ "data": [...results.data] })
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <Table striped bordered hover className="mx-2">
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          staffs.data.map((staff) => (
              <StaffRow
                id={staff.id}
                username= {staff.username}
                name = {staff.firstName + " " + staff.lastName}
                email = {staff.email}
                phone = {staff.contactNumber}
                position = {staff.position}
                key={staff.id}
                handleUpdate={handleUpdate}
                handleDetails={handleDetails}
                handleDelete={handleDelete}
                className="text-center"
              />
          ))
        }
        </tbody>
		</Table>
  );
}
