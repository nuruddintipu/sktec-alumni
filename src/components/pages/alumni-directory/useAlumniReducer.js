import {useEffect, useReducer} from "react";
import filteredAlumni from "./alumniFilterUtils";
import alumniReducer from "./alumniReducer";

const useAlumniReducer = (initialState, allAlumni) => {


    const [state, dispatch] = useReducer(alumniReducer, initialState);


    const handleChange = (e) => {
        const {name, value} = e.target;

        dispatch({type: "SET_FILTER", payload: {field: name, value: value}});
    };

    useEffect(() => {
        if (allAlumni) {
            const filteredData = filteredAlumni(allAlumni, state.filters);
            dispatch({ type: "SET_DATA", payload: filteredData });
        }
    }, [allAlumni, state.filters]);

    useEffect(() => {
        console.log("Updated state after filter change:", state);
    }, [state.filteredData]);


    return {state, alumniReducer, handleChange};


};

export default useAlumniReducer;