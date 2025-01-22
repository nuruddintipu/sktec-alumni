import FormRowWrapper from "../../../../../common/FormRowWrapper";
import {Form} from "react-bootstrap";
import ButtonPrimary from "../../../../../common/button/ButtonPrimary";
import React from "react";

export const NextButton =({  buttonText = "Next", type = "submit" , state })=>{
    return (
        <FormRowWrapper md={12} className="mt-3">
            <Form.Group>
                <ButtonPrimary type={type} buttonText={buttonText} disabled={state.buttonDisabled}/>
            </Form.Group>
        </FormRowWrapper>
    );
};
