import React, {useEffect, useMemo, useState} from "react";
import {Col, Container, Form, Pagination, Row} from "react-bootstrap";
import Filters from "./Filters";
import PaginationControls from "./PaginationControls";
import AlumniTable from "./AlumniTable";
import useFetch from "../../utils/useFetch";

const AlumniDirectory = () => {
    const apiUrl = "https://7347c502-f63c-47d0-97fc-aec36d330913.mock.pstmn.io/alumni-data";
    const { data: allAlumni, loading, error } = useFetch(apiUrl);

    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedSession, setSelectedSession] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 30;


    const filteredAlumni = useMemo(()=>{
        return allAlumni.filter((data) => {
            const isSessionMatched = selectedSession === "All" || selectedSession === "" || data.batch === selectedSession;
            const isDeptMatched = selectedDepartment ==="All" || selectedDepartment === "" || data.majoredIn === selectedDepartment;
            const isNameMatched = searchQuery === "" ||
                data.name.toLowerCase().includes(searchQuery.toLowerCase());

            return isSessionMatched && isDeptMatched && isNameMatched;
        });
    }, [allAlumni, selectedSession, selectedDepartment, searchQuery]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const totalPages = Math.ceil(filteredAlumni.length / rowsPerPage);
    const currentAlumniData = filteredAlumni.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );


    const onFilterChange = (field, value) => {
        if (field === "searchQuery") setSearchQuery(value);
        else if (field === "selectedSession") setSelectedSession(value);
        else if (field === "selectedDepartment") setSelectedDepartment(value);
    };


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
