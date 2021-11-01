export function useKeycloak() {
  const token = 'A random string that is non zero length';

  const userProfile = {
    username: 'student',
    email: 'student@sumelms.test',
    firstName: 'Student',
    lastName: 'User',
  };
  const realmAccess = { roles: ['student', 'educator', 'admin'] };

  const tokenParsed = {
    name: userProfile.firstName,
  };

  let authenticated = false;

  const authClient = {
    authenticated,
    hasRealmRole(role: string) {
      return true;
    },
    hasResourceRole(role: string) {
      return true;
    },
    idToken: token,
    initialized: true,
    loadUserProfile() {
      return Promise.resolve({ userProfile });
    },
    login() {
      authenticated = true;
    },
    logout() {
      authenticated = false;
    },
    profile: userProfile,
    realm: 'DemoRealm',
    realmAccess,
    refreshToken: token,
    token,
    tokenParsed,
  };

  return {
    initialized: true,
    keycloak: authClient,
  };
}
