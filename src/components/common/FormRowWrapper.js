import React from "react";
import {Col, Row} from "react-bootstrap";

const FormRowWrapper = ({ children, md, className="", style={}, ...rest }) => {
    return (
        <Row className={className} style={style} {...rest}>
            <Col md={md} >
                {children}
            </Col>
        </Row>
    );
};

export default FormRowWrapper;
