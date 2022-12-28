import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../CONTEXT/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <p>loading</p>;
  }
  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
