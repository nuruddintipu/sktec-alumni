import React from "react";
import { Col } from "react-bootstrap";

const FormRowWrapper = ({ children, md, className }) => {
    return (
        <Col md={md} className={className}>
            {children}
        </Col>
    );
};

export default FormRowWrapper;
