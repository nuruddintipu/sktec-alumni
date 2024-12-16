import {eligibilityDropdownConfigs, eligibilityFieldConfigs} from "./eligibilityFieldConfigs";
import FormRowWrapper from "../../../common/FormRowWrapper";
import InputField from "../../../common/InputField";
import {Col, Row} from "react-bootstrap";
import DropdownBar from "../../../common/DropdownBar";
import React from "react";

export const EligibilityFormFields = ({onChange, state}) => {

    console.log("hi ", state['department']);
    return (
        <>
            <FormRowWrapper
                md={12}
                className={"mt-3"}
            >
                {
                    eligibilityFieldConfigs.map(({controlId, label, type, name, placeholder, required}, index) => (
                        <>
                            <InputField
                                key={index}
                                controlId={controlId}
                                label={label}
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                onChange={(e) => onChange(e)}
                                state={ state }
                            />

                            {state.errors[name] && <p className="text-danger">{state.errors[name]}</p>}
                        </>
                    ))
                }

                <Row className={"mb-3"}>
                    {
                        eligibilityDropdownConfigs.map(({ label, value, name, options, field, placeholder}, index) => (
                            <Col md={6} key={index} className={"mt-3"}>
                                <DropdownBar
                                    label={label}
                                    value={state[name]}
                                    name={name}
                                    options={options}
                                    placeholder={placeholder}
                                    onChange={(e) => onChange(e)}
                                    state={ state }
                                />

                                {state.errors[name] && <p className="text-danger">{state.errors[name]}</p>}
                            </Col>
                        ))
                    }
                </Row>
            </FormRowWrapper>

        </>
    );
};