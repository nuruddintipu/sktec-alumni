const FieldError = ({ error }) => {
    return error ? <p className={"text-danger"}>{error}</p> : null;
};

export default FieldError;