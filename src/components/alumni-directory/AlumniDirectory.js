import React from "react";
import {Container} from "react-bootstrap";
import FilterComponents from "./filters/FilterComponents";
import AlumniTableContainer from "./alumni-table/AlumniTableContainer";
import {useDirectoryContext} from "./DirectoryContext";
import LoadingSpinner from "../../animations/LoadingSpinner";


const AlumniDirectory = () => {
    const {loading, error} = useDirectoryContext();

    if (loading || error) {
        return <LoadingSpinner />;
    }

    return (
        <Container>
            <br/>
            <FilterComponents />
            <AlumniTableContainer />
        </Container>
    );
};

export default AlumniDirectory;
