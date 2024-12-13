import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './about.css';
import LandingSection from "../homepage/LandingSection";
import {aboutText} from "./aboutText";


function About() {
    return (
        <>
            <LandingSection
                title={aboutText.title}
                body={aboutText.body}
                className={"about-bg"}
            />
            <section className="mt-4 mb-4">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h1 style={{color: 'var(--primary-color)'}}>Address</h1>
                            <h5>SKTEC Alumni Association</h5>
                            <h6>
                                123 University Avenue,<br/>
                                Building C, Floor 4,<br/>
                                Citytown, State, ZIP-12345,<br/>
                                Bangladesh.
                            </h6>
                        </Col>
                        <Col md={4}>
                            <h1 style={{color: 'var(--primary-color)'}}>Phone Number</h1>
                            <h6>
                                Phone: +880-123-456-7890<br/>
                                Alternate: +880-987-654-3210
                            </h6>
                        </Col>
                        <Col md={4}>
                            <h1 style={{color: 'var(--primary-color)'}}>Hours</h1>
                            <h6>
                                Monday to Friday: 9:00 AM - 6:00 PM<br/>
                                Saturday: 10:00 AM - 4:00 PM<br/>
                                Sunday: Closed
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>


    );
}

export default About;