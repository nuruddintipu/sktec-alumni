import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const Filters = ({ searchQuery, selectedSession, selectedDepartment, onFilterChange }) => {
    return (
        <div>
            {/* Search Bar */}
            <Row className="mb-3">
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => onFilterChange("searchQuery", e.target.value)}
                    />
                </Col>
            </Row>

            {/* Filters */}
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Select
                        value={selectedSession || ""}
                        onChange={(e) => onFilterChange("selectedSession", e.target.value)}
                    >
                        <option value="" disabled>Filter by Batch</option>
                        <option value="All">All</option>
                        <option value="Kendrobindu">Kendrobindu 3</option>
                        <option value="Durbar">Durbar 2</option>
                        <option value="Kandari">Kandari 1</option>
                    </Form.Select>
                </Col>
                <Col md={6}>
                    <Form.Select
                        value={selectedDepartment || ""}
                        onChange={(e) => onFilterChange("selectedDepartment", e.target.value)}
                    >
                        <option value="" disabled>Filter by Department</option>
                        <option value="All">All</option>
                        <option value="Apparel Engineering">Apparel Engineering</option>
                        <option value="Fabric Engineering">Fabric Engineering</option>
                        <option value="Wet Process Engineering">Wet Process Engineering</option>
                        <option value="Yarn Engineering">Yarn Engineering</option>
                    </Form.Select>
                </Col>
            </Row>
        </div>
    );
};

export default Filters;
