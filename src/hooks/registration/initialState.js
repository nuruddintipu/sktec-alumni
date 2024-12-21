export const initialState = {
    currentStep: 1,
    eligibility: {
        butexId: "",
        batch: "",
        department: "",
    },
    personalInfo: {
        name: "",
        email: "",
        phone: "",
        gender: "",
    },
    jobInfo: {
        companyName: "",
        jobTitle: "",
        experience: "",
    },
    errors:{
        eligibility: {},
        personalInfo: {},
        jobInfo: {},
    }
};