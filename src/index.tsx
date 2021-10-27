import { ReactKeycloakProvider } from '@react-keycloak/web';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ThemeProvider from './contexts/ThemeProvider';
import keycloak from './keycloak';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/global';

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens);
};

ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
      initOptions={{ onLoad: 'login-required' }}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </ReactKeycloakProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
