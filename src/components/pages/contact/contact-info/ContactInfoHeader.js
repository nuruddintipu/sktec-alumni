import {headerText} from "./contactInfoSectionText";
import React from "react";

const ContactInfoHeader = () => {
    return (
        <>
            <h3>{headerText.headline}</h3>
            <p>{headerText.body}</p>
        </>
    );
};

export default ContactInfoHeader;