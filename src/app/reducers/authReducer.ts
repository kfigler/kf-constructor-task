import { AuthState, AuthActionTypes, SIGN_IN_USER, SIGN_OUT_USER } from '../store/auth/types';

const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
  email: null,
};

export default function authReducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload.currentUser,
        email: action.payload.email,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
