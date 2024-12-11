import {Form} from "react-bootstrap";

const DropdownFilters = ({value, options, onChange, placeholder}) => {
    return (
        <Form.Select value={value || ""} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>{placeholder}</option>
            {options.map((option, index) =>(
                <option key = {index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Form.Select>
    );
};

export default DropdownFilters;