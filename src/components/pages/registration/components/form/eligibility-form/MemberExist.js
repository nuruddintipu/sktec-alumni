import React from "react";

const MemberExist = ({
                                eligibilityTopBarText,
                                style,
                                className,
                                ...rest
                            }) => {

    return (
        <p className={`slide-down ${className}`} style={style}>{eligibilityTopBarText.exist}</p>
    );
};

export default MemberExist;