
import {Form, Row} from "react-bootstrap";
import FormContainer from "../../../../../common/FormContainer";
import React from "react";
import GeneralFormTopBar from "./GeneralFormTopBar";
import {generalFormTopBarTexts} from "./generalFormTexts";
import GeneralFormFields from "./GeneralFormFields";
import {FormButtons} from "./FormButtons";

export const GeneralForm =()=>{


    return (
        <>

            <GeneralFormTopBar generalFormTopBarTexts={generalFormTopBarTexts} />



            <Row>
                <FormContainer>
                    <Form
                        method="POST"
                        id="eligibilityForm"
                        name="eligibilityForm"
                        className="eligibilityForm"
                        noValidate
                    >
                        <Row>
                            <GeneralFormFields/>
                            <FormButtons />
                        </Row>
                    </Form>
                </FormContainer>
            </Row>
        </>
    );
}