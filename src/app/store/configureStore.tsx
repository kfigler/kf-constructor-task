import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

// TODO Outsource this to index.tsx
export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
