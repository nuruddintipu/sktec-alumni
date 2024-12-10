import React, {useState} from "react";
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import AlumniTable from "./AlumniTable";

const AlumniDirectory = () => {

    const sampleData = [
        {
            name: "John Doe",
            batch: "2018-19",
            majoredIn: "Apparel Engineering",
            currentJob: "Software Engineer at XYZ",
            contact: "john.doe@example.com",
        },
        {
            name: "Jane Smith",
            batch: "2017-18",
            majoredIn: "Fabric Engineering",
            currentJob: "Product Designer at ABC",
            contact: "jane.smith@example.com",
        },
        {
            name: "Michael Johnson",
            batch: "2016-17",
            majoredIn: "Wet Process Engineering",
            currentJob: "Quality Control Manager at DEF",
            contact: "michael.johnson@example.com",
        },
        {
            name: "Emily Davis",
            batch: "2015-16",
            majoredIn: "Yarn Engineering",
            currentJob: "Textile Specialist at GHI",
            contact: "emily.davis@example.com",
        },
        {
            name: "William Brown",
            batch: "2014-15",
            majoredIn: "Apparel Engineering",
            currentJob: "Operations Manager at JKL",
            contact: "william.brown@example.com",
        },
        {
            name: "Sophia Wilson",
            batch: "2013-14",
            majoredIn: "Fabric Engineering",
            currentJob: "Freelance Textile Designer",
            contact: "sophia.wilson@example.com",
        },
        {
            name: "James Anderson",
            batch: "2012-13",
            majoredIn: "Wet Process Engineering",
            currentJob: "Head of Production at MNO",
            contact: "james.anderson@example.com",
        },
        {
            name: "Olivia Martinez",
            batch: "2011-12",
            majoredIn: "Yarn Engineering",
            currentJob: "Independent Consultant",
            contact: "olivia.martinez@example.com",
        },
        {
            name: "Benjamin White",
            batch: "2010-11",
            majoredIn: "Apparel Engineering",
            currentJob: "Business Owner",
            contact: "benjamin.white@example.com",
        },
        {
            name: "Charlotte Thomas",
            batch: "2009-10",
            majoredIn: "Fabric Engineering",
            currentJob: "Senior Designer at PQR",
            contact: "charlotte.thomas@example.com",
        },
    ];
    const [filters, setFilters] = useState({batch: "", majoredIn: "", search: ""});
    const [filteredData, setFilteredData] = useState(sampleData);



    const handleFilterChange = (field, value) => {
        const updatedFilters = {...filters, [field]: value};

        setFilters(updatedFilters);

        const filtered = sampleData.filter((entry) => {
            const matchesBatch = updatedFilters.batch === "" || entry.batch === updatedFilters.batch;
            const matchesMajor = updatedFilters.majoredIn === "" || entry.majoredIn === updatedFilters.majoredIn;
            const matchesSearch =
                updatedFilters.search === "" ||
                Object.values(entry).some((val) =>
                    val.toString().toLowerCase().includes(updatedFilters.search.toLowerCase())
                );
        });
        setFilteredData(filtered);
    };


    return (
        <Container>
            <br/>
            {/* Search Bar */}
            <Row className="mb-3">
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={filters.search}
                        onChange={(e) => handleFilterChange("search", e.target.value)}
                    />
                </Col>
            </Row>

            {/* Filters */}
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Select
                        defaultValue=""
                        style={{ color: "grey" }}
                        onChange={(e) => handleFilterChange("batch", e.target.value)}
                    >
                        <option value="" disabled>
                            Filter by Batch
                        </option>
                        <option value="">All</option>
                        <option value="2018-19">2018-19</option>
                        <option value="2017-18">2017-18</option>
                        <option value="2016-17">2016-17</option>
                    </Form.Select>
                </Col>
                <Col md={6}>
                    <Form.Select
                        defaultValue=""
                        style={{ color: "grey" }}
                        onChange={(e) => handleFilterChange("majoredIn", e.target.value)}
                    >
                        <option value="" disabled>
                            Filter by Majored In
                        </option>
                        <option value="">All</option>
                        <option value="Apparel Engineering">Apparel Engineering</option>
                        <option value="Fabric Engineering">Fabric Engineering</option>
                        <option value="Wet Process Engineering">Wet Process Engineering</option>
                        <option value="Yarn Engineering">Yarn Engineering</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AlumniTable alumniData={filteredData}/>
                </Col>
            </Row>
        </Container>
    );
};

export default AlumniDirectory;
