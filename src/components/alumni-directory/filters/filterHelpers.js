export const filterAlumni = (allAlumni, filters) => {
    const {searchQuery, selectedSession, selectedDepartment} = filters;
    return allAlumni.filter((data) => {
        const isSessionMatched =
            selectedSession === "All" || selectedSession === "" || data.batch === selectedSession;
        const isDeptMatched =
            selectedDepartment === "All" || selectedDepartment === "" || data.majoredIn === selectedDepartment;
        const isNameMatched =
            searchQuery === "" ||
            data.name.toLowerCase().includes(searchQuery.toLowerCase());

        return isSessionMatched && isDeptMatched && isNameMatched;
    });
};
