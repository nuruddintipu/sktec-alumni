import {Col, Container, Row} from "react-bootstrap";
import EventSection from "./EventSection";
import NewsSection from "./NewsSection";
import React from "react";

export const ContentSection = () => {

    return (
        <section className='mt-4 event-section'>
            <Container>
                <Row>
                    <Col md={6}>
                        <EventSection/>
                    </Col>
                    <Col>
                        <NewsSection/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};