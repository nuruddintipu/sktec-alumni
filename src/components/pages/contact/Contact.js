import React from "react";
import '../registration/registrationForm.css';
import ContactPageHeading from "./ContactPageHeading";
import ContactInfoSection from "./contact-info/ContactInfoSection";
import ContactFormSection from "./contact-form/ContactFormSection";
import FormPageTemplate from "../../common/FormPageTemplate";

function Contact() {
    return (
        <FormPageTemplate
            heading={<ContactPageHeading/>}
            content={
                <>
                    <ContactInfoSection/>
                    <ContactFormSection/>
                </>
            }
        />
    );
};

export default Contact;
