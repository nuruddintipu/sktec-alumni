import {useMemo} from "react";

export const useFilterAlumni = (allAlumni, filters) => {
    const matchesFilter = (fieldValue, filterValue) =>
        filterValue === "All" || filterValue === "" || fieldValue === filterValue;

    return useMemo(() => {
        return allAlumni.filter((data) => {
            return (
                matchesFilter(data.batch, filters.selectedSession) &&
                matchesFilter(data.majoredIn, filters.selectedDepartment) &&
                (filters.searchQuery === "" ||
                    data.name.toLowerCase().includes(filters.searchQuery.toLowerCase()))
            );
        });
    }, [allAlumni, filters]);
};