const validateForm = (formData) => {
    const errors = {};
    if(!formData.name.trim()) errors.name = "Name is required.";
    if(!formData.email.trim()){
        errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Invalid email address.";
    }

    if(!formData.subject.trim()) errors.subject = "Subject is required";
    if(!formData.message.trim()) errors.message = "Message is required";

    return errors;
};

export default validateForm;