import {useReducer} from "react";
import axios from "axios";

const useFormReducer = (initialState, validationRules) => {

    const formReducer = (state, action) => {
        switch (action.type) {
            case 'update_field':
                return {
                    ...state,
                    [action.field]: action.value,
                };
            case 'set_error':
                return {
                    ...state,
                    errors: {
                        ...state.errors,
                        [action.field]: action.value,
                    },
                };
            case "set_status":
                return {
                    ...state,
                    status: action.value,
                };
            case 'reset':
                return action.initialState;
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    };


    const [state, dispatch] = useReducer(formReducer, initialState);



    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({type: 'update_field', field: name, value: value});

        if (validationRules[name] && validationRules[name](value)) {
            dispatch({ type: 'set_error', field: name, value: "" });
        }
    };

    const validateForm = () => {
        let isValidForm = true;
        for (const [field, validationFn] of Object.entries(validationRules)) {
            const result = validationFn(state[field]);
            if (result !== true) {
                isValidForm = false;
                dispatch({ type: 'set_error', field, value: result });
            }
        }
        return isValidForm;
    };

    const resetForm = () => {
        dispatch({type: "reset", initialState});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch({type: "set_status", value: "success"});
            setTimeout(() => resetForm(), 3000);
        }

        // if (validateForm()) {
        //     dispatch({type: "set_status", value: "sending"}); // Update status to "sending"
        //
        //     try {
        //         // Replace the URL with your backend endpoint.
        //         await axios.post("https://your-api-endpoint.com/messages", state);
        //         dispatch({type: "set_status", value: "sent"}); // Update status to "sent"
        //
        //         setTimeout(() => resetForm(), 2000); // Optional: Reset form after 2 seconds.
        //     } catch (error) {
        //         console.error("Error sending message:", error);
        //         dispatch({type: "set_status", value: "error"}); // Handle error status.
        //     }
        // }
    };



    return {formReducer, state, handleSubmit, handleChange , resetForm};
};

export default useFormReducer;