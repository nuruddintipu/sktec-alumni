import {createContext, useContext, useMemo, useState} from "react";
import useFetch from "../../utils/api/useFetch";

const DirectoryContext = createContext();

export const DirectoryProvider = ({children}) => {

    const apiUrl = "https://7347c502-f63c-47d0-97fc-aec36d330913.mock.pstmn.io/alumni-data";
    const {data: allAlumni, loading, error} = useFetch(apiUrl);

    const [filters, setFilters] = useState({
        searchQuery: "",
        selectedSession: "",
        selectedDepartment: ""
    });


    const filteredAlumni = useMemo(() => {
        return allAlumni.filter((data) => {
            const isSessionMatched =
                filters.selectedSession === "All" || filters.selectedSession === "" || data.batch === filters.selectedSession;
            const isDeptMatched =
                filters.selectedDepartment === "All" || filters.selectedDepartment === "" || data.majoredIn === filters.selectedDepartment;
            const isNameMatched =
                filters.searchQuery === "" ||
                data.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

            return isSessionMatched && isDeptMatched && isNameMatched;
        });
    }, [allAlumni, filters]);


    const onFilterChange = (field, value) => {
        setFilters((prev) => ({...prev, [field]: value}));
    };

    

    return (
        <DirectoryContext.Provider value={{filteredAlumni, filters, setFilters, loading, error , onFilterChange}}>
            {children}
        </DirectoryContext.Provider>
    );

};

export const useDirectoryContext =() => useContext(DirectoryContext);