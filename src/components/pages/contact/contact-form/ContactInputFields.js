import InputField from "../../../common/InputField";
import FormRowWrapper from "../../../common/FormRowWrapper";
import React from "react";
import contactFieldsConfigs from "./contactFieldsConfigs";
import {MessageField} from "./MessageField";
import FieldError from "../../../common/FieldError";

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
                            value={state[name]}
                        />

                        <FieldError error={state.errors[name]} />


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