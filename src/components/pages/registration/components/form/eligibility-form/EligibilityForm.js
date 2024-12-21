import {Form, Row} from "react-bootstrap";
import React from "react";
import FormContainer from "../../../../../common/FormContainer";
import {EligibilityFormFields} from "./EligibilityFormFields";
import {CheckEligibilityButton} from "./CheckEligibilityButton";
import EligibilityFormTopBar from "./EligibilityFormTopBar";
import {eligibilityTopBarText} from "./configs/eligibilityFieldConfigs";
import {initialState} from "../../../../../../hooks/registration/initialState";
import {useRegFormReducer} from "../../../../../../hooks/registration/useRegFormReducer";
import {eligibilityValidationRules} from "../../../../../../hooks/registration/reducer-helpers/validationRules";


function EligibilityForm() {
    const { state, handleChange, handleNext } = useRegFormReducer(initialState, eligibilityValidationRules);


    return (
        <>
            <EligibilityFormTopBar eligibilityTopBarText={eligibilityTopBarText} />

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
                            <CheckEligibilityButton />
                        </Row>
                    </Form>
                </FormContainer>
            </Row>
        </>
    );
}

export default EligibilityForm;