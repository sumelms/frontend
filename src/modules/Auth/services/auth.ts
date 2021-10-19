import Keycloak from 'keycloak-js';

const isProduction = process.env.NODE_ENV === 'production';
const configUrl = `/${isProduction ? 'keycloak.json' : 'keycloak.dev.json'}`;
const onLoad: Keycloak.KeycloakOnLoad = 'login-required';
const _kc = Keycloak(configUrl);

async function init(appEntrypoint: () => void): Promise<void> {
  let auth = null;
  try {
    auth = await _kc.init({ onLoad });
  } catch (error) {
    console.error('Authentication Failed!');
  }

  if (!auth) {
    window.location.reload();
  } else {
    try {
      await _kc.loadUserProfile();
      appEntrypoint();
    } catch (error) {
      console.error('Cannot get user profile: ', error);
    }
  }
}

const doLogin = _kc.login;

const doLogOut = _kc.logout;

const getProfile = () => _kc.profile;

function hasRole(role: string): boolean {
  return _kc.hasRealmRole(role);
}

function hasRoles(roles: Array<string>): boolean {
  return roles.some(function (role: string): boolean {
    return hasRole(role);
  });
}

async function updateToken(onSuccess: (a: boolean) => void): Promise<void> {
  try {
    onSuccess(await _kc.updateToken(5));
  } catch (error) {
    doLogin();
  }
}

export default {
  init,
  doLogin,
  doLogOut,
  hasRoles,
  hasRole,
  getProfile,
  updateToken,
};
