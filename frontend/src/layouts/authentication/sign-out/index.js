import { Navigate } from "react-router-dom"

function SignOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("isAdmin")

    return <Navigate to="/authentication/sign-in" />
}

export default SignOut;