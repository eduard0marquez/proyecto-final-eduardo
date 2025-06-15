import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";

function ProtectedRoute({ children }) {
  const [hasAccess, setAccess] = useState(true);

  if (!hasAccess) return <Navigate to="/NotFoundPage" />;
  return children;
}
export default ProtectedRoute;
