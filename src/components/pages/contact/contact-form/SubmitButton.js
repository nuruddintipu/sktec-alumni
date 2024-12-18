import {Form} from "react-bootstrap";
import ButtonPrimary from "../../../common/button/ButtonPrimary";
import FormRowWrapper from "../../../common/FormRowWrapper";
import React from "react";

const messageButtonText = {
    before: "Send Message",
    sending: "Sending...",
    after: "Message Sent"
};


export const SubmitButton = ({state}) => {
    return (
        <FormRowWrapper md={12} className="mt-3">
            <Form.Group>
                <ButtonPrimary type="submit"
                               buttonText={
                                   state.status === "loading" ? messageButtonText.sending : state.status === "success" ? messageButtonText.after : messageButtonText.before}/>
                <div className="submitting"></div>
            </Form.Group>
        </FormRowWrapper>
    );
};
