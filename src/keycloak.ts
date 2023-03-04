import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: import.meta.env.VITE_APP_KEYCLOAK_URL,
  realm: import.meta.env.VITE_APP_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID,
});

export default keycloak;
