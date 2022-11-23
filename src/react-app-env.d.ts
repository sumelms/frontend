/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'testing' | 'staging' | 'production';
    PUBLIC_URL: string;
    REACT_APP_API_URL: string;
    REACT_APP_KEYCLOAK_URL: string;
    REACT_APP_KEYCLOAK_REALM: string;
    REACT_APP_KEYCLOAK_CLIENT_ID: string;
    REACT_APP_BASE_SERVER_URL: string;
  }
}

// interface Window {}
