import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";
const token = JSON.parse(localStorage.getItem("token")) || null;

const ProtectedRoute = ({ children }) => {
  if (token === null) {
    return <Navigate to="/NotFoundPage" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
