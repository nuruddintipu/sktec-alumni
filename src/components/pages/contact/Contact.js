import React from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import '../registration/registrationForm.css';

function Contact() {
    return (
        <Container className={"mt-4 zoomIn"} style={{maxWidth: '60%'}}>
            <Row>
                <Col>
                    <br/>
                    <Card className="my-4  mb-5"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}>
                        <Card.Body className="my-4 mx-3">
                            <Card.Title>Send Us Message</Card.Title>
                            <Form.Group className="mb-3">
                                <Row>
                                    <Col md={6} className={'mt-4'}>
                                        <Form.Control type="text" placeholder="Name" required/>
                                    </Col>

                                    <Col md={6} className={'mt-4'}>
                                        <Form.Control type="text" placeholder="Phone Number" required/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={8} className={'mt-4'}>
                                        <Form.Control type="email" placeholder="Email Address e.g. johndoe@domain.com"
                                                      required/>
                                    </Col>
                                </Row>
                                <Row className={"mt-4"}>
                                    <Col>
                                        <Form.Control as="textarea" rows={3} placeholder={"Message"} required/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={"d-flex justify-content-center mt-4"}>
                                        <Button variant="primary">Send Message</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
