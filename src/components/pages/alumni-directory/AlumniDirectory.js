import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import FilterComponents from "./filter-components/FilterComponents";
import AlumniTableContainer from "./alumni-table/AlumniTableContainer";
import {useDirectoryContext} from "../../../context/DirectoryContext";
import LoadingSpinner from "../../../animations/LoadingSpinner";
import ButtonWithToggle from "../../common/button/ButtonWithToggle";


const AlumniDirectory = () => {
    const {loading, error} = useDirectoryContext();

    if (loading || error) {
        return <LoadingSpinner/>;
    }

    return (
        <Container>
            <br/>
            <ButtonWithToggle
                buttonText={"Filter"}
                child={<FilterComponents/>}
            />
            <AlumniTableContainer/>
        </Container>
    );
};

export default AlumniDirectory;
