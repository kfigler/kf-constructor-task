import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/store/modal/actions';

export default function SignedOutUser() {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(openModal('AuthModal'))} variant="light">
      Log In
    </Button>
  );
}
