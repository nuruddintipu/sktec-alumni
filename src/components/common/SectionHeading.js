import React from "react";

const SectionHeading = ({heading,  className, style}) => {
    return <h1 className={`mt-4 ${className}`} style={{color: 'var(--primary-color)', ...style}}>{heading}</h1>
};

export default SectionHeading;