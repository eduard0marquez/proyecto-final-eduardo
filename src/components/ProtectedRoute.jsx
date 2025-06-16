import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";
import { Logueado } from "../helpers/controlLogin";

const ProtectedRoute = ({ children }) => {
  const sesion = Logueado();
  if (sesion === null) {
    return <Navigate to="/NotFoundPage" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
