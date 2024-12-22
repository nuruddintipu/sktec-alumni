import {getEmptyFields} from "./getEmptyFields";
import {validateField} from "./validateField";
import {setError} from "../regFormActions";

export const isValidFormInputs = (state, dispatch, validationRules) =>{
    const stepToSectionMap = {
        1: "eligibility",
        2: "otherInfo",
    };

    const sectionKey = stepToSectionMap[state.currentStep];

    const currentSection = state[sectionKey];
    const emptyFields = getEmptyFields(currentSection);

    emptyFields.forEach((field) => {
        const error = validateField(field, "", validationRules);
        dispatch(setError(sectionKey, field, error));
    });
    return emptyFields.length === 0;
};