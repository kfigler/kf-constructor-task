import { AsyncState, AsyncActionTypes, ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from '../store/async/types';
import produce from 'immer';

const initialState: AsyncState = {
  loading: false,
  error: null,
};

const asyncReducer = (state = initialState, action: AsyncActionTypes): AsyncState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ASYNC_ACTION_START:
        draft.loading = true;
        return;
      case ASYNC_ACTION_FINISH:
        draft.loading = false;
        draft.error = action.payload;
        return;
    }
  });

export default asyncReducer;
