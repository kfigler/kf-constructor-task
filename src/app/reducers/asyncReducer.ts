import { AsyncState, AsyncActionTypes, ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from '../store/async/types';

const initialState: AsyncState = {
  loading: false,
  error: null,
};

export default function asyncReducer(state = initialState, action: AsyncActionTypes) {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        loading: true,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
