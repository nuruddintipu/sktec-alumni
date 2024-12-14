import {Col, Row} from "react-bootstrap";
import React from "react";
import {contactInformations} from "./contactInformations";
import IconTextBlock from "../../../common/IconTextBlock";
import '../ContactPageStyles.css';

const ContactInfoSection = () => {
    return (
        <Col md={5} className={"contact-info-container"}>
            <Row className={"w-100 p-md-5 p-4 mt-4"}>
                <h3>Send Us Message </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                {contactInformations.map(({icon, text}, index) => (
                    <IconTextBlock
                        key={index}
                        icon={icon}
                        contactInfo={text}
                    />
                ))}
            </Row>
        </Col>
    );
};

export default ContactInfoSection;
