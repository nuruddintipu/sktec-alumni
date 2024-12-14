import {Form} from "react-bootstrap";
import ButtonPrimary from "../../../common/button/ButtonPrimary";
import FormRowWrapper from "../../../common/FormRowWrapper";
import React from "react";

export const SendMessageButton =()=>{
    return (
        <FormRowWrapper md={12} className="mt-3">
            <Form.Group>
                <ButtonPrimary type="submit" buttonText="Send Message" />
                <div className="submitting"></div>
            </Form.Group>
        </FormRowWrapper>
    );
};
