// Authentication action types
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: string | null;
}

export interface UserLoginCredentialsInterface {
  email: string;
  password: string;
}

// TODO Implement user interface
// export interface UserInterface {
//   email: string;
// }

export interface SignInUserAction {
  type: typeof SIGN_IN_USER;
  payload: string;
}

export interface SignOutUserAction {
  type: typeof SIGN_OUT_USER;
}

export type AuthActionTypes = SignInUserAction | SignOutUserAction;
