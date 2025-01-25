import FormRowWrapper from '../../../../../common/FormRowWrapper';
import React from 'react';
import { renderInputFields } from './renderEligibilityFormInputFields';


export const EligibilityFormFields = ({ onChange, state }) => {
    return (
        <>
            <FormRowWrapper md={12} className="mt-3">
                {renderInputFields({ state, onChange })}
            </FormRowWrapper>
        </>
    );
};