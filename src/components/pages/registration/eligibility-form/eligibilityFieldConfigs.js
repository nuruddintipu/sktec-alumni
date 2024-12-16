import {departmentOptions, sessionOptions} from "../../../common/dropdownOptions";

export const eligibilityFieldConfigs = [
    {
        controlId: "butexId",
        label: "Enter Your BUTEX Id",
        type: "text",
        name: "butexId",
        placeholder: "e.g. J201914001",
        required: true,
    },
];

export const eligibilityDropdownConfigs = [
    {
        value: "",
        options: sessionOptions,
        field: "selectedSession",
        placeholder: "Batch",
    },
    {
        value: "",
        options: departmentOptions,
        field: "selectedDepartment",
        placeholder: "Department",
    },
];