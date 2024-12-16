import FormRowWrapper from "../../../common/FormRowWrapper";
import { Row } from "react-bootstrap";
import React from "react";
import {renderDropdownFields, renderInputFields} from "./renderEligibilityFormInputFields";


export const EligibilityFormFields = ({onChange, state}) => {
    return (
        <>
            <FormRowWrapper md={12} className="mt-3">
                {renderInputFields({ state, onChange })}
                <Row className="mb-3">{renderDropdownFields({ state, onChange })}</Row>
            </FormRowWrapper>

        </>
    );
};