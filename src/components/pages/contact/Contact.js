import React from "react";
import '../registration/registrationForm.css';
import ContactInfoSection from "./contact-info/ContactInfoSection";
import ContactFormSection from "./contact-form/ContactFormSection";
import FormPageTemplate from "../../common/FormPageTemplate";
import SectionHeading from "../../common/SectionHeading";

function Contact() {
    return (
        <FormPageTemplate
            heading={
                <SectionHeading heading={"Contact Form"} containerClass={"d-flex"}/>
            }
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
