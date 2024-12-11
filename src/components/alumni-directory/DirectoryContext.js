import {createContext, useContext, useMemo, useState} from "react";
import useFetch from "../../utils/api/useFetch";
import {useFilterAlumni} from "../../utils/hooks/useFilterAlumni";

const DirectoryContext = createContext();

export const DirectoryProvider = ({children}) => {

    const apiUrl = "https://7347c502-f63c-47d0-97fc-aec36d330913.mock.pstmn.io/alumni-data";
    const {data: allAlumni, loading, error} = useFetch(apiUrl);

    const [filters, setFilters] = useState({
        searchQuery: "",
        selectedSession: "",
        selectedDepartment: ""
    });


    const filteredAlumni = useFilterAlumni(allAlumni, filters);

    return (
        <DirectoryContext.Provider
            value={{
                filteredAlumni,
                filters,
                setFilters,
                loading,
                error,
                onFilterChange: (field, value) =>
                    setFilters((prev) => ({ ...prev, [field]: value })),
            }}
        >
            {children}
        </DirectoryContext.Provider>
    );

};

export const useDirectoryContext = () => useContext(DirectoryContext);