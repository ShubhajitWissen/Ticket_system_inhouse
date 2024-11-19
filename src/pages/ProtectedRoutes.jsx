import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const token = localStorage.getItem("token");
  //return <Outlet />
   return !!token ? <Outlet /> : <Navigate to="/login" />;
}
