// Utility function for batch matching logic
import {eligibleIds, exampleAlumni} from "../../../utils/exampleAlumni";
import {resetForm, setFieldValue, setNewMember} from "../regFormActions";
import {checkMemberExist} from "./checkMemberExist";
import {initialState} from "../initialState";


// Mapping department codes to department names
const depCodeToDeptMap = {
    11: "Yarn Engineering",
    12: "Fabric Engineering",
    13: "Wet Process Engineering",
    14: "Apparel Engineering"
};

const yearToBatchMap = {
    2017: "Kandari",
    2018: "Durbar",
    2019: "Kendrobindu"
};
const matchKeyToValueMap = (key, value, map)=> {
    const expectedValue = map[key];
    return expectedValue === value;
};


// Class responsible for validating admission details like batch and department
export const validateYearAndId = (id, batch, department) => {
    const regex = /^j(\d{4})(\d{2})(\d{3})$/;
    const match = id.toLowerCase().match(regex);
    if (!match) return false;

    const [, admitYear, deptCode] = match;
    return matchKeyToValueMap(admitYear, batch, yearToBatchMap) && matchKeyToValueMap(deptCode, department, depCodeToDeptMap);
}

// Function that integrates everything and dispatches the result
export const checkEligibility = ({eligibility: {butexId}}, dispatch) => {
    const isGraduated = eligibleIds.includes(butexId.toUpperCase());
    dispatch(setFieldValue("eligibility", "isEligible", isGraduated ? "eligible" : "notEligible"));
    const alumni = exampleAlumni.find(alumni => alumni.butexId.toUpperCase() === butexId.toUpperCase());

    console.log(alumni);
    if (alumni) {
        dispatch(setNewMember(false)); // Alumni exists
    } else {
        dispatch(setNewMember(true)); // New member
    }

    setTimeout(() =>dispatch(resetForm(initialState)), 3000);
};
