import FormRowWrapper from "../../../../../common/FormRowWrapper";
import {Form, Row} from "react-bootstrap";
import ButtonPrimary from "../../../../../common/button/ButtonPrimary";
import React from "react";

export const FormButtons =({  buttonText = "Submit", type = "submit" , state })=>{
    return (
        <Row>
            <FormRowWrapper md={12} className="mt-3">
                <Form.Group>
                    <ButtonPrimary type={type} buttonText={buttonText} disabled={state}/>
                </Form.Group>
            </FormRowWrapper>
        </Row>
    );
};
