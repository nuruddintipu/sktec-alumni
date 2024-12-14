import {Col} from "react-bootstrap";
import React from "react";
import {brandData} from "./FooterConfigs";

const FooterBrand = () => {
    return (
        <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h2 className="h3">{brandData.name}</h2>
            <p className="small m-0">{brandData.slogan}</p>
        </Col>
    );
};

export default FooterBrand;