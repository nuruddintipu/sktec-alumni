export const validateField = (field, value, validationRules) => {
    if(validationRules[field]){
        return validationRules[field](value);
    }

    return true;
};