import {Container, Row} from "react-bootstrap";
import {TextBlock} from "./TextBlock";
import {aboutContentSectionText} from "./aboutText";
import React from "react";

export const AboutContentSection = () => {
    return (
        <section className="mt-4 mb-4">
            <Container>
                <Row>
                    {aboutContentSectionText.map(({title, text}, index) => (
                        <TextBlock
                            key={index}
                            title={title}
                            text={text}/>
                    ))}
                </Row>
            </Container>
        </section>
    );
};