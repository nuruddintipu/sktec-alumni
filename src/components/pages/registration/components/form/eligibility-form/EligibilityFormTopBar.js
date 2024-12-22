import {Row} from "react-bootstrap";
import FormContainer from "../../../../../common/FormContainer";
import React from "react";
import EligibilityDefault from "./EligibilityPending";
import EligibilityFailure from "./EligibilityFailure";
import ContactSuccessMessage from "../../../../contact/contact-info/ContactSuccessMessage";
import MemberExist from "./MemberExist";

const EligibilityFormTopBar = ({
                                   eligibilityTopBarText,
                                   style,
                                   className,
                                   state,
                                   ...rest
                               }) => {

    return (
        <Row>
            <FormContainer
                className={className}
                style={{
                    background: 'var(--primary-color)',
                    fontSize: "1.2rem", color: '#e8edf0', ...style
                }}
                {...rest}
            >

                <p className={`slide-down h4 ${className}`}>{eligibilityTopBarText.heading}</p>
                {state.eligibility.isEligible === "pending"
                    ? <EligibilityDefault eligibilityTopBarText={eligibilityTopBarText}/>
                    : state.eligibility.isEligible === "notEligible"
                        ? <EligibilityFailure eligibilityTopBarText={eligibilityTopBarText}/>
                        : state.isNewAlumni === true
                            ? <EligibilityDefault eligibilityTopBarText={eligibilityTopBarText}/>
                            : <MemberExist eligibilityTopBarText={eligibilityTopBarText}/>
                }

            </FormContainer>
        </Row>
    );

};
export default EligibilityFormTopBar;