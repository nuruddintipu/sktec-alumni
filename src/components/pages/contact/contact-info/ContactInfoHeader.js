import { contactInfoDefaultText } from '../contact-page-text/contactInfoSectionText';
import React from 'react';

const ContactInfoHeader = ({
                               headlineStyle,
                               headlineClass,
                               bodytextStyle,
                               bodytextClass
                           }) => {
    return (
        <>
            <h3
                className={headlineClass}
                style={headlineStyle}
            >
                {contactInfoDefaultText.headline}
            </h3>

            <p
                className={bodytextClass}
                style={bodytextStyle}
            >
                {contactInfoDefaultText.body}
            </p>
        </>
    );
};

export default ContactInfoHeader;