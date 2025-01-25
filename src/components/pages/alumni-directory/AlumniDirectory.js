import React from 'react';
import { Container } from 'react-bootstrap';
import FilterComponents from './filter-components/FilterComponents';
import ButtonWithToggle from '../../common/button/ButtonWithToggle';
import useAlumniReducer from './hooks/useAlumniReducer';
import AlumniTable from './alumni-table/AlumniTable';
import { initialState } from './hooks/alumniReducer';
import PaginationComponent from '../../common/pagination/Pagination';
import { exampleAlumni } from '../../../utils/exampleAlumni';

const AlumniDirectory = () => {

    const { state, handlePaginationClick, handleChange } = useAlumniReducer(initialState, exampleAlumni);

    return (
        <Container>
            <br />
            <ButtonWithToggle
                buttonText={'Filter'}
                child={<FilterComponents state={state} handleChange={(e) => handleChange(e)} />}
            />
            <AlumniTable data={state.data} />
            <PaginationComponent
                labels={{ first: '<<', prev: '<', next: '>', last: '>>' }}
                currentPage={state.pagination.currentPage}
                totalPages={state.pagination.totalPages}
                onPageChange={handlePaginationClick}
            />
        </Container>
    );
};

export default AlumniDirectory;
