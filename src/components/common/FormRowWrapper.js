import React from "react";
import {Col, Row} from "react-bootstrap";

const FormRowWrapper = ({ children, md, className }) => {
    return (
        <Row>
            <Col md={md} className={className}>
                {children}
            </Col>
        </Row>
    );
};

export default FormRowWrapper;
