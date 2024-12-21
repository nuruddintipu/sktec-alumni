import {Row} from "react-bootstrap";
import FormContainer from "../../../../../common/FormContainer";
import React from "react";

const EligibilityFormTopBar = ({
                                   eligibilityTopBarText,
                                   style,
                                   className,
                                    ...rest
                               }) => {

    return (
        <Row>
            <FormContainer
                className={className}
                style={{
                    background: 'var(--primary-color)',
                    fontSize: "1.2rem", color: '#e8edf0', ...style}}
                {...rest}
            >

                <p className={"h4"}>{eligibilityTopBarText.heading}</p>
                <p>{eligibilityTopBarText.body}</p>

            </FormContainer>
        </Row>
    );

};
export default EligibilityFormTopBar;