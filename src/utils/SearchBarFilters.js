import {Form} from "react-bootstrap";

const SearchBarFilters = ({value, onChange}) => {
    return (
        <Form.Control
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default SearchBarFilters;