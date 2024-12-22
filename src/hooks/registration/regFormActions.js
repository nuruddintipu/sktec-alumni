import {
    DISABLE_BUTTON,
    NEW_MEMBER,
    NEXT_STEP,
    PREVIOUS_STEP,
    RESET_FORM,
    SET_ERROR,
    SET_FIELD_VALUE
} from "./actionTypes";
import {initialState} from "./initialState";



export const setFieldValue = (section, field, value) => ({
    type: SET_FIELD_VALUE,
    payload: {section, field, value},
});

export const setError = (section, field, value) => ({
    type: SET_ERROR,
    payload: {section, field, value},
});

export const setNextStep = () => ({
    type: NEXT_STEP,
});

export const setPreviousStep = () => ({
    type: PREVIOUS_STEP,
});

export const resetForm = (initialState) => ({
    type: RESET_FORM,
    payload: initialState,
});
export const setNewMember = (isNewMember) => ({
    type: NEW_MEMBER,
    payload: isNewMember,
})
export const disableButton = (isDisable) => ({
    type: DISABLE_BUTTON,
    payload: isDisable,
})