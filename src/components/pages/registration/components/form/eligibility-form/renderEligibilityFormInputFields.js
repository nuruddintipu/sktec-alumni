import React from "react";
import {eligibilityDropdownConfigs, eligibilityFieldConfigs} from "./configs/eligibilityFieldConfigs";
import {Col} from "react-bootstrap";
import DropdownBar from "../../../../../common/DropdownBar";
import FieldError from "../../../../../common/FieldError";
import InputField from "../../../../../common/InputField";


export const renderInputFields = ({state, onChange}) =>
    eligibilityFieldConfigs.map(({controlId, label, type, name, placeholder}, index) => (
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
            <FieldError error={state.errors.eligibility[name]}/>
        </React.Fragment>
    ));


export const renderDropdownFields = ({state, onChange}) =>
    eligibilityDropdownConfigs.map(({label, name, options, placeholder}, index) => (
        <Col md={6} key={index} className="mt-3">
            <DropdownBar
                label={label}
                value={state.eligibility[name]}
                name={name}
                options={options}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                state={state}
            />
            <FieldError error={state.errors.eligibility[name]}/>
        </Col>
    ));

