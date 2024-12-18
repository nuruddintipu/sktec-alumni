import useContactFormReducer from "../../contact/hooks/useContactFormReducer";
import {eligibilityValidationRules, initialState} from "./configs/eligibilityFormConfigs";

const useEligibilityForm = () => {
    return useContactFormReducer(initialState, eligibilityValidationRules);
};

export default useEligibilityForm;