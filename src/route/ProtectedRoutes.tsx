import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const ProtectedRoutes = () => {
  const isAuth = useUserStore(state => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
