// Authentication action types
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: string | null;
  email: string | null;
}

export interface UserLoginCredentialsInterface {
  email: string;
  password: string;
  // This is added so that a formik error can be added
  authError?: string;
}

export interface SignInUserAction {
  type: typeof SIGN_IN_USER;
  payload: { currentUser: string; email: string };
}

export interface SignOutUserAction {
  type: typeof SIGN_OUT_USER;
}

export type AuthActionTypes = SignInUserAction | SignOutUserAction;
