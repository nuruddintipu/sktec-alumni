import React from "react";
import {Col, Row} from "react-bootstrap";

const SectionHeading = ({heading, className, style}) => {
    return (
        <Row className={"justify-content-center"}>
            <Col md={12} className={"text-center mb-2"}>
                <h1 className={`mt-4 ${className}`} style={{color: 'var(--primary-color)', ...style}}>{heading}</h1>
            </Col>
        </Row>
    );
};

export default SectionHeading;