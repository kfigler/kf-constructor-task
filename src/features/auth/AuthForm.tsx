import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from '../../app/common/form/CustomInput';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
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

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Please provide a valid email'),
    password: Yup.string().required('Content is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          await dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        } catch (error) {
          setErrors({ authError: error.message });
          setSubmitting(false);
        }
      }}
      validationSchema={LoginSchema}
    >
      {({ isSubmitting, errors }) => {
        return (
          <Form>
            {errors.authError && <Alert variant="danger">{errors.authError}</Alert>}
            <CustomInput name="email" label="Email" placeholder="Email" />
            <CustomInput name="password" type="password" label="Password" placeholder="Password" />
            <Button variant="primary" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Loading...' : 'Log In'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
