import {Form, Row} from "react-bootstrap";
import React from "react";
import FormContainer from "../../../common/FormContainer";
import {EligibilityFormFields} from "./EligibilityFormFields";
import {CheckEligibilityButton} from "./CheckEligibilityButton";

function EligibilityForm() {
    return (
        <>

            <FormContainer md={8} style={{background: 'var(--primary-color)'}}>
                <p className={"h4"} style={{color: '#e8edf0'}} >Are you a SKTEC Graduate?</p>
                <p className={"h4"} style={{color: '#e8edf0'}}>Join the SAA community.</p>
            </FormContainer>

            <FormContainer md={8} >
                <Form
                    method="POST"
                    id="eligibilityForm"
                    name="eligibilityForm"
                    className="eligibilityForm"
                    onSubmit={()=>{}}
                    noValidate
                >
                    <Row>
                        <EligibilityFormFields />
                        <CheckEligibilityButton/>

                    </Row>
                </Form>
            </FormContainer>
        </>
    );
}

export default EligibilityForm;