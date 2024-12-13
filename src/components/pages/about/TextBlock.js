import SectionHeading from "../../common/SectionHeading";
import {Col} from "react-bootstrap";
import React from "react";

export const TextBlock = ({title, text}) => {
    return (
        <Col md={4}>
            <SectionHeading heading={title} />
            {text.split(/,/).map((line, index) => (
                <React.Fragment key={index}>
                    {line.trim()}
                    <br />
                </React.Fragment>
            ))}
        </Col>
    );
};