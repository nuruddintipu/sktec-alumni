import { exampleAlumni } from '../../../utils/exampleAlumni';
import { setNewMember } from '../regFormActions';

export const checkMemberExist = (butexId, dispatch) => {
    const alumni = exampleAlumni.find(alumni => alumni.butexId === butexId.toUpperCase());

    if (alumni !== false) {

        console.log(alumni);
        dispatch(setNewMember(true));
    } else {

        dispatch(setNewMember(false));
    }
};