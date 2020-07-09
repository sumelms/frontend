export interface User {
  name: string;
  email: string;
}

export function SignIn(): Promise<any> {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          token: "fake-token",
          user: { name: "Ricardo Lüders", email: "my@email.com" },
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
