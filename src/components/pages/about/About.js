import React from "react";
import './about.css';
import LandingSection from "../../common/LandingSection";
import {aboutText} from "./aboutText";


function About() {
    return (
        <>
            <LandingSection
                title={aboutText.title}
                body={aboutText.body}
                className={"about-bg"}
            />
        </>
    );
}

export default About;