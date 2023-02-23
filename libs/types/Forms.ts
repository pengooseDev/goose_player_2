/* User */

/* SignIn */
export type signInId = string;
export type signInPassword = string;

export interface SignInFormState {
  signInId: signInId;
  signInPassword: signInPassword;
}

/* LogIn */
export type logInId = string;
export type logInPassword = string;

export interface LogInFormState {
  logInId: logInId;
  logInPassword: logInPassword;
}
