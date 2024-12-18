import ContactInfoHeader from "./ContactInfoHeader";
import {contactInformations} from "../contact-page-text/contactInfoSectionText";
import IconTextBlock from "../../../common/IconTextBlock";
import React from "react";

const ContactInfoDefault = ({className="", style, ...rest}) => {
    return (
        <div
            className={`slide-up ${className}`}
            style={style}
            {...rest}
        >

            <ContactInfoHeader />
            {/*Contact information */}
            {contactInformations.map(({icon, text}, index) => (
                <IconTextBlock
                    key={index}
                    icon={icon}
                    info={text}
                />
            ))}

        </div>
    );
};

export default ContactInfoDefault;