import React from 'react';
import EligibilityDefault from './EligibilityPending';
import EligibilityFailure from './EligibilityFailure';
import MemberExist from './MemberExist';
import TopBarContainer from '../TopBarContainer';

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
            {state.eligibility.isEligible === 'pending'
                ? <EligibilityDefault eligibilityTopBarText={eligibilityTopBarText} />
                : state.eligibility.isEligible === 'notEligible'
                    ? <EligibilityFailure eligibilityTopBarText={eligibilityTopBarText} />
                    : state.isNewAlumni === true
                        ? <EligibilityDefault eligibilityTopBarText={eligibilityTopBarText} />
                        : <MemberExist eligibilityTopBarText={eligibilityTopBarText} />
            }
        </TopBarContainer>
    );

};
export default EligibilityFormTopBar;