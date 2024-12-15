import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import React from "react";
import {linkItems} from "./FooterConfigs";

const FooterLinks = () => {
    return(
        <Col md={4} className="text-center mb-3 mb-md-0">
            <Link to={linkItems.item1.path} className="text-decoration-none text-light d-block mb-1">{linkItems.item1.name}</Link>
            <Link to={linkItems.item2.path} className="text-decoration-none text-light d-block mb-1">{linkItems.item2.name}</Link>
            {/*<Link to="/" className="text-decoration-none text-light d-block mb-1">Privacy Policy</Link>*/}
        </Col>
    );
};

export default FooterLinks;