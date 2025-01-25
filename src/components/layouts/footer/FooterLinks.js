import {Col} from "react-bootstrap";
import React from "react";
import NamedLink from "../../../routes/NamedLink";

const FooterLinks = () => {
    return (
        <Col md={4} className="text-center mb-3 mb-md-0">
            <NamedLink routeName='ABOUT' className="text-decoration-none text-light d-block mb-1">About</NamedLink>
            <NamedLink routeName='CONTACT' className="text-decoration-none text-light d-block mb-1">Contact</NamedLink>
            
        </Col>
    );
};

export default FooterLinks;