import {Form} from "react-bootstrap";

const SearchBar = ({placeholder, value, onChange}) => {
    return (
        <Form.Control
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default SearchBar;