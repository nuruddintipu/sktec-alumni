import {Form, Row} from "react-bootstrap";
import React from "react";
import {SendMessageButton} from "./SendMessageButton";
import {ContactInputFields} from "./ContactInputFields";
import FormContainer from "../../../common/FormContainer";
import useFormReducer from "../../../../hooks/useFormReducer";
import {validationRules} from "./ContactFieldsValidationRules";


const ContactFormSection = ({state, handleSubmit, handleChange}) => {

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
                    <SendMessageButton state={state}/>

                </Row>
            </Form>
        </FormContainer>
    );
};

export default ContactFormSection;