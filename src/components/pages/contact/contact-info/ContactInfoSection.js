import {Col, Row} from "react-bootstrap";
import React from "react";
import {contactIntornations} from "./contactInfoSectionText";
import IconTextBlock from "../../../common/IconTextBlock";
import '../ContactPageStyles.css';
import ContactInfoHeader from "./ContactInfoHeader";

const ContactInfoSection = () => {
    return (
        <Col md={5} className={"contact-info-container"}>
            <Row className={"w-100 p-md-5 p-4 mt-4"}>

                <ContactInfoHeader />

                {/*Contact information */}
                {contactIntornations.map(({icon, text}, index) => (
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
