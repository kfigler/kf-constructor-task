import { AuthState, AuthActionTypes, SIGN_IN_USER, SIGN_OUT_USER } from '../store/auth/types';
import produce from 'immer';

const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: null,
  email: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_USER:
        const { currentUser, email } = action.payload;
        draft.isAuthenticated = true;
        draft.currentUser = currentUser;
        draft.email = email;
        return;
      case SIGN_OUT_USER:
        draft.isAuthenticated = false;
        draft.currentUser = null;
        draft.email = null;
    }
  });

export default authReducer;
