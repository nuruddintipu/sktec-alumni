import useFormReducer from "../../../../hooks/useFormReducer";
import {eligibilityValidationRules, initialState} from "./eligibilityConfigs";

const useEligibilityForm = () => {
    return useFormReducer(initialState, eligibilityValidationRules);
};

export default useEligibilityForm;