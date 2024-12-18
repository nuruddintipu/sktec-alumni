import {useReducer} from "react";
import axios from "axios";

// Action Types as Constants
const actionTypes = {
    UPDATE_FIELD: "update_field",
    SET_ERROR: "set_error",
    SET_STATUS: "set_status",
    RESET: "reset",
};

// Reducer Function
const formReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.field]: action.value,
                },
            };
        case actionTypes.SET_STATUS:
            return {
                ...state,
                status: action.value,
            };
        case actionTypes.RESET:
            return action.initialState;
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};


const useFormReducer = (initialState, validationRules) => {

    const [state, dispatch] = useReducer(formReducer, initialState);



    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({ type: actionTypes.UPDATE_FIELD, field: name, value: value});

        // Perform field-level validation if rules exist
        if (validationRules[name]) {
            const error = validationRules[name](value);
            dispatch({ type: actionTypes.SET_ERROR, field: name, value: error || "" });
        }
    };



    const validateForm = () => {
        let isValidForm = true;
        for (const [field, validationFn] of Object.entries(validationRules)) {
            const error = validationFn(state[field]);
            if (error !== true) {
                isValidForm = false;
                dispatch({ type: actionTypes.SET_ERROR, field, value: error });
            }
        }
        return isValidForm;
    };

    const resetForm = () => {
        dispatch({type: actionTypes.RESET, initialState});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch({type: actionTypes.SET_STATUS, value: "success"});
            setTimeout(() => resetForm(), 3000);
        }

        // if (validateForm()) {
        //     dispatch({type: actionTypes.SET_STATUS, value: "sending"}); // Update status to "sending"
        //
        //     try {
        //         // Replace the URL with your backend endpoint.
        //         await axios.post("https://your-api-endpoint.com/messages", state);
        //         dispatch({type:actionTypes.SET_STATUS, value: "sent"}); // Update status to "sent"
        //
        //         setTimeout(() => resetForm(), 2000); // Optional: Reset form after 2 seconds.
        //     } catch (error) {
        //         console.error("Error sending message:", error);
        //         dispatch({type: actionTypes.SET_STATUS, value: "error"}); // Handle error status.
        //     }
        // }
    };



    return {
        state,
        handleChange,
        handleSubmit,
        resetForm,
        dispatch, // Optional, for advanced use
    };
};

export default useFormReducer;