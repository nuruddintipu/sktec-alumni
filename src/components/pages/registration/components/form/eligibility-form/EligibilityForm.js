import {Form, Row} from "react-bootstrap";
import React from "react";
import FormContainer from "../../../../../common/FormContainer";
import {EligibilityFormFields} from "./EligibilityFormFields";
import {NextButton} from "./NextButton";
import EligibilityFormTopBar from "./EligibilityFormTopBar";
import {eligibilityTopBarText} from "./configs/eligibilityFieldConfigs";


function EligibilityForm({state, handleChange, handleNext}) {

    return (
        <>

            <EligibilityFormTopBar eligibilityTopBarText={eligibilityTopBarText} state={state}/>



            <Row>
                <FormContainer>
                    <Form
                        method="POST"
                        id="eligibilityForm"
                        name="eligibilityForm"
                        className="eligibilityForm"
                        onSubmit={handleNext}
                        noValidate
                    >
                        <Row>
                            <EligibilityFormFields
                                state={state}
                                onChange={(e) => handleChange("eligibility", e.target.name, e.target.value)}
                            />
                            <NextButton state={state}/>
                        </Row>
                    </Form>
                </FormContainer>
            </Row>
        </>
    );
}

export default EligibilityForm;