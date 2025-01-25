import React from 'react';
import '../styles/registrationForm.css';
import FormPageTemplate from '../../../common/FormPageTemplate';
import EligibilityForm from './form/eligibility-form/EligibilityForm';
import SectionHeading from '../../../common/SectionHeading';
import { GeneralForm } from './form/general-Info/GeneralForm';
import { useRegistration } from '../../../../hooks/registration/useRegFormReducer';


function RegistrationPage({
                              heading = <SectionHeading heading={''} containerClass={'d-flex'} />
                          }) {

    const { state, handleChange, handleNext } = useRegistration();


    return (
        <FormPageTemplate
            heading={heading}
            content={
                state.currentStep === 1 ?
                    <EligibilityForm
                        state={state}
                        handleChange={handleChange}
                        handleNext={handleNext} /> :
                    <GeneralForm />}
            className={'mt-0'}
            maxWidth={'80%'}
        />
    );
}

export default RegistrationPage;
