export const eligibilityFieldConfigs = [
    {
        controlId: "butexId",
        label: "Enter Your BUTEX Id   (JYYYYDDRRR)",
        type: "text",
        name: "butexId",
        placeholder: "e.g. J201914001",
        required: true,
    },
];

export const eligibilityTopBarText = {
    heading: "Eligibility Check",
    default: "Please fill in your BUTEX registration Id to check your eligibility.",
    failure: "Sorry you are not eligible now.",
    exist: "You are already registered, for any information please contact with the concern authority."
}