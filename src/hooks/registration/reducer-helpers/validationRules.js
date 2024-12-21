export const eligibilityValidationRules = {
    butexId: (value) => {
        const id = value.toLowerCase();
        if(!value){
            return "ButexId is required!";
        }
        // Check if the format matches 'JYYYYDDRRR'
        const regex = /^j(\d{4})(\d{2})(\d{3})$/;
        const match = id.match(regex);

        if (!match) {
            return "Invalid Butex ID format. Expected format: JYYYYDDRRR";
        }

        const [_, admitYear, departmentCode, roll] = match;

        // Validate admit year (2017-2019)
        if (admitYear < 2017 || admitYear > 2019) {
            return "Invalid graduated session. Only 2017-2019 are eligible.";
        }

        // Validate department code (11-14)
        if (departmentCode < 11 || departmentCode > 14) {
            return "Invalid department code. Must be between 11 and 14.";
        }

        // Validate student roll (001-031)
        if (roll < 1 || roll > 31) {
            return "Invalid roll number. Must be between 001 and 031.";
        }

        // If all validations pass
        return true;
    },
    batch: (value) => value.trim() !== "" || "Batch is required!",
    department: (value) => value.trim() !== "" || "Department is required!",
};