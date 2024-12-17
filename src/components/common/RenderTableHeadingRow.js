const RenderTableHeadingRow = ({heading}) => {
    return (
        <thead>
        <tr>
            {Object.keys(heading).map((key) =>(
                <th key={key}>
                    {heading[key]}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default RenderTableHeadingRow;