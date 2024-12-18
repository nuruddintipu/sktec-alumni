import {Col, Row} from "react-bootstrap";
import React from "react";
import '../styles/ContactPageStyles.css';
import ContactSuccessMessage from "./ContactSuccessMessage";
import ContactInfoCard from "./ContactInfoCard";

const ContactInfoContainer = ({state}) => {
    return (
        <Col md={5} className={"contact-info-container"}>
            <Row className={"w-100 p-md-5 p-4 mt-4"}>

                {state.status === "success" ?
                    <ContactSuccessMessage /> :
                    <ContactInfoCard />
                }

            </Row>
        </Col>
    );
};

export default ContactInfoContainer;
