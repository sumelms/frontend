import { ReactKeycloakProvider } from '@react-keycloak/web';
import { Flowbite } from 'flowbite-react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import keycloak from './keycloak';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'login-required' }}>
    <React.StrictMode>
      <Flowbite theme={{ theme }}>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </Flowbite>
      <GlobalStyle />
    </React.StrictMode>
  </ReactKeycloakProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
