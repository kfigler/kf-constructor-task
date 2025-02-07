import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';
import { CustomInputProps } from './CustomInput';

interface CustomTextareaProps extends CustomInputProps {
  rows: number;
}

export default function CustomTextArea({ label, placeholder, rows, ...props }: CustomTextareaProps) {
  const [field, meta] = useField(props);
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        rows={rows}
        as="textarea"
        placeholder={placeholder}
        isInvalid={meta.touched && !!meta.error}
      />
      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  );
}
