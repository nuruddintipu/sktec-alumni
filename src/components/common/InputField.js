import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({
                        controlId,
                        label,
                        type,
                        name,
                        placeholder ,
                        onChange = () => {},
                        className,
                        state
}) => {

    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                className={className}
                value={state[name]}
            />
        </Form.Group>
    );
};

export default InputField;
