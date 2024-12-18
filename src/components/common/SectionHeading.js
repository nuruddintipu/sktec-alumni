import React from "react";
import {Col, Row} from "react-bootstrap";

const SectionHeading = ({
                            heading,
                            textClassName = "",
                            textStyle = {},
                            containerClass = "",
                            containerStyle = {},
                            ...rest
                        }) => {
    return (
        <Row>
            <Col
                className={`justify-content-center align-items-center ${containerClass}`}
                style={containerStyle}
            >
                <h1
                    className={`mt-4 ${textClassName}`.trim()}
                    style={{color: 'var(--primary-color)', ...textStyle}}
                >
                    {heading}
                </h1>
            </Col>
        </Row>
    );
};

export default SectionHeading;