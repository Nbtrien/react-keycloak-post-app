import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const { keycloak, initialized } = useKeycloak();

  // Show loading or placeholder while Keycloak is initializing
  if (!initialized) {
    return <div>Loading...</div>;
  }

  // Check if authenticated
  if (keycloak?.authenticated) {
    return children;
  } else {
    // Redirect to login page
    return <Navigate to="/" state={{ from: location }} />;
  }
};

export default PrivateRoute;
