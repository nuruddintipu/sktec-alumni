import { Form, Row} from "react-bootstrap";
import React from "react";
import FormContainer from "../../../common/FormContainer";
import {EligibilityFormFields} from "./EligibilityFormFields";
import {CheckEligibilityButton} from "./CheckEligibilityButton";
import {eligibilityFormSidebarText} from "./eligibilityFieldConfigs";
import useFormReducer from "../../../../hooks/useFormReducer";

const initialState = {
  butexId: "",
  batch: "",
  department: "",
  errors: {}
};
const eligibilityValidationRules ={
    butexId: (value) => value.trim() !== "" || "Id is required!",
    batch: (value) => /\S+@\S+\.\S+/.test(value) || "Batch is required!",
    department: (value) => value.trim() !== "" || "Department is required!",
};


function EligibilityForm() {
    const {state, handleSubmit, handleChange} = useFormReducer(initialState, eligibilityValidationRules)
    return (
        <>

            <Row>
                <FormContainer style={{background: 'var(--primary-color)'}}>
                    <p className={"h4"} style={{color: '#e8edf0'}} >{eligibilityFormSidebarText.heading}</p>
                    <p style={{color: '#e8edf0', fontSize: "1.2rem"}}>{eligibilityFormSidebarText.body}</p>
                </FormContainer>
            </Row>
            <Row md={12}>
                <FormContainer >
                    <Form
                        method="POST"
                        id="eligibilityForm"
                        name="eligibilityForm"
                        className="eligibilityForm"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <Row>
                            <EligibilityFormFields
                                state={state}
                                onChange = {(e) => handleChange(e)}
                            />
                            <CheckEligibilityButton/>
                        </Row>
                    </Form>
                </FormContainer>
            </Row>
        </>
    );
}

export default EligibilityForm;