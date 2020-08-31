import { ModalState, ModalActions, OPEN_MODAL, CLOSE_MODAL } from '../store/modal/types';

const initialState: ModalState = {
  isOpen: false,
  type: null,
};

export default function modalReducer(state = initialState, action: ModalActions): ModalState {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        type: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        type: null,
      };
    default:
      return state;
  }
}
