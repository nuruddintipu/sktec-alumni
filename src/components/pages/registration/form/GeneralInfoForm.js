import React from 'react';
import { Col, Row, Form, Card } from 'react-bootstrap';

function GeneralInfoForm() {
    return (
        <>
            <Card.Subtitle>General Information</Card.Subtitle>
            <Form.Group className="mb-3">
                {/* First Name & Last Name */}
                <Row className="mt-4">
                    <Col md={6}>
                        <Form.Control type="text" placeholder="First Name" required />
                    </Col>
                    <Col md={6}>
                        <Form.Control type="text" placeholder="Last Name" required/>
                    </Col>
                </Row>

                {/* Gender Selection */}
                <Row className="mt-4">
                    <Col md={6}>
                        <Form.Group required>
                            <Form.Select
                                defaultValue=""
                                style={{ color: "grey" }}
                                onChange={(e) => e.target.style.color = e.target.value === "" ? "grey" : "black"}
                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                <option value="Male" style={{ color: 'black' }}>Male</option>
                                <option value="Female" style={{ color: 'black' }}>Female</option>
                                <option value="Others" style={{ color: 'black' }}>Others</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>


                {/* Contact Information */}
                <Form.Group >
                    <Row>
                        <Col md={4} className={'mt-4'}>
                            <Form.Control type="text" placeholder="Phone Number" required />
                        </Col>
                        <Col md={8} className={'mt-4'}>
                            <Form.Control type="email" placeholder="Email Address e.g. johndoe@domain.com" />
                        </Col>
                    </Row>
                    <Row>
                        <Form.Check className="mx-3" type="checkbox" label="Keep Phone Number Private" value="phonePrivate" name="phonePrivate" style={{ fontSize: '14px' }} />
                    </Row>
                </Form.Group>
            </Form.Group>
        </>
    );
}

export default GeneralInfoForm;
