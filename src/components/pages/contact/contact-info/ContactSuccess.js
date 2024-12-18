import {succesMessage} from "../contact-page-text/contactInfoSectionText";

const ContactSuccess = ({
                            className,
                            style,
                            ...rest
                        }) => {
    return (
        <div
            className={`success-message slide-up ${className}`}
            style={style}
            {...rest}
        >
            <h3>{succesMessage.headerText}</h3>
            <p>{succesMessage.body}</p>
        </div>
    );
};

export default ContactSuccess;