export const validationRules = {
    name: (value) => value.trim() !== "" || "Name is required!",
    email: (value) => /\S+@\S+\.\S+/.test(value) || "Enter a valid email address!",
    subject: (value) => value.trim() !== "" || "Subject is required!",
    message: (value) => value.trim() !== "" || "Message is required!",
};