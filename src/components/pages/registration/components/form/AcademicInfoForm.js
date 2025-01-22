import React from 'react';
import { Col, Row, Form, Card } from 'react-bootstrap';

function AcademicInfoForm() {
    return (
        <div className={"mt-5"}>
            <Card.Subtitle>Academic Information</Card.Subtitle>
            <Form.Group className="mb-3">
                {/* Majored In & Session */}
                <Row className="mt-4">
                    <Col>
                        <Form.Select defaultValue="" style={{ color: "grey" }} onChange={(e) => e.target.style.color = e.target.value === "" ? "grey" : "black"}>
                            <option value="" disabled>Majored In</option>
                            <option style={{color: 'black'}} value="AE">Apparel Engineering</option>
                            <option style={{color: 'black'}} value="FE">Fabric Engineering</option>
                            <option style={{color: 'black'}} value="WPE">Wet Process Engineering</option>
                            <option style={{color: 'black'}} value="YE">Yarn Engineering</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select defaultValue="" style={{ color: "grey" }} onChange={(e) => e.target.style.color = e.target.value === "" ? "grey" : "black"}>
                            <option value="" disabled>Session</option>
                            <option value="18-19" style={{color: 'black'}}>2018-19</option>
                            <option value="17-18" style={{color: 'black'}}>2017-18</option>
                            <option value="16-17" style={{color: 'black'}}>2016-17</option>
                        </Form.Select>
                    </Col>
                </Row>

                {/* Registration ID & Batch */}
                <Row className="mt-4">
                    <Col md={6}>
                        <Form.Select defaultValue="" style={{ color: "grey" }} onChange={(e) => e.target.style.color = e.target.value === "" ? "grey" : "black"}>
                            <option value="" disabled>Batch</option>
                            <option style={{color: 'black'}} value="kendrobindu3">Kendrobindu</option>
                            <option style={{color: 'black'}} value="durbar2">Durbar</option>
                            <option style={{color: 'black'}} value="kandari1">Kandari</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>
        </div>
    );
}

export default AcademicInfoForm;
