import {Row} from "react-bootstrap";
import FormContainer from "../../../../../common/FormContainer";
import React from "react";
import EligibilityDefault from "./EligibilityPending";
import EligibilityFailure from "./EligibilityFailure";
import ContactSuccessMessage from "../../../../contact/contact-info/ContactSuccessMessage";
import MemberExist from "./MemberExist";
import TopBarContainer from "../TopBarContainer";

const EligibilityFormTopBar = ({
                                   eligibilityTopBarText,
                                   style,
                                   className,
                                   state,
                                   ...rest
                               }) => {

    return (
        <TopBarContainer>
            <p className={`slide-down h4 ${className}`}>{eligibilityTopBarText.heading}</p>
            {state.eligibility.isEligible === "pending"
                ? <EligibilityDefault eligibilityTopBarText={eligibilityTopBarText}/>
                : state.eligibility.isEligible === "notEligible"
                    ? <EligibilityFailure eligibilityTopBarText={eligibilityTopBarText}/>
                    : state.isNewAlumni === true
                        ? <EligibilityDefault eligibilityTopBarText={eligibilityTopBarText}/>
                        : <MemberExist eligibilityTopBarText={eligibilityTopBarText}/>
            }
        </TopBarContainer>
    );

};
export default EligibilityFormTopBar;