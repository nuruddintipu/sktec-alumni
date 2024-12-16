export const initialState = {
    butexId: "",
    batch: "",
    department: "",
    errors: {}
};
export const eligibilityValidationRules ={
    butexId: (value) => value.trim() !== "" || "Id is required!",
    batch: (value) => value.trim() !== "" || "Batch is required!",
    department: (value) => value.trim() !== "" || "Department is required!",
};
