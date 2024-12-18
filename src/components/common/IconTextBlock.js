import {Col, Row} from "react-bootstrap";
import React from "react";

const IconTextBlock = ({icon, info}) => {
    return (
        <Row className="mb-2">
            <Col xs={1}>
                {icon}
            </Col>
            <Col>
                {info}
            </Col>
        </Row>
    );
};


export default IconTextBlock;