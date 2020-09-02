import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from './types';

export function asyncActionStart() {
  return { type: ASYNC_ACTION_START };
}

export function asyncActionFinish(error: string | null) {
  return {
    type: ASYNC_ACTION_FINISH,
    payload: error,
  };
}
