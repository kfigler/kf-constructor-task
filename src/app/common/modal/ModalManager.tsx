import React from 'react';
import { RootState } from '../../reducers/rootReducer';
import { useSelector } from 'react-redux';
import AuthModal from '../../../features/auth/AuthModal';

export default function ModalManager() {
  const ModalMap: { [key: string]: () => JSX.Element } = {
    AuthModal,
  };

  const currentModal = useSelector((state: RootState) => state.modal.type);
  let renderedModal: JSX.Element | null = null;
  if (currentModal) {
    const ModalComponent = ModalMap[currentModal];
    renderedModal = <ModalComponent />;
  }

  return <>{renderedModal}</>;
}
