import {Row} from "react-bootstrap";
import FormContainer from "../../../../common/FormContainer";
import React from "react";

const TopBarContainer = ({
                                   children,
                                   style,
                                   className,
                                   state,
                                   ...rest
                               }) => {

    return (
        <Row>
            <FormContainer
                className={className}
                style={{
                    background: 'var(--primary-color)',
                    fontSize: "1.2rem", color: '#e8edf0', ...style
                }}
                {...rest}
            >
                {children}

            </FormContainer>
        </Row>
    );

};
export default TopBarContainer;