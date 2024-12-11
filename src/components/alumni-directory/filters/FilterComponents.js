import {Col, Row} from "react-bootstrap";
import SearchBarFilters from "../../../utils/SearchBarFilters";
import DropdownFilters from "../../../utils/DropdownFilters";
import React from "react";
import {useDirectoryContext} from "../DirectoryContext";
import { sessionOptions, departmentOptions } from "./filterOptions";

const FilterComponents = () => {
    const {filters, onFilterChange} = useDirectoryContext()

    const {searchQuery, selectedSession, selectedDepartment} = filters;

    const dropdownConfigs = [
        {
            value: selectedSession,
            options: sessionOptions,
            field: "selectedSession",
            placeholder: "Filter by Batch",
        },
        {
            value: selectedDepartment,
            options: departmentOptions,
            field: "selectedDepartment",
            placeholder: "Filter by Department",
        },
    ];



    return (
        <div>
            <Row className="mb-3">
                <Col>
                    <SearchBarFilters
                        value={searchQuery}
                        onChange={(val) => onFilterChange("searchQuery", val)}
                    />
                </Col>
            </Row>

            <Row className="mb-3">
                {dropdownConfigs.map(({ value, options, field, placeholder }, index) => (
                    <Col md={6} key={index}>
                        <DropdownFilters
                            value={value}
                            options={options}
                            onChange={(val) => onFilterChange(field, val)}
                            placeholder={placeholder}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );

};

export default FilterComponents;