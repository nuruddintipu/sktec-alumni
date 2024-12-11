import React from "react";
import {Container} from "react-bootstrap";
import FilterContainer from "./filters/FilterContainer";
import AlumniTableContainer from "./alumni-table/AlumniTableContainer";
import {useDirectoryContext} from "./DirectoryContext";
import LoadingSpinner from "../../animations/LoadingSpinner";


const AlumniDirectory = () => {
    const {filteredAlumni, loading, error} = useDirectoryContext();

    if (loading || error) {
        return <LoadingSpinner />;
    }

    return (
        <Container>
            <br/>
            <FilterContainer />
            <AlumniTableContainer />
        </Container>
    );
};

export default AlumniDirectory;
