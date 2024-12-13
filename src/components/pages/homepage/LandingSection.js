import {Container, Row} from "react-bootstrap";
import React from "react";

const LandingSection = ({title, body, className}) => {
    return (
        <section className={`homepage-bg d-flex align-items-center ${className || ""}`.trim()}>
            <Container className="text-center text-light slide-up fade-in">
                <Row>
                    <h1 className="display-4 fw-bold">{title}</h1>
                    <p className="home-text ">
                        {body}
                    </p>
                </Row>
            </Container>
        </section>
    );
};

export default LandingSection;