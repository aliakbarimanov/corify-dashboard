// import Outlet, Navigate
import { Outlet, Navigate } from "react-router-dom";

// import useContext
import { useContext } from "react";

// import Context
import { Context } from "../utils/MainContext";

const ProtectedRoutes = () => {
  const { userIn, setUserIn } = useContext(Context);

  return userIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
