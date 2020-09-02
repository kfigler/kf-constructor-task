export const ASYNC_ACTION_START = 'ASYNC_ACTION_START';
export const ASYNC_ACTION_FINISH = 'ASYNC_ACTION_FINISH';

export interface AsyncState {
  loading: boolean;
  error: null | string;
}

interface AsyncActionStart {
  type: typeof ASYNC_ACTION_START;
}

interface AsyncActionFinish {
  type: typeof ASYNC_ACTION_FINISH;
  payload: string | null;
}

export type AsyncActionTypes = AsyncActionStart | AsyncActionFinish;
