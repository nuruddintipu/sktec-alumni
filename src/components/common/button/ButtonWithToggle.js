import {useState} from "react";
import {Col, Collapse, Row} from "react-bootstrap";
import ButtonPrimary from "./ButtonPrimary";
import './ButtonStyles.css';

const ButtonWithToggle = ({child, buttonText, ...rest}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row>
                <Col md={3} className={"d-flex justify-content-md-start"}>
                    <ButtonPrimary
                        buttonText={"Filter"}
                        className={"mb-4"}
                        {...rest}
                        onClick={() => setOpen(!open)}
                        aria-controls={"collapse-component"}
                        aria-expanded={open}
                    />
                </Col>
                <Collapse className={"mt-2"} in={open}>
                    <Col md={12} id={"collapse-component"}>
                        {child}
                    </Col>
                </Collapse>
            </Row>
        </>
    );
};

export default ButtonWithToggle;