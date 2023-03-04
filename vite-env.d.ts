/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'testing' | 'staging' | 'production';
  readonly PUBLIC_URL: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_KEYCLOAK_URL: string;
  readonly VITE_APP_KEYCLOAK_REALM: string;
  readonly VITE_APP_KEYCLOAK_CLIENT_ID: string;
  readonly VITE_APP_BASE_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
