import React from "react";
import AlumniDirectory from "./AlumniDirectory";
import useFetch from "../../../services/api/useFetch";
import useAlumniReducer, { initialState } from "./useAlumniReducer";

// API URL configuration (externalized)
const API_URL = "https://7347c502-f63c-47d0-97fc-aec36d330913.mock.pstmn.io/alumni-data";

const AlumniDirectoryContainer = () => {
    return (
        <AlumniDirectory
            fetchAlumniData={useFetch}
            reducer={(allAlumni) => useAlumniReducer(initialState, allAlumni)}
            apiUrl={API_URL}
        />
    );
};

export default AlumniDirectoryContainer;
