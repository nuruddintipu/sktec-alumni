import {Col} from "react-bootstrap";
import React from "react";

const FormContainer = ({
                           children,
                           md,
                           style = {},
                           className = "",
                           ...rest
                       }) => {
    return (
        <Col md={md}
             style={{
                 background: '#e8edf0',
                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', ...style
             }}
             className={className}
             {...rest}
        >
            <div className={"w-100 p-md-5 p-4"}>
                {children}
            </div>
        </Col>
    );
};


export default FormContainer;