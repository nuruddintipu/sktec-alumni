import {createContext, useContext, useState} from "react";
import {useDirectoryContext} from "./DirectoryContext";

const AlumniTableContext = createContext();


export const AlumniTableDataProvider = ({children}) => {
    const {filteredAlumni} = useDirectoryContext();

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;

    const totalPage = Math.ceil(filteredAlumni.length / rowsPerPage);

    const alumniDataOnCurrentPage = filteredAlumni.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );


    return (
        <AlumniTableContext.Provider value={{
            alumniDataOnCurrentPage,
            totalPage,
            currentPage,
            setCurrentPage
        }}
        >
            {children}
        </AlumniTableContext.Provider>
    );
};

export const useAlumniTableContext = () => useContext(AlumniTableContext);
