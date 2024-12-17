import React from "react";
import {Col, Row} from "react-bootstrap";
import AlumniTable from "./AlumniTable";
import PaginationControls from "./pagination/PaginationControls";
import {AlumniTableDataProvider} from "../../../../context/AlumniTableContext";

const AlumniTableContainer = ({data}) => {
    return (
        <Row>
            <Col>
                <AlumniTableDataProvider>
                    <AlumniTable data={data} />
                    <PaginationControls />
                </AlumniTableDataProvider>
            </Col>
        </Row>
    );

};

export default AlumniTableContainer;