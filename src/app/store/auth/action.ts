import {
  SIGN_IN_USER,
  SIGN_OUT_USER,
  SignInUserAction,
  UserLoginCredentialsInterface,
  SignOutUserAction,
} from './types';

export function signInUser(credentials: UserLoginCredentialsInterface): SignInUserAction {
  return {
    type: SIGN_IN_USER,
    payload: credentials.email,
  };
}

export function signOutUser(): SignOutUserAction {
  return {
    type: SIGN_OUT_USER,
  };
}
