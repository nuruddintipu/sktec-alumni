import React from 'react';
import { eligibilityFieldConfigs } from './configs/eligibilityFieldConfigs';
import FieldError from '../../../../../common/FieldError';
import InputField from '../../../../../common/InputField';


export const renderInputFields = ({ state, onChange }) =>
    eligibilityFieldConfigs.map(({ controlId, label, type, name, placeholder }, index) => (
        <React.Fragment key={index}>
            <InputField
                controlId={controlId}
                label={label}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                value={state.eligibility[name]}
            />
            <FieldError error={state.errors.eligibility[name]} />
        </React.Fragment>
    ));

