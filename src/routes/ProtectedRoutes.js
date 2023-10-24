import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const [userIn, setUserIn] = useState(false);

    return userIn ? <Outlet/> : <Navigate to="/login"/>;
}

export default ProtectedRoutes;
