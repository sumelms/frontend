import "./services/i18n";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./modules/Auth/contexts/auth";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

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
