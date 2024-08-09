// src/keycloak/KeycloakContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from "react";
import UserService from "./UserService";

interface KeycloakContextProps {
  keycloakInstance: any;
  authenticated: boolean;
  token: string | undefined;
  login: () => void;
  logout: () => void;
  username: string | undefined;
  hasRole: (roles: string[]) => boolean;
}

export const KeycloakContext = createContext<KeycloakContextProps>({
  keycloakInstance: null,
  authenticated: false,
  token: undefined,
  login: () => {},
  logout: () => {},
  username: undefined,
  hasRole: () => false,
});

interface KeycloakProviderProps {
  children: ReactNode;
}

export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean | any>(false);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    UserService.initKeycloak(() => {
      setAuthenticated(UserService.isLoggedIn());
      setToken(UserService.getToken());
    }, UserService.doLogout);
  }, []);

  return (
    <KeycloakContext.Provider
      value={{
        keycloakInstance: UserService.getKeyCloack(),
        authenticated,
        token,
        login: UserService.doLogin,
        logout: UserService.doLogout,
        username,
        hasRole: UserService.hasRole,
      }}
    >
      {children}
    </KeycloakContext.Provider>
  );
};
