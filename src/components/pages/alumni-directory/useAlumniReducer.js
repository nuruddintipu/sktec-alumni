import {useEffect, useReducer} from "react";
import filteredAlumni from "./alumniFilterUtils";
import alumniReducer from "./alumniReducer";
import {getTotalPages, paginateData} from "./functionality/pagination/paginationUtils";

const useAlumniReducer = (initialState, allAlumni) => {


    const [state, dispatch] = useReducer(alumniReducer, initialState);


    const handleChange = (e) => {
        const {name, value} = e.target;

        dispatch({type: "SET_FILTER", payload: {field: name, value: value}});
        dispatch({type: "SET_PAGE", payload: {field: "currentPage", value: 1}});
    };

    const handlePaginationClick = (value) => {
        console.log("Current Page: ", value);
        dispatch({type: "SET_PAGE", payload: {field: "currentPage", value: value}});
    };

    useEffect(() => {
        if (allAlumni) {
            const filteredData = filteredAlumni(allAlumni, state.filters);
            const paginatedData = paginateData(filteredData, state.pagination.currentPage, 5);
            dispatch({ type: "SET_DATA", payload: paginatedData });
            const totalPages = getTotalPages(filteredData.length, 5);
            dispatch({type: "SET_PAGE", payload: {field: 'totalPages', value: totalPages }})
        }
    }, [allAlumni, state.filters]);

    useEffect(() => {
        if (allAlumni) {
            const filteredData = filteredAlumni(allAlumni, state.filters);
            const paginatedData = paginateData(filteredData, state.pagination.currentPage, 5);
            dispatch({type: "SET_DATA", payload: paginatedData});
        }
    }, [state.pagination.currentPage]);

    useEffect(() => {
        console.log("Updated state after filter change:", state);
    }, [state]);


    return {state, handlePaginationClick, handleChange};


};

export default useAlumniReducer;