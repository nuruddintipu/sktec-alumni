import {Col, Row} from "react-bootstrap";
import SearchBarFilters from "../../../utils/SearchBarFilters";
import DropdownFilters from "../../../utils/DropdownFilters";
import React from "react";
import {useDirectoryContext} from "../DirectoryContext";


const FilterContainer = () => {
    const {filters, onFilterChange} = useDirectoryContext()

    const {searchQuery, selectedSession, selectedDepartment} = filters;



    const sessionOptions = [
        {value: "All", label: "All"},
        {value: "Kendrobindu", label: "Kendrobindu"},
        {value: "Durbar", label: "Durbar"},
        {value: "Kandari", label: "Kandari"},
    ];


    const departmentOptions = [
        {value: "All", label: "All"},
        {value: "Apparel Engineering", label: "Apparel Engineering"},
        {value: "Fabric Engineering", label: "Fabric Engineering"},
        {value: "Wet Process Engineering", label: "Wet Process Engineering"},
        {value: "Yarn Engineering", label: "Yarn Engineering"},
    ];


    return (
        <div>
            {/* Search Bar */}
            <Row className="mb-3">
                <Col>
                    <SearchBarFilters
                        value={searchQuery}
                        onChange={(val) => onFilterChange("searchQuery", val)}
                    />
                </Col>
            </Row>

            {/* Filters */}
            <Row className="mb-3">
                <Col md={6}>
                    <DropdownFilters
                        value={selectedSession}
                        options={sessionOptions}
                        onChange={(val) => onFilterChange("selectedSession", val)}
                        placeholder={"Filter by Batch"}
                    />
                </Col>
                <Col md={6}>
                    <DropdownFilters
                        value={selectedDepartment}
                        options={departmentOptions}
                        onChange={(val) => onFilterChange("selectedDepartment", val)}
                        placeholder={"Filter by Department"}
                    />
                </Col>
            </Row>
        </div>
    );

};

export default FilterContainer;