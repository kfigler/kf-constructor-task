import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';

interface CustomSelectProps {
  name: string;
  label?: string;
  options: string[];
  multiple?: boolean;
}

export default function CustomSelect({ label, options, ...props }: CustomSelectProps) {
  const [field] = useField(props);
  return (
    <Form.Group controlId={props.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...field} {...props} as="select">
        {options.map((option, index) => (
          <option key={`${option}-${index}`}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}
