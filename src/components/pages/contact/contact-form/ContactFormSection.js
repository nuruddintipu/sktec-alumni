import { Form, Row } from 'react-bootstrap';
import React from 'react';
import { SubmitButton } from './SubmitButton';
import { ContactInputFields } from './fields/ContactInputFields';
import FormContainer from '../../../common/FormContainer';


const ContactFormSection = ({ state, handleSubmit, handleChange }) => {

    return (
        <FormContainer md={7}>
            <Form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
                onSubmit={handleSubmit}
                noValidate
            >
                <Row>
                    <ContactInputFields
                        onInputChange={handleChange}
                        state={state}

                    />
                    <SubmitButton state={state} />

                </Row>
            </Form>
        </FormContainer>
    );
};

export default ContactFormSection;