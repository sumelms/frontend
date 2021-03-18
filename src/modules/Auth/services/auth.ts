import Keycloak, { KeycloakConfig } from 'keycloak-js';

const onLoad: Keycloak.KeycloakOnLoad = 'login-required';

class Config implements KeycloakConfig {
  url: string = process.env.AUTH_URL || 'auth';
  realm: string = process.env.AUTH_REALM || 'sume';
  clientId: string = process.env.AUTH_CLIENT_ID || 'sume-app';
}

const _kc = Keycloak(new Config());

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
