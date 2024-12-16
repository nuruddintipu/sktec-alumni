import {Form, Row} from "react-bootstrap";
import React from "react";
import {SendMessageButton} from "./SendMessageButton";
import {ContactInputFields} from "./ContactInputFields";
import FormContainer from "../../../common/FormContainer";
import useFormReducer from "../../../../hooks/useFormReducer";
import {validationRules} from "./ContactFieldsValidationRules";


const initialState = {
    name: "",
    email: "",
    message: "",
    subject: "",
    errors: {},
};

const ContactFormSection = () => {
    const {state, handleSubmit, handleChange} = useFormReducer(initialState, validationRules);

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
                    <SendMessageButton/>

                </Row>
            </Form>
        </FormContainer>
    );
};

export default ContactFormSection;