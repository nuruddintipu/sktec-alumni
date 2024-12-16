import {Col, Row} from "react-bootstrap";
import SectionHeading from "../../common/SectionHeading";
import React from "react";

const RegPageHeading = () => {
    return (
        <Row className={"justify-content-center"}>
            <Col md={12} className={"text-center justify-content-center align-items-center"} style={{marginTop: '100px'}}>
                <SectionHeading heading={"Alumni Registration Form"}/>
            </Col>
        </Row>
    );
};

export default RegPageHeading;
