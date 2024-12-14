import {Col, Row} from "react-bootstrap";
import React, {useState} from "react";

const Copyrights = () => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <Row>
            <Col className="text-center mt-4">
                <small>
                    © {new Date().getFullYear()} SKTEC Alumni Association. All rights reserved | Designed & Developed By
                    <a
                        href="https://github.com/nuruddintipu"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`text-decoration-none ${isHovered ? "text-dark bg-transparent p-1 rounded-1" : "text-primary p-1"} `}>
                        Nuruddin Tipu
                    </a>.
                </small>
            </Col>
        </Row>
    );
};

export default Copyrights;