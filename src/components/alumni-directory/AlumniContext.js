import {createContext, useContext, useMemo, useState} from "react";

const DataContext = createContext();

export const DataProvider = ({children, allAlumni}) => {
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [selectedSession, setSelectedSession] = useState("");
    const [searchQuery, setSearchQuery] = useState("");


    const filteredAlumni = useMemo(() => {
        return allAlumni.filter((data) => {
            const isSessionMatched = selectedSession === "All" || selectedSession === "" || data.batch === selectedSession;
            const isDeptMatched = selectedDepartment === "All" || selectedDepartment === "" || data.majoredIn === selectedDepartment;
            const isNameMatched = searchQuery === "" ||
                data.name.toLowerCase().includes(searchQuery.toLowerCase());

            return isSessionMatched && isDeptMatched && isNameMatched;
        });
    }, [allAlumni, selectedSession, selectedDepartment, searchQuery]);

    return (
        <DataContext.Provider
            value={{
                filteredAlumni,
                setSearchQuery,
                setSelectedSession,
                setSelectedDepartment
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);