import {Col, Row} from "react-bootstrap";
import React from "react";

const IconTextBlock = ({icon, contactInfo}) => {
    return (
        <Row className="mb-2">
            <Col xs={1}>
                {icon}
            </Col>
            <Col>
                {contactInfo}
            </Col>
        </Row>
    );
};


export default IconTextBlock;