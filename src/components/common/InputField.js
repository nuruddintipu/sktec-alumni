import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({ controlId, label, type, name, placeholder , onChange = () => {}}) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </Form.Group>
    );
};

export default InputField;
