import React from "react";

const FieldError = ({ error }) => {
    return <p className={`text-danger ${error ? "" : "invisible"}`}
       style={{minHeight: "1.5rem"}}>{error}</p>

};

export default FieldError;