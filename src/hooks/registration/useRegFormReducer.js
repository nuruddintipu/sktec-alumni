import {useEffect, useReducer} from "react";
import {regFormReducer} from "./regFormReducer";
import {disableButton, setError, setFieldValue, setNextStep} from "./regFormActions";
import {validateField} from "./reducer-helpers/validateField";
import {isValidFormInputs, validateCurrentSection} from "./reducer-helpers/validateCurrentSection";
import {initialState} from "./initialState";
import {eligibilityValidationRules} from "./reducer-helpers/validationRules";
import {checkEligibility} from "./reducer-helpers/checkEligibility";
import {toggleButtonState} from "./reducer-helpers/toggleButtonState";
import {stepHandlers} from "./reducer-helpers/stepHandlers";
import {checkMemberExist} from "./reducer-helpers/checkMemberExist";

export const useRegFormReducer = (initialState, validationRules) => {
    const [state, dispatch] = useReducer(regFormReducer, initialState);

    const handleChange = (section, field, value) => {
        const error = validateField(field, value, validationRules);

        dispatch(setFieldValue(section, field, value));

        dispatch(setError(section, field, error === true ? "" : error));

        toggleButtonState(error, dispatch);

    };

    const handleNext = (e) => {
        e.preventDefault()

        const isFormValid = isValidFormInputs(state, dispatch, validationRules);
        if (!isFormValid) return;

        stepHandlers[state.currentStep](state, dispatch);

        // dispatch(setNextStep());
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    return {state, handleChange, handleNext};

};


export const useRegistration = () => {
    return useRegFormReducer(initialState, eligibilityValidationRules);
};