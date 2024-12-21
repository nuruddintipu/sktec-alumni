export const regFormReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD_VALUE":
            return {
                ...state,
                [action.payload.section]: {
                    ...state[action.payload.section],
                    [action.payload.field]: action.payload.value,
                },
            };
        case "SET_ERROR":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.payload.section]: {
                        ...state.errors[action.payload.section],
                        [action.payload.field]: action.payload.value,
                    },
                },
            };
        case "NEXT_STEP":
            return {
                ...state,
                currentStep: state.currentStep + 1,
            };
        case "PREVIOUS_STEP":
            return {
                ...state,
                currentStep: state.currentStep - 1,
            };
        case "RESET_FORM":
            return action.payload.initialState;
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};