import React from "react";

const EligibilityFailure = ({
                                eligibilityTopBarText,
                                style,
                                className,
                                ...rest
                            }) => {

    return (
        <p className={className} style={style}>{eligibilityTopBarText.failure}</p>
    );
};

export default EligibilityFailure;