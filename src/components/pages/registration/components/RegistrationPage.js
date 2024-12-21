import React from "react";
import '../styles/registrationForm.css';
import FormPageTemplate from "../../../common/FormPageTemplate";
import EligibilityForm from "./form/eligibility-form/EligibilityForm";
import SectionHeading from "../../../common/SectionHeading";
import {RegFormHeading} from "../RegFormTexts";



function RegistrationPage({
                              heading = <SectionHeading heading={RegFormHeading} containerClass={"d-flex"} />,
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

export default RegistrationPage;
