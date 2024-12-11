import React from "react";
import {Col, Row} from "react-bootstrap";
import AlumniTable from "./AlumniTable";
import PaginationControls from "./pagination/PaginationControls";
import {AlumniTableDataProvider} from "./AlumniTableContext";

const AlumniTableContainer = () => {
    return (
        <Row>
            <Col>
                <AlumniTableDataProvider>
                    <AlumniTable />
                    <PaginationControls />
                </AlumniTableDataProvider>
            </Col>
        </Row>
    );

};

export default AlumniTableContainer;