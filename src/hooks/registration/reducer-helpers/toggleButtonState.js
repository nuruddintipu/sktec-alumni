import {disableButton} from "../regFormActions";

export const toggleButtonState =(error, dispatch) => {
    return error.length > 0 ?
        dispatch(disableButton(true)) : dispatch(disableButton(false));
};