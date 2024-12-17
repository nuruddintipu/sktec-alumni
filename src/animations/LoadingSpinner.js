import {Col, Container, Row, Spinner} from "react-bootstrap";
import React from "react";
const LoadingSpinner = ({loading, error}) => {

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <Row className="w-100">
                    <Col className="text-center">
                        <Spinner animation="border" variant="primary"/>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <Row className="w-100">
                    <Col className="text-center">
                        <p>Error: {error}</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return null;
}

export default LoadingSpinner;