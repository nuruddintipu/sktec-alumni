import useContactFormReducer from "./useContactFormReducer";
import {validationRules} from "../contact-form/fields/ContactFieldsValidationRules";

const initialState = {
    name: "",
    email: "",
    message: "",
    subject: "",
    status: "",
    errors: {},
};
const useContactForm = () => {
    return useContactFormReducer(initialState, validationRules);
};

export default useContactForm;