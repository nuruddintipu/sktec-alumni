import React, {useState} from 'react';
import SocialIcons from './SocialIcons';
import { Container, Row } from "react-bootstrap";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import Copyrights from "./Copyrights";


function Footer() {
    return (
        <footer className="text-light py-4 border-top" style={{background: 'var(--primary-color)'}}>
            <Container>
                <Row className="align-items-center">

                    <FooterBrand />
                    <FooterLinks />
                    <SocialIcons />

                </Row>
                <Copyrights />

            </Container>
        </footer>
    );
}


export default Footer;
