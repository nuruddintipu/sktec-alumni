import {Col, Row} from "react-bootstrap";
import DropdownBar from "../../../common/DropdownBar";
import React from "react";
import {useDirectoryContext} from "../../../../context/DirectoryContext";
import {sessionOptions, includeAllDeptOptions, includeAllBatch} from "../../../common/dropdownOptions";
import InputField from "../../../common/InputField";

const FilterComponents = () => {
    const {filters, onFilterChange} = useDirectoryContext()

    const {selectedSession, selectedDepartment} = filters;
    const departmentOptions = includeAllDeptOptions(true);
    const batchOptions = includeAllBatch(true);
    const dropdownConfigs = [
        {
            value: selectedSession,
            options: batchOptions,
            field: "selectedSession",
            placeholder: "By Batch",
        },
        {
            value: selectedDepartment,
            options: departmentOptions,
            field: "selectedDepartment",
            placeholder: "By Department",
        },
    ];


    return (
        <div>
            <Row className="mb-3">
                <Col md={4}>
                    <InputField
                        placeholder={"By Name"}
                        onChange={(val) => onFilterChange("searchQuery", val)}
                    />
                </Col>
                {
                    dropdownConfigs.map(({value, options, field, placeholder}, index) => (
                        <Col md={4} key={index}>
                            <DropdownBar
                                value={value}
                                options={options}
                                onChange={(val) => onFilterChange(field, val)}
                                placeholder={placeholder}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );

};

export default FilterComponents;