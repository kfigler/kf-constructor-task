import { OPEN_MODAL, CLOSE_MODAL, OpenModalAction, CloseModalAction } from './types';

export function openModal(payload: string): OpenModalAction {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function closeModal(): CloseModalAction {
  return {
    type: CLOSE_MODAL,
  };
}
