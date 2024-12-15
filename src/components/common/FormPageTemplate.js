import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const FormPageTemplate = ({ heading, content }) => {
    return (
        <Container className={"mt-5 zoomIn"} style={{maxWidth: '60%'}}>
            { heading }
            <Row className={"justify-content-center"}>
                <Col md={12}>
                    <div style={{width: '100%'}}>
                        <Row className={"mb-5"}>
                            { content }
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FormPageTemplate;