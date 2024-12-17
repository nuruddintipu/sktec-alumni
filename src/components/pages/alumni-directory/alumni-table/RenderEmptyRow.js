import React from "react";

const RenderEmptyRow = ({colSpan="5", className, style}) => {
    return (
        <tr>
            <td
                colSpan={colSpan}
                className={`text-center ${className}`}
                style={style}
            >
                No Alumni Data Avaiable.
            </td>
        </tr>
    );
};

export default RenderEmptyRow;