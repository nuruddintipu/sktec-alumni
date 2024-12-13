import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import GeneralInfoForm from "./GeneralInfoForm";
import AcademicInfoForm from "./AcademicInfoForm";
import JobExperienceForm from "./JobExperienceForm";
import './registrationForm.css';

function RegistrationForm() {
    return (
        <>
            <Container mt={4} className="bg-transparent regForm zoomIn" >
                <Row className="d-flex justify-content-center align-items-center h-100"

                >
                    <Col>
                        <br />
                        <Card className="my-4"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                            <Card.Body className="my-4 mx-3">
                                <Card.Title>ALUMNI REGISTRATION FORM</Card.Title>
                                <br />

                                {/* General Information Section */}
                                <GeneralInfoForm />

                                {/* Academic Information Section */}
                                <AcademicInfoForm />

                                {/* job experience Form Sections*/}
                                <JobExperienceForm />

                                {/* Buttons   */}
                                <Row className={"d-flex justify-content-md-end"}>
                                    <Col md={3} className={"d-flex justify-content-md-end"}>

                                    </Col>
                                    <Col md={6} className={"d-flex justify-content-md-end"}>
                                        <Button
                                            variant="secondary"
                                            className={"mx-4"}
                                        >
                                            Reset All
                                        </Button>
                                        <Button variant="primary">Submit Form</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RegistrationForm;
