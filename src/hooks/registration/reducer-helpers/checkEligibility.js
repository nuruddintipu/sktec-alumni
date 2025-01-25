// Utility function for batch matching logic
import { eligibleIds, exampleAlumni } from '../../../utils/exampleAlumni';
import { setFieldValue, setNewMember, setNextStep } from '../regFormActions';

// Function that integrates everything and dispatches the result
export const checkEligibility = ({ eligibility: { butexId } }, dispatch) => {
    const isGraduated = eligibleIds.includes(butexId.toUpperCase());
    dispatch(setFieldValue('eligibility', 'isEligible', isGraduated ? 'eligible' : 'notEligible'));
    const alumni = exampleAlumni.find(alumni => alumni.butexId.toUpperCase() === butexId.toUpperCase());

    if (alumni) {
        dispatch(setNewMember(false)); // Alumni exists
    } else if (isGraduated) {
        dispatch(setNewMember(true)); // New member
        dispatch(setNextStep());
    }
};
