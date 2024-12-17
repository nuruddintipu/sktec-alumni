import {Col, Row} from "react-bootstrap";
import DropdownBar from "../../../common/DropdownBar";
import React from "react";
import {includeAllDeptOptions, includeAllBatch} from "../../../common/dropdownOptions";
import InputField from "../../../common/InputField";

const FilterComponents = ({state, handleChange}) => {

    const departmentOptions = includeAllDeptOptions(true);
    const batchOptions = includeAllBatch(true);
    const dropdownConfigs = [
        {
            name: "batch",
            value: "",
            options: batchOptions,
            field: "selectedSession",
            placeholder: "By Batch",
        },
        {
            name: "department",
            value: "",
            options: departmentOptions,
            field: "selectedDepartment",
            placeholder: "By Department",
        },
    ];


    return (
        <div>
            <Row className="mb-3">
                <Col md={4}>
                    <InputField
                        placeholder={"By Name"}
                        onChange={(e) => handleChange(e)}
                        name={"name"}
                        value={state.filters.name}
                    />
                </Col>
                {
                    dropdownConfigs.map(({name, value, options, field, placeholder}, index) => (
                        <Col md={4} key={index}>
                            <DropdownBar
                                value={state.filters[name]}
                                options={options}
                                onChange={(e) => handleChange(e)}
                                placeholder={placeholder}
                                name={name}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );

};

export default FilterComponents;