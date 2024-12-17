import InputField from "../../../common/InputField";
import {Col} from "react-bootstrap";
import React from "react";

const FilterTextBarContainer = ({state, handleChange, md=4, className="", style={} }) => {
    return (
        <Col md={md} className={className} style={style}>
            <InputField
                placeholder={"By Name"}
                onChange={(e) => handleChange(e)}
                name={"name"}
                value={state.filters.name}
            />
        </Col>
    );
};

export default FilterTextBarContainer;