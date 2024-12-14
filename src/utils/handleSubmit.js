// handleSubmit.j

import validateForm from "./validateForm";

const handleSubmit = (formData, setErrors) => (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    // Simulate form submission
    console.log("Form is valid. Sending data:", formData);
};

export default handleSubmit;
