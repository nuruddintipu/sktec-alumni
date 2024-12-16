import {useReducer} from "react";

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
            case 'reset':
                return action.initialState;
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    };


    const [state, dispatch] = useReducer(formReducer, initialState);



    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({type: 'update_field', field: name, value});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            resetForm();
            alert("Successfull!");
        }
    };



    return {formReducer, state, handleSubmit, handleChange , resetForm};
};

export default useFormReducer;