import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
