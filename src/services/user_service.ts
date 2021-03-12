import Keycloak, { KeycloakConfig } from 'keycloak-js';

const onLoad: Keycloak.KeycloakOnLoad = 'login-required';

class Config implements KeycloakConfig {
  url: string = process.env.AUTH_URL || 'auth';
  realm: string = process.env.AUTH_REALM || 'sume';
  clientId: string = process.env.AUTH_CLIENT_ID || 'sume-app';
}

const _kc = Keycloak(new Config());

function InitKeycloak(appEntrypoint: () => void): void {
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

const DoLogin = _kc.login;

const DoLogOut = _kc.logout;

const GetSigned = () => _kc.authenticated;

const GetToken = () => _kc.token;

const GetEmail = () => _kc.profile?.email;

const GetFirstName = () => _kc.profile?.firstName;

const GetLastName = () => _kc.profile?.lastName;

const GetUserName = () => _kc.profile?.username;

function HasRole(roles: Array<string>): boolean {
  return roles.some(function (role: string): boolean {
    return _kc.hasRealmRole(role);
  });
}

function UpdateToken(onSuccess: (a: boolean) => void): void {
  _kc
    .updateToken(5)
    .then((value: boolean) => onSuccess(value))
    .catch(DoLogin);
}

export default {
  InitKeycloak,
  DoLogin,
  DoLogOut,
  GetToken,
  GetSigned,
  GetUserName,
  GetLastName,
  GetEmail,
  GetFirstName,
  HasRole,
  UpdateToken,
};
