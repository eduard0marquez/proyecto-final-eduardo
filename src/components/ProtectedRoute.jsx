import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";

function ProtectedRoute({ children }) {
  return children;
}

export default ProtectedRoute;
