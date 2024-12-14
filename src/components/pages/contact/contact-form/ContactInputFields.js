import InputField from "../../../common/InputField";
import FormRowWrapper from "../../../common/FormRowWrapper";
import React from "react";
import contactFieldsConfigs from "./contactFieldsConfigs";
import {MessageField} from "./MessageField";

export const ContactInputFields = ({onInputChange, errors}) => {
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
                            onChange={
                                (value) => onInputChange(name, value)
                            }
                            className={
                                errors.name ? 'is-invalid' : ''
                            }
                        />

                    </FormRowWrapper>
                ))
            }
            <MessageField
                onChange={
                    (value) => onInputChange("message", value)
                }

            />
        </>
    );
};