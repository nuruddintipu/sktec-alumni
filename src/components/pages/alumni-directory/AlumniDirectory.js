import React from "react";
import {Container} from "react-bootstrap";
import FilterComponents from "../filter-components/FilterComponents";
import AlumniTableContainer from "./alumni-table/AlumniTableContainer";
import {useDirectoryContext} from "../../../context/DirectoryContext";
import LoadingSpinner from "../../../animations/LoadingSpinner";
import ToggleDisplay from "../../../utils/ToggleDisplay";


const AlumniDirectory = () => {
    const {loading, error} = useDirectoryContext();

    if (loading || error) {
        return <LoadingSpinner />;
    }

    return (
        <Container>
            <br/>
            <ToggleDisplay
                buttonText={"Filter"}
                child={<FilterComponents/>}
            >

            </ToggleDisplay>
            <AlumniTableContainer />
        </Container>
    );
};

export default AlumniDirectory;
