const RenderTableRow = ({ data, heading }) => {
    return (
        <>
            {data.map((item, index) => ( // Iterate through the data array
                <tr key={index}>
                    {Object.keys(heading).map((key) => ( // Use heading keys for column sequence
                        <td key={key}>
                            {item[key] || "N/A"} {/* Access object fields dynamically */}
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
};

export default RenderTableRow;
