import { ModalState, ModalActions, OPEN_MODAL, CLOSE_MODAL } from '../store/modal/types';
import produce from 'immer';

const initialState: ModalState = {
  isOpen: false,
  type: null,
};

export const modalReducer = (state = initialState, action: ModalActions): ModalState =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_MODAL:
        draft.isOpen = true;
        draft.type = action.payload;
        return;
      case CLOSE_MODAL:
        draft.isOpen = false;
        draft.type = null;
        return;
    }
  });

export default modalReducer;
