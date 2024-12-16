import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const SectionHeading = ({
                            heading,
                            textClassName = "",
                            textStyle = {},
                            containerClass = "",
                            containerStyle = {},
                            ...rest
                        }) => {
    return (
        <Container
            className={`justify-content-center ${containerClass}`.trim()}
            style={containerStyle}
            {...rest}
        >
            <Row>
                <Col className={"text-center justify-content-center align-items-center"}>
                    <h1
                        className={`mt-4 ${textClassName}`.trim()}
                        style={{color: 'var(--primary-color)', ...textStyle}}
                    >
                        {heading}
                    </h1>
                </Col>
            </Row>
        </Container>
    );
};

export default SectionHeading;