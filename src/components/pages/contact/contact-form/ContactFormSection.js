import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import {SendMessageButton} from "./SendMessageButton";
import {ContactInputFields} from "./ContactInputFields";
import useContactForm from "../../../../hooks/useContactForm";
import handleSubmit from "../../../../utils/handleSubmit";

const ContactFormSection = () => {
    const {formData, errors, setErrors, handleInputChange} = useContactForm();

    return (
        <Col md={7} style={{background: '#e8edf0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}>
            <div className={"w-100 p-md-5 p-4"}>
                <Form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleSubmit(formData, setErrors)}
                    noValidate
                >
                    <Row>
                        <ContactInputFields
                            onInputChange={handleInputChange}
                            errors={errors}
                        />
                        <SendMessageButton/>

                    </Row>
                </Form>
            </div>
        </Col>
    );
};

export default ContactFormSection;