import {Form} from "react-bootstrap";

const DropdownBar = ({ label, name, value, options, onChange=()=>{}, placeholder, style={}, className="", ...rest}) => {
    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Form.Select
                className={className}
                style={{ color: "grey", ...style}}
                value={value || ""}
                name={name}
                onChange={(e) => {
                    onChange(e);
                    e.target.style.color = e.target.value === "" ? 'grey' : 'black';
                }}
                {...rest}
            >
                <option  value="" disabled>{placeholder}</option>
                {options.map((option, index) =>(
                    <option key = {index}  style={{color: 'black'}} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Select>
        </>
    );
};

export default DropdownBar;