export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface OpenModalAction {
  type: typeof OPEN_MODAL;
  payload: string;
}

export interface CloseModalAction {
  type: typeof CLOSE_MODAL;
}

export interface ModalState {
  isOpen: boolean;
  type: string | null;
}

export type ModalActions = OpenModalAction | CloseModalAction;
