import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
  modal: modalReducer,
  async: asyncReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
