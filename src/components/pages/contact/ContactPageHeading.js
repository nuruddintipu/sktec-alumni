import {Col, Row} from "react-bootstrap";
import React from "react";
import SectionHeading from "../../common/SectionHeading";

const ContactPageHeading = () => {
    return (
        <Row className={"justify-content-center"}>
            <Col md={6} className={"text-center mb-2"}>
                <SectionHeading heading={"Contact Form"}/>
            </Col>
        </Row>
    );
};

export default ContactPageHeading;