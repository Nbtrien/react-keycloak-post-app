import React, { Fragment } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

interface Props {
  children: JSX.Element;
}

const AdminRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (keycloak?.authenticated) {
    const roles: string[] = keycloak.tokenParsed?.post_roles || [];
    if (roles?.includes("post_admin")) {
      return children;
    } else {
      return <Navigate to="/" state={{ from: location }} />;
    }
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};

export default AdminRoute;
