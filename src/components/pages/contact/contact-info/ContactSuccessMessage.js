import {succesMessage} from "../contact-page-text/contactInfoSectionText";

const ContactSuccessMessage = ({
                            className,
                            style,
                            ...rest
                        }) => {
    return (
        <div
            className={`success-message slide-down ${className}`}
            style={style}
            {...rest}
        >
            <h3>{succesMessage.headerText}</h3>
            <p>{succesMessage.body}</p>
        </div>
    );
};

export default ContactSuccessMessage;