import React from "react";
import { Form } from "react-bootstrap";

const TextAreaField = ({ controlId, label, name, placeholder, rows, onChange, classname, state }) => {

    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="textarea"
                name={name}
                placeholder={placeholder}
                rows={rows}
                onChange={(e) => onChange(e)}
                className={classname}
                value={state[name]}
            />
        </Form.Group>
    );
};

export default TextAreaField;
