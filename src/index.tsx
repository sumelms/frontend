import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ThemeProvider from './contexts/ThemeProvider';
import AuthService from './modules/Auth/services/auth';
import GlobalStyle from './styles/global';

const entrypoint = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

AuthService.init(entrypoint);
