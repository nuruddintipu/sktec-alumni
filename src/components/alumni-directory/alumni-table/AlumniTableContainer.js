import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import AlumniTable from "./AlumniTable";
import PaginationControls from "./PaginationControls";
import PropTypes from "prop-types";

const AlumniTableContainer = ({alumniData}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 30;


    const totalPages = Math.ceil(alumniData.length / rowsPerPage);
    const currentAlumniData = alumniData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
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
    );

};

AlumniTableContainer.propTypes = {
    alumniData: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default AlumniTableContainer;