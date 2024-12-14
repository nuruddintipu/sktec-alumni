import {useState} from "react";

const useContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});


    const handleInputChange = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}));
        setErrors((prev) => ({...prev, [field]: ""})); // clears errors on change
    }


    return { formData, errors , setErrors, handleInputChange};
};

export default useContactForm;