import React from "react";
import TopBarContainer from "../TopBarContainer";

const GeneralFormTopBar = ({
                                   generalFormTopBarTexts,
                                   style,
                                   className,
                                   state,
                                   ...rest
                               }) => {

    return (
        <TopBarContainer>
            <p className={`slide-down h4 ${className}`}>{generalFormTopBarTexts.heading}</p>
            <p className={`slide-down ${className}`} style={style}>{generalFormTopBarTexts.default}</p>
        </TopBarContainer>
    );

};
export default GeneralFormTopBar;