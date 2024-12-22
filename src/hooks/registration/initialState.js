export const initialState = {
    currentStep: 1,
    eligibility: {
        butexId: "",
        isEligible: "pending",
    },
    buttonDisabled: false,
    isNewAlumni: false,
    otherInfo: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        batch: "",
        department: "",
        passingYear: "",
        hasJob: null,
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