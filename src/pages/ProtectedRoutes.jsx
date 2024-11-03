import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const [isLoggedIn] = useState(localStorage.getItem("userInfo"));
  return <Outlet />
  // return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
