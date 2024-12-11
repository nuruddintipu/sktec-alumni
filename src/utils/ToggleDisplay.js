import {useState} from "react";
import {Button, Collapse} from "react-bootstrap";

const ToggleDisplay = ({child, buttonText}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls={"collapse-component"}
                aria-expanded={open}
                className={"mb-4"}
            >
                {buttonText}
            </Button>
            <Collapse in={open}>
                <div id={"collapse-component"}>
                    {child}
                </div>
            </Collapse>
        </>
    );
};

export default ToggleDisplay;