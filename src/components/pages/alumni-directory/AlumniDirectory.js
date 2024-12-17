import React from "react";
import {Container} from "react-bootstrap";
import FilterComponents from "./filter-components/FilterComponents";
import LoadingSpinner from "../../../animations/LoadingSpinner";
import ButtonWithToggle from "../../common/button/ButtonWithToggle";
import useFetch from "../../../services/api/useFetch";
import useAlumniReducer from "./useAlumniReducer";
import AlumniTable from "./alumni-table/AlumniTable";
import {initialState} from "./alumniReducer";
import PaginationComponent from "./functionality/pagination/Pagination";


const AlumniDirectory = () => {
    const apiUrl = "https://7347c502-f63c-47d0-97fc-aec36d330913.mock.pstmn.io/alumni-data";
    const {data: allAlumni, loading, error} = useFetch(apiUrl);

    const {state,handlePaginationClick, handleChange} = useAlumniReducer(initialState, allAlumni);


    if (loading || error) {
        return <LoadingSpinner loading={loading} error={error}/>;
    }

    return (
        <Container>
            <br/>
            <ButtonWithToggle
                buttonText={"Filter"}
                child={<FilterComponents state={state} handleChange={(e)=>handleChange(e)}/>}
            />
            <AlumniTable data={state.data}/>
            <PaginationComponent
                labels={{ first: "<<", prev: "<", next: ">", last: ">>" }}
                currentPage={state.pagination.currentPage}
                totalPages={state.pagination.totalPages}
                onPageChange={handlePaginationClick}
            />
        </Container>
    );
};

export default AlumniDirectory;
