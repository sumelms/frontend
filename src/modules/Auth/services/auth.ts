import Keycloak from 'keycloak-js';

const isProduction = process.env.NODE_ENV === 'production';
const configUrl = isProduction ? 'keycloak.json' : 'keycloak.dev.json';
const onLoad: Keycloak.KeycloakOnLoad = 'login-required';
const _kc = Keycloak(configUrl);

function init(appEntrypoint: () => void): void {
  _kc
    .init({
      onLoad,
    })
    .then((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        _kc
          .loadUserProfile()
          .then(() => {
            appEntrypoint();
          })
          .catch((err) => {
            console.error('Cannot get user profile: ', err);
          });
      }
    })
    .catch(() => {
      console.error('Authentication Failed!');
    });
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

function updateToken(onSuccess: (a: boolean) => void): void {
  _kc
    .updateToken(5)
    .then((value: boolean) => onSuccess(value))
    .catch(doLogin);
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
