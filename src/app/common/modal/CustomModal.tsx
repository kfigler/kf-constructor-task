import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal/actions';

interface CustomModalProps {
  header: string;
  children: JSX.Element;
}

export default function CustomModal({ header, children }: CustomModalProps) {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeModal());
  }

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
