import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import './homepage.css';
import EventCard from "../EventCard";
import NewsCards from "../NewsCards";

function Homepage() {
    return (
        <>
            <section className="homepage-bg d-flex align-items-center">
                <Container className="text-center text-light">
                    <h1 className="display-4 fw-bold">Welcome Home</h1>
                    <p className="home-text">
                        Step into the virtual home of SKTEC’s global community <br/>— a place
                        where our spirit thrives beyond the campus. <br/>Reconnect with
                        classmates, discover opportunities, <br/>and stay up-to-date on the latest
                        events and ideas from SKTEC.
                    </p>
                </Container>
            </section>

            <section className='mt-4'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="mb-4" style={{color: 'var(--primary-color)'}}>Upcoming Events</h1>
                            <EventCard/>
                        </Col>
                        <Col md={6}>
                            <h1 className="mb-4" style={{color: 'var(--primary-color)'}}>Alumni News Stories</h1>
                            <NewsCards/>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>

    );
}

export default Homepage;