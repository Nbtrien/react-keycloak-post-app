import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import "./App.css";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak/keycloak";
import AdminRoute from "./AdminRoute";
import { AdminRoutes, UserRoutes } from "./routes";
import UserRoute from "./UserRoute";

const App: React.FC = () => {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route>
            {UserRoutes.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<UserRoute>{<item.element />}</UserRoute>}
              />
            ))}
          </Route>
          <Route>
            {AdminRoutes.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<AdminRoute>{<item.element />}</AdminRoute>}
              />
            ))}
          </Route>
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
};

export default App;
