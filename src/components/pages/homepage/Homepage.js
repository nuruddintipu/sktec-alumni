import React from "react";
import './homepage.css';
import LandingSection from "../../common/LandingSection";
import {landingText} from "./homepageText";
import {ContentSection} from "./ContentSection";

function Homepage() {
    return (
        <>
            <LandingSection
                title={landingText.title}
                body={landingText.body}
            />
            <ContentSection/>
        </>

    );
}

export default Homepage;