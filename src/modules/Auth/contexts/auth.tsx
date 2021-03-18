import { KeycloakProfile } from 'keycloak-js';
import React, { createContext, useContext } from 'react';

import AuthService from '../services/auth';

interface AuthContextProps {
  profile: KeycloakProfile | undefined;
  doLogout: () => void;
  hasRole: (roles: string) => boolean;
  hasRoles: (roles: Array<string>) => boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = (props) => {
  return (
    <AuthContext.Provider
      value={{
        profile: AuthService.getProfile(),
        doLogout: AuthService.doLogOut,
        hasRole: AuthService.hasRole,
        hasRoles: AuthService.hasRoles,
      }}
    >
      {props?.children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  return useContext<AuthContextProps>(AuthContext);
}

export default AuthProvider;
