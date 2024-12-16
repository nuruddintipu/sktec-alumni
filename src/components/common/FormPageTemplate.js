import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const FormPageTemplate = ({heading, content, maxWidth = '80%', containerStyle, ...rest}) => {
    return (
        <Container style={{maxWidth, ...containerStyle}} {...rest}>
            {heading}
            <Row className={"justify-content-center"}>
                <Col md={12} className={"justify-content-center"}>
                    <Row className={"mb-5 justify-content-center"}>
                        {content}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default FormPageTemplate;