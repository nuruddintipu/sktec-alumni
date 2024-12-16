import React from "react";
import './registrationForm.css';
import FormPageTemplate from "../../common/FormPageTemplate";
import EligibilityForm from "./eligibility-form/EligibilityForm";
import SectionHeading from "../../common/SectionHeading";
import {RegFormHeading} from "./RegFormTexts";



function RegistrationForm({
                              heading = <SectionHeading heading={RegFormHeading} />,
                              content = <EligibilityForm />
                          }) {


    return (
        <FormPageTemplate
            heading={heading}
            content={content}
            className={"mt-0"}
            maxWidth={'80%'}
        />
    );
}

export default RegistrationForm;
