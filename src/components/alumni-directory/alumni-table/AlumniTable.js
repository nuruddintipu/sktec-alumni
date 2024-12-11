import React from "react";
import { Table } from "react-bootstrap";
import {useAlumniTableContext} from "./AlumniTableContext";


const AlumniTable = () => {
    const {alumniDataOnCurrentPage} = useAlumniTableContext();
    return (
        <div className="alumni-directory">
            <h4 className="text-center mb-3">Alumni Directory</h4>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Majored In</th>
                    <th>Current Job</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                {alumniDataOnCurrentPage.length > 0 ? (
                    alumniDataOnCurrentPage.map((alumni, index) => (
                        <tr key={index}>
                            <td>{alumni.name}</td>
                            <td>{alumni.batch}</td>
                            <td>{alumni.majoredIn}</td>
                            <td>{alumni.currentJob}</td>
                            <td>{alumni.contact}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center">
                            No alumni data available.
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default AlumniTable;
