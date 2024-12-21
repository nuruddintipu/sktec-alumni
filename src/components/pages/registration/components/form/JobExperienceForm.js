import React from 'react';
import { Col, Row, Form, Card } from 'react-bootstrap';

function JobExperienceForm() {
    return (
        <div className={'mt-5'}>
            <Card.Subtitle>Current Job</Card.Subtitle>
            <Form.Group className="mb-3">
                {/* Company Name */}
                <Row className="mt-4">
                    <Col md={6}>
                        <Form.Control type="text" placeholder="Company Name" required />
                    </Col>
                    <Col md={6}>
                        <Form.Control type="text" placeholder="Current Position" required/>
                    </Col>
                </Row>
                <Row className={'mt-4'}>
                    <Col md={3}>
                        <Form.Check
                            className="mx-3"
                            type="checkbox"
                            label="I do not have any job."
                            value="donotWork"
                            name="workExp"
                            style={{ fontSize: '16px' }} />
                    </Col>
                </Row>
            </Form.Group>
        </div>
    );
}

export default JobExperienceForm;
