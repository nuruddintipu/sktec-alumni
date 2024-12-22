import React from "react";

const EligibilityDefault = ({
                                eligibilityTopBarText,
                                style,
                                className,
                                ...rest
                            }) => {

    return (
        <p className={`slide-down ${className}`} style={style}>{eligibilityTopBarText.default}</p>
    );
};

export default EligibilityDefault;