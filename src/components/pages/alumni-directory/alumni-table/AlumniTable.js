import React from "react";
import {Table} from "react-bootstrap";
import RenderTableHeadingRow from "./RenderTableHeadingRow";
import RenderTableRow from "./RenderTableRow";
import RenderEmptyRow from "./RenderEmptyRow";

const AlumniTable = ({data, ...tableCustomizationRules}) => {
    const heading = {
        name: "Name",
        batch: "Batch",
        department: "Department",
        currentJob: "Current Job",
        contact: "Contact"
    };


    return (
        <div className="alumni-directory">
            <Table striped bordered hover responsive {...tableCustomizationRules}>
                <RenderTableHeadingRow heading={heading}/>

                <tbody>

                {data.length > 0 ? <RenderTableRow data={data} heading={heading}/> : <RenderEmptyRow />}

                </tbody>
            </Table>
        </div>
    );
};

export default AlumniTable;
