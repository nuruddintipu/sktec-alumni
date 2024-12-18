import {eligibleIds} from "../../../utils/exampleAlumni";

const checkEligibilityFn = (butexId) => {
    const id = butexId.toLowerCase();

    const regex = /^j(\d{4})(\d{2})(\d{3})$/;
    const match = id.match(regex);

    if (match) {
        const admitYear = parseInt(match[1], 10);
        // Only years 2017-2019 are eligible
        if (admitYear < 2017 || admitYear > 2019) {
            return false; // Not eligible
        }

        if(!eligibleIds.includes(id)){
            return false;
        }
    }


    return true; // Eligible
};
