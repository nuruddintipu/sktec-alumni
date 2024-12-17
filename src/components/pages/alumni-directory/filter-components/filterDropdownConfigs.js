import {includeAllBatch, includeAllDeptOptions} from "../../../common/dropdownOptions";

const departmentOptions = includeAllDeptOptions(true);
const batchOptions = includeAllBatch(true);
export const filterDropdownConfigs = [
    {
        name: "batch",
        options: batchOptions,
        placeholder: "By Batch",
    },
    {
        name: "department",
        options: departmentOptions,
        placeholder: "By Department",
    },
];
