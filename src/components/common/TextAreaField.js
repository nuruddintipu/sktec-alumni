import React from "react";
import { Form } from "react-bootstrap";

const TextAreaField = ({ controlId, label, name, placeholder, rows }) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as="textarea" name={name} placeholder={placeholder} rows={rows} />
        </Form.Group>
    );
};

export default TextAreaField;
