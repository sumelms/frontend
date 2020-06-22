import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./services/i18n";

import GlobalStyle from "./styles/global";

import AuthProvider from "./modules/Auth/contexts/auth";
import Routes from "./routes";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
