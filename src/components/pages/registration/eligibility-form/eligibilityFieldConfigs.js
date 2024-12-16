import {includeAllBatch, includeAllDeptOptions} from "../../../common/dropdownOptions";


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

const batchesOptions = includeAllBatch(false);
const departmentOptions = includeAllDeptOptions(false);
export const eligibilityDropdownConfigs = [
    {
        label: "Batch",
        value: "",
        name: "batch",
        options: batchesOptions,
        field: "selectedSession",
        placeholder: "Batch",
    },
    {
        label: "Department",
        value: "",
        name: "department",
        options: departmentOptions,
        field: "selectedDepartment",
        placeholder: "Department",
    },
];

export const eligibilityFormSidebarText = {
    heading: "Are you a SKTEC Graduate?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}