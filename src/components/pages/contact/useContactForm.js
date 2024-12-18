import useFormReducer from "../../../hooks/useFormReducer";
import {validationRules} from "./contact-form/ContactFieldsValidationRules";

const initialState = {
    name: "",
    email: "",
    message: "",
    subject: "",
    status: "",
    errors: {},
};
const useContactForm = () => {
    return useFormReducer(initialState, validationRules);
};

export default useContactForm;