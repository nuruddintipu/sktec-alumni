import FormRowWrapper from "../../../common/FormRowWrapper";
import {Form} from "react-bootstrap";
import ButtonPrimary from "../../../common/button/ButtonPrimary";
import React from "react";

export const CheckEligibilityButton =()=>{
    return (
        <FormRowWrapper md={12} className="mt-3">
            <Form.Group>
                <ButtonPrimary type="submit" buttonText="Check Eligibility" />
                <div className="submitting"></div>
            </Form.Group>
        </FormRowWrapper>
    );
};
