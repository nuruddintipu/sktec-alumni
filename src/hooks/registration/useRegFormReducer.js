import {useReducer} from "react";
import {regFormReducer} from "./regFormReducer";
import {setError, setFieldValue, setNextStep} from "./regFormActions";
import {validateField} from "./reducer-helpers/validateField";
import {validateCurrentSection} from "./reducer-helpers/validateCurrentSection";

export const useRegFormReducer = (initialState, validationRules) => {
    const [state, dispatch] = useReducer(regFormReducer, initialState);

    const handleChange = (section, field, value) => {
        const error = validateField(field, value, validationRules);
        dispatch(setFieldValue(section, field, value));
        dispatch(setError(section, field, error == true ? "" : error));
    };

    const handleNext = (e) => {
        e.preventDefault()
        validateCurrentSection(state, dispatch, validationRules);
        dispatch(setNextStep());
    };

    return {state, handleChange, handleNext};

};