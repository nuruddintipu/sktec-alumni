import React from 'react';
import '../registration/styles/registrationForm.css';
import ContactInfoContainer from './contact-info/ContactInfoContainer';
import ContactFormSection from './contact-form/ContactFormSection';
import FormPageTemplate from '../../common/FormPageTemplate';
import SectionHeading from '../../common/SectionHeading';
import useContactForm from './hooks/useContactForm';
import { contactPageHeading } from './contact-page-text/contactPageText';


function Contact() {
    const { state, handleSubmit, handleChange } = useContactForm();

    return (
        <FormPageTemplate
            heading={
                <SectionHeading
                    heading={contactPageHeading}
                    containerClass={'d-flex'}
                />
            }

            content={
                <>
                    <ContactInfoContainer state={state} />
                    <ContactFormSection
                        state={state}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </>
            }
        />
    );
}

export default Contact;
