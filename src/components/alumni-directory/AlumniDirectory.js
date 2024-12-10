import React, {useEffect, useState} from "react";
import {Col, Container, Form, Pagination, Row} from "react-bootstrap";
import Filters from "./Filters";
import PaginationControls from "./PaginationControls";
import AlumniTable from "./AlumniTable";

const AlumniDirectory = () => {

    const sampleData = [
        // Existing entries
        {
            name: "John Doe",
            batch: "Kendrobindu",
            majoredIn: "Apparel Engineering",
            currentJob: "Software Engineer at XYZ",
            contact: "john.doe@example.com",
        },
        {
            name: "Jane Smith",
            batch: "Durbar",
            majoredIn: "Fabric Engineering",
            currentJob: "Product Designer at ABC",
            contact: "jane.smith@example.com",
        },
        {
            name: "Michael Johnson",
            batch: "Kandari",
            majoredIn: "Wet Process Engineering",
            currentJob: "Quality Control Manager at DEF",
            contact: "michael.johnson@example.com",
        },
        {
            name: "Emily Davis",
            batch: "Kandari",
            majoredIn: "Yarn Engineering",
            currentJob: "Textile Specialist at GHI",
            contact: "emily.davis@example.com",
        },
        {
            name: "William Brown",
            batch: "Durbar",
            majoredIn: "Apparel Engineering",
            currentJob: "Operations Manager at JKL",
            contact: "william.brown@example.com",
        },
        {
            name: "Sophia Wilson",
            batch: "Kendrobindu",
            majoredIn: "Fabric Engineering",
            currentJob: "Freelance Textile Designer",
            contact: "sophia.wilson@example.com",
        },
        {
            name: "James Anderson",
            batch: "Kendrobindu",
            majoredIn: "Wet Process Engineering",
            currentJob: "Head of Production at MNO",
            contact: "james.anderson@example.com",
        },
        {
            name: "Olivia Martinez",
            batch: "Kendrobindu",
            majoredIn: "Yarn Engineering",
            currentJob: "Independent Consultant",
            contact: "olivia.martinez@example.com",
        },
        {
            name: "Benjamin White",
            batch: "Kandari",
            majoredIn: "Apparel Engineering",
            currentJob: "Business Owner",
            contact: "benjamin.white@example.com",
        },
        {
            name: "Charlotte Thomas",
            batch: "Kandari",
            majoredIn: "Fabric Engineering",
            currentJob: "Senior Designer at PQR",
            contact: "charlotte.thomas@example.com",
        },
        // Additional entries
        ...Array.from({ length: 50 }, (_, i) => {
            const batches = ["Kandari", "Durbar", "Kendrobindu"];
            const majors = [
                "Apparel Engineering",
                "Fabric Engineering",
                "Wet Process Engineering",
                "Yarn Engineering",
            ];
            const jobTitles = [
                "Software Engineer",
                "Quality Control Manager",
                "Senior Designer",
                "Operations Manager",
                "Textile Specialist",
                "Business Owner",
                "Freelance Designer",
                "Independent Consultant",
            ];
            return {
                name: `Alumnus ${i + 1}`,
                batch: batches[i % batches.length],
                majoredIn: majors[i % majors.length],
                currentJob: `${jobTitles[i % jobTitles.length]} at Company ${String.fromCharCode(
                    65 + (i % 26)
                )}`,
                contact: `alumnus${i + 1}@example.com`,
            };
        }),
    ];


    const [filteredAlumni, setFilteredAlumni] = useState(sampleData);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedSession, setSelectedSession] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 30;

    useEffect(() => {
        applyFilters();
    }, [selectedSession, selectedDepartment, searchQuery]);

    const applyFilters = () => {
        const filteredData = sampleData.filter((data) => {
            const isSessionMatched = selectedSession === "All" || selectedSession === "" || data.batch === selectedSession;
            const isDeptMatched = selectedDepartment ==="All" || selectedDepartment === "" || data.majoredIn === selectedDepartment;
            const isNameMatched = searchQuery === "" ||
                data.name.toLowerCase().includes(searchQuery.toLowerCase());

            return isSessionMatched && isDeptMatched && isNameMatched;
        });

        setFilteredAlumni(filteredData);
    }


    const onFilterChange = (field, value) => {
        if (field === "searchQuery") setSearchQuery(value);
        else if (field === "selectedSession") setSelectedSession(value);
        else if (field === "selectedDepartment") setSelectedDepartment(value);
    };
    const totalPages = Math.ceil(filteredAlumni.length / rowsPerPage);
    const currentAlumniData = filteredAlumni.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );


    return (
        <Container>
            <br/>
            {/* Search Bar */}
            <Filters
                searchQuery={searchQuery}
                selectedSession={selectedSession}
                selectedDepartment={selectedDepartment}
                onFilterChange={onFilterChange}
            />
            <Row>
                <Col>
                    <AlumniTable alumniData={currentAlumniData}/>

                    <PaginationControls
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AlumniDirectory;
