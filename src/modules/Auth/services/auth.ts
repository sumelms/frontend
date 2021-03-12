import UserService from '../../../services/user_service';

export interface User {
  name: string;
  email: string;
  password?: string;
}

export function SignIn(): Promise<any> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          token: UserService.GetToken(),
          user: {
            name: UserService.GetUserName(),
            email: UserService.GetEmail(),
          },
        }),
      1000,
    ),
  );
}

export function SignUp(): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve({}), 1000));
}

export function SignOut(): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve({}), 1000));
}
