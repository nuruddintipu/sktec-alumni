import React from "react";
import { Table } from "react-bootstrap";


const AlumniTable = ({data}) => {
    return (
        <div className="alumni-directory">
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
                {data.length > 0 ? (
                    data.map((alumni, index) => (
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
