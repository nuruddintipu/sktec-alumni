import {eligibilityDropdownConfigs, eligibilityFieldConfigs} from "./eligibilityFieldConfigs";
import FormRowWrapper from "../../../common/FormRowWrapper";
import InputField from "../../../common/InputField";
import {Col, Row} from "react-bootstrap";
import DropdownBar from "../../../common/DropdownBar";

export const EligibilityFormFields = ({}) => {
    return (
        <>
            <FormRowWrapper
                md={12}
                className={"mt-3"}
            >
                {
                    eligibilityFieldConfigs.map(({controlId, label, type, name, placeholder, required}, index) => (

                        <InputField
                            key={index}
                            controlId={controlId}
                            label={label}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                        />
                    ))
                }

                <Row className={"mb-3"}>
                    {
                        eligibilityDropdownConfigs.map(({value, options, field, placeholder}, index) => (
                            <Col md={6} key={index}>
                                <DropdownBar
                                    value={value}
                                    options={options}
                                    placeholder={placeholder}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </FormRowWrapper>

        </>
    );
};