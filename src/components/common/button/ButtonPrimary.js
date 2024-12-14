import {Button} from "react-bootstrap";
import './ButtonStyles.css'
const ButtonPrimary = ({buttonText, type, className, ...rest}) => {

    return (
        <div className={"button-container"}>
            <Button
                variant="custom"
                type={type}
                className={`custom-button ${className || ""}`}

                {...rest}
            >
                {buttonText}
            </Button>
        </div>
    );
}

export default ButtonPrimary;