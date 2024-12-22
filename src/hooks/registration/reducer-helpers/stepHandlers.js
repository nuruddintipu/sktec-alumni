import {checkEligibility} from "./checkEligibility";

export const stepHandlers = {
    1: (state, dispatch) => checkEligibility(state, dispatch),

}