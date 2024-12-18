import {Col, Row} from "react-bootstrap";
import React from "react";
import '../ContactPageStyles.css';
import ContactSuccess from "./ContactSuccess";
import ContactInfoDefault from "./ContactInfoDefault";

const ContactInfoContainer = ({state}) => {
    return (
        <Col md={5} className={"contact-info-container"}>
            <Row className={"w-100 p-md-5 p-4 mt-4"}>

                {state.status === "success" ?
                    <ContactSuccess /> :
                    <ContactInfoDefault />
                }

            </Row>
        </Col>
    );
};

export default ContactInfoContainer;
