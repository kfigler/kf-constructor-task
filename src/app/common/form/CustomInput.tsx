import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';

export interface CustomInputProps {
  name: string;
  label?: string;
  placeholder?: string;
}
// TODO Make sure that passing props.name to controlid will not cause any issues
export default function CustomInput({ label, placeholder, ...props }: CustomInputProps) {
  const [field, meta] = useField(props);
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        type="text"
        placeholder={placeholder}
        isInvalid={meta.touched && !!meta.error}
      />
      {meta.touched && !meta.error ? <div>{meta.error}</div> : null}
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  );
}
