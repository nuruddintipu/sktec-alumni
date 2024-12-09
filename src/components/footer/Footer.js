import React, {useState} from 'react';
import SocialIcons from './SocialIcons';
import {Col, Container, Row} from "react-bootstrap"; // Reuse the SocialIcons component

function Footer() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <footer className="text-light py-4 border-top" style={{background: 'var(--primary-color)'}}>
            <Container>
                <Row className="align-items-center">
                    {/* Brand Section */}
                    <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
                        <h2 className="h3">SKTEC Alumni Association</h2>
                        <p className="small m-0">Connecting Generations, Building Futures</p>
                    </Col>

                    {/* Link section */}
                    <Col md={4} className="text-center mb-3 mb-md-0">
                        <a href="/about" className="text-decoration-none text-light d-block mb-1">About</a>
                        <a href="/" className="text-decoration-none text-light d-block mb-1">Contact</a>
                        <a href="/" className="text-decoration-none text-light d-block mb-1">Privacy Policy</a>
                    </Col>

                    {/* Social Icons */}
                    <Col md={4} className="text-center text-md-end">
                        <h3 className="h4 mb-3">Follow Us</h3>
                        <div className="d-flex justify-content-center justify-content-md-end">
                            <SocialIcons/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <small >
                            © {new Date().getFullYear()} SKTEC Alumni Association. All rights reserved | Designed & Developed By
                            <a
                                href="https://github.com/nuruddintipu"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`text-decoration-none ${isHovered? "text-dark bg-transparent p-1 rounded-1" : "text-primary p-1"} `}>
                                Nuruddin Tipu
                            </a>.
                        </small>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}


export default Footer;
