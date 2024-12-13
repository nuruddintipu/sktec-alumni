import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React from "react";

function EligibilityForm() {
    return (
        <>
            <Card.Subtitle>Check Elgibility</Card.Subtitle>
            <Form.Group className="mb-3">
                <Row className="mt-4">
                    <Col md={8}>
                        <Form.Select defaultValue="" style={{ color: "grey" }} onChange={(e) => e.target.style.color = e.target.value === "" ? "grey" : "black"}>
                            <option value="" disabled>Session</option>
                            <option value="18-19" style={{color: 'black'}}>2018-19</option>
                            <option value="17-18" style={{color: 'black'}}>2017-18</option>
                            <option value="16-17" style={{color: 'black'}}>2016-17</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={8}>
                        <Form.Control type="text" placeholder="Butex Reg. ID" />
                    </Col>
                </Row>
                <Row className={"d-flex justify-content-md-start mt-4"}>
                    <Col md={8} className={"d-flex justify-content-md-center" }>
                        <Button
                            variant="secondary"
                            className={"mx-4"}
                        >
                            Reset All
                        </Button>
                        <Button variant="primary">Submit Form</Button>
                    </Col>
                </Row>
            </Form.Group>
        </>
    );
}

export default EligibilityForm;