import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";
import SearchBarFilters from "./SearchBarFilters";
import DropdownFilters from "./DropdownFilters";
import React, {useMemo} from "react";


const FilterContainer = ({filters, setFilters}) => {

    const {searchQuery, selectedSession, selectedDepartment, alumniState} = filters;
    const onFilterChange = (field, value) => {
        setFilters((prev) => ({...prev, [field]: value}));
    };

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
                        onChange={(val) => onFilterChange("searchQuery", val)}/>
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

FilterContainer.propTypes = {
    filters: PropTypes.shape({
        searchQuery: PropTypes.string,
        selectedSession: PropTypes.string,
        selectedDepartment: PropTypes.string,
    }).isRequired,
    setFilters: PropTypes.func.isRequired,
};

export default FilterContainer;