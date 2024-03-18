/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Staffs from "layouts/staff"
import Patients from "layouts/patients"
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import SignOut from "layouts/authentication/sign-out";
import PatientRegistration from "layouts/patients/data/patientRegistration";
import PatientDetails from "layouts/patients/data/patientDetails";

// @mui icons
import Icon from "@mui/material/Icon";

export const sideNavRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    isAuthenticated: true,
    isStaff: true,
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Staff",
    key: "staffs",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/staffs",
    isAuthenticated: true,
    isStaff: false,
    component: <Staffs />,
  },
  {
    type: "collapse",
    name: "Patients",
    key: "patients",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients",
    isAuthenticated: true,
    isStaff: true,
    component: <Patients />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    isAuthenticated: true,
    isStaff: true,
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    isAuthenticated: false,
    isStaff: true,
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    isAuthenticated: true,
    isStaff: false,
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/signout",
    isAuthenticated: true,
    isStaff: true,
    component: <SignOut />,
  },
]

export const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    isAuthenticated: true,
    isStaff: true,
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Patient Registration",
    key: "patientRegistration",
    icon: <Icon fontSize="small">registration</Icon>,
    route: "/patients/registration",
    isAuthenticated: true,
    isStaff: true,
    component: <PatientRegistration />,
  },
  {
    type: "collapse",
    name: "Patient Details",
    key: "patientDetails",
    icon: <Icon fontSize="small">patient_details</Icon>,
    route: "/patient/details",
    isAuthenticated: true,
    isStaff: true,
    component: <PatientDetails />,
  },
  {
    type: "collapse",
    name: "Staff",
    key: "staffs",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/staffs",
    isAuthenticated: true,
    isStaff: false,
    component: <Staffs />,
  },
  {
    type: "collapse",
    name: "Patients",
    key: "patients",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/patients",
    isAuthenticated: true,
    isStaff: true,
    component: <Patients />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    isAuthenticated: true,
    isStaff: true,
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    isAuthenticated: false,
    isStaff: true,
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    isAuthenticated: true,
    isStaff: false,
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/signout",
    isAuthenticated: true,
    isStaff: true,
    component: <SignOut />,
  },
]
