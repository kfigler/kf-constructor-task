import React from 'react';
import CustomModal from '../../app/common/modal/CustomModal';
import AuthForm from './AuthForm';

export default function AuthModal() {
  return (
    <CustomModal header="Log In">
      <AuthForm />
    </CustomModal>
  );
}
