const filteredAlumni = (alumniData, filters) => {
    const isMatched = (alumniValue, filterValue) =>
        filterValue === "All" || filterValue === "" || alumniValue === filterValue;

    return alumniData.filter((data) => {
        return (
            isMatched(data.batch, filters.batch) &&
            isMatched(data.majoredIn, filters.department) &&
            (filters.name === "" ||
                data.name.toLowerCase().includes(filters.name.toLowerCase()))
        );
    });
};
export default filteredAlumni;