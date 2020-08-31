import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from '../../app/common/form/CustomInput';
import Button from 'react-bootstrap/Button';
import { UserLoginCredentialsInterface } from '../../app/store/auth/types';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../app/store/auth/action';
import { closeModal } from '../../app/store/modal/actions';

export default function AuthForm() {
  const dispatch = useDispatch();

  const initialValues: UserLoginCredentialsInterface = {
    email: '',
    password: '',
  };

  function handleSubmit(values: UserLoginCredentialsInterface) {
    dispatch(signInUser(values));
    dispatch(closeModal());
  }

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Please provide a valid email'),
    password: Yup.string().required('Content is required'),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
      <Form>
        <CustomInput name="email" label="Email" placeholder="Email" />
        <CustomInput name="password" label="Password" placeholder="Password" />
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
