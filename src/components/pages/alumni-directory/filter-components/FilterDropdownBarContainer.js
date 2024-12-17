import {Col} from "react-bootstrap";
import React from "react";
import DropdownBar from "../../../common/DropdownBar";

const FilterDropdownBarContainer = ({state, handleChange, md=4, className="", style={} ,filterDropdownConfigs, ...rest}) => {
    return (
        <>
            {
                filterDropdownConfigs.map(({name, value, options, field, placeholder}, index) => (
                    <Col md={md} key={index} className={className} style={style} {...rest} >
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
        </>
    );
};

export default FilterDropdownBarContainer;