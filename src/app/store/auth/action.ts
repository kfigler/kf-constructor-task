import { SIGN_IN_USER, SIGN_OUT_USER, UserLoginCredentialsInterface } from './types';
import { AppThunk } from '../types';
import firebase from '../../firestore/firestore';

export function signInUser(credentials: UserLoginCredentialsInterface): AppThunk {
  return async function (dispatch) {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
      dispatch({ type: SIGN_IN_USER, payload: result.user?.email });
    } catch (error) {
      throw error;
    }
  };
}

export function signOutUser(): AppThunk {
  return async function (dispatch) {
    try {
      await firebase.auth().signOut();
      dispatch({ type: SIGN_OUT_USER });
    } catch (error) {
      throw error;
    }
  };
}
