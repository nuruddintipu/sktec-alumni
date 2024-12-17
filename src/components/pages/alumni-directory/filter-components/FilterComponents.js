import {Row} from "react-bootstrap";
import React from "react";
import FilterTextBarContainer from "./FilterTextBarContainer";
import FilterDropdownBarContainer from "./FilterDropdownBarContainer";
import {filterDropdownConfigs} from "./filterDropdownConfigs";

const FilterComponents = ({state, handleChange, className, style, ...rest}) => {
    return (
        <div>
            <Row className={`mb-3 ${className}`} style={style} {...rest}>
                <FilterTextBarContainer state={state} handleChange={handleChange}/>

                <FilterDropdownBarContainer state={state} handleChange={handleChange}  filterDropdownConfigs={filterDropdownConfigs}/>
            </Row>
        </div>
    );

};

export default FilterComponents;