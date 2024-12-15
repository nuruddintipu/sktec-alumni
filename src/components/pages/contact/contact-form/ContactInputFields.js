import InputField from "../../../common/InputField";
import FormRowWrapper from "../../../common/FormRowWrapper";
import React from "react";
import contactFieldsConfigs from "./contactFieldsConfigs";
import {MessageField} from "./MessageField";

export const ContactInputFields = ({onInputChange, state}) => {
    return (
        <>
            {
                contactFieldsConfigs.map(({controlId, label, type, name, placeholder, required}, index) => (
                    <FormRowWrapper
                        key={index}
                        md={12}
                        className="mt-3">

                        <InputField
                            controlId={controlId}
                            label={label}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            required={required}
                            onChange={(e) => onInputChange(e)}
                            state={ state }

                        />

                        {state.errors[name] && <p className="text-danger">{state.errors[name]}</p>}

                    </FormRowWrapper>
                ))
            }
            <MessageField
                onChange={
                    (e) => onInputChange(e)
                }
                state={state}

            />
        </>
    );
};