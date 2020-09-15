import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';

export interface CustomInputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
}

export default function CustomInput({ label, placeholder, type, ...props }: CustomInputProps) {
  const [field, meta] = useField(props);
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        isInvalid={meta.touched && !!meta.error}
      />
      {meta.touched && !meta.error ? <div>{meta.error}</div> : null}
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  );
}
