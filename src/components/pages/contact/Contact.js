import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../registration/registrationForm.css';
import ContactPageHeading from "./ContactPageHeading";
import ContactInfoSection from "./contact-info/ContactInfoSection";
import ContactFormSection from "./contact-form/ContactFormSection";

function Contact() {
    return (
        <Container className={"mt-5 zoomIn"} style={{maxWidth: '70%'}}>
            <ContactPageHeading />

            <Row className={"justify-content-center"}>
                <Col md={12}>
                    <div style={{width: '100%'}}>
                        <Row className={"mb-5"}>
                            <ContactInfoSection />
                            <ContactFormSection />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
