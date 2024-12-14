import {Form} from "react-bootstrap";

const DropdownBar = ({value, options, onChange=()=>{}, placeholder}) => {
    return (
        <Form.Select style={{ color: "grey" }} value={value || ""} onChange={(e) => onChange(e.target.value)}>
            <option style={{color: 'black'}} value="" disabled>{placeholder}</option>
            {options.map((option, index) =>(
                <option key = {index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Form.Select>
    );
};

export default DropdownBar;