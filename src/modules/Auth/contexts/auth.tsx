import React, { createContext, useState, useContext } from "react";

import { User, SignIn } from "../services/auth";

interface AuthContextProps {
  signed: boolean;
  user: User | null;
  signIn(): Promise<any>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState(null);

  async function signIn(): Promise<void> {
    const response = await SignIn();
    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {props?.children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  return useContext<AuthContextProps>(AuthContext);
}

export default AuthProvider;
