import {Form, Row} from "react-bootstrap";
import React from "react";
import FormContainer from "../../../common/FormContainer";
import {EligibilityFormFields} from "./EligibilityFormFields";
import {CheckEligibilityButton} from "./CheckEligibilityButton";
import EligibilityFormTopBar from "./EligibilityFormTopBar";
import {eligibilityTopBarText} from "./configs/eligibilityFieldConfigs";
import useEligibilityForm from "./useEligibilityForm";


function EligibilityForm() {
    const {state, handleSubmit, handleChange} = useEligibilityForm();
    console.log(state);

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
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <Row>
                            <EligibilityFormFields
                                state={state}
                                onChange={(e) => handleChange(e)}
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