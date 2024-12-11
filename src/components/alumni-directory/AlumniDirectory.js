import React, {useMemo, useState} from "react";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import useFetch from "../../utils/useFetch";
import {filterAlumni} from "./filters/filterHelpers";
import FilterContainer from "./filters/FilterContainer";
import AlumniTableContainer from "./alumni-table/AlumniTableContainer";



const AlumniDirectory = () => {
    const apiUrl = "https://7347c502-f63c-47d0-97fc-aec36d330913.mock.pstmn.io/alumni-data";
    const {data: allAlumni, loading, error} = useFetch(apiUrl);

    const [filters, setFilters] = useState({
        searchQuery: "",
        selectedSession: "",
        selectedDepartment: ""
    });


    const filteredAlumni = useMemo(() => { return filterAlumni(allAlumni, filters);}, [allAlumni, filters]);


    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Row className="w-100">
                    <Col className="text-center">
                        <Spinner animation="border" variant="primary"/>
                    </Col>
                </Row>
            </Container>
        )
    }
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            <br/>
            <FilterContainer filters={filters} setFilters={setFilters} />
            <AlumniTableContainer alumniData={filteredAlumni}/>
        </Container>
    );
};

export default AlumniDirectory;
