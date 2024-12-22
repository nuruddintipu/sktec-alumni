import {Form, Row} from "react-bootstrap";
import React from "react";
import FormContainer from "../../../../../common/FormContainer";
import {EligibilityFormFields} from "./EligibilityFormFields";
import {NextButton} from "./CheckEligibilityButton";
import EligibilityFormTopBar from "./EligibilityFormTopBar";
import {eligibilityTopBarText} from "./configs/eligibilityFieldConfigs";
import {useRegistration} from "../../../../../../hooks/registration/useRegFormReducer";


function EligibilityForm() {
    const {state, handleChange, handleNext} = useRegistration();

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