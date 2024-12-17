import {useEffect, useReducer} from "react";
import filteredAlumni from "./filterAlumniData";

const useAlumniReducer = (initialState, allAlumni) => {

    const alumniReducer = (state, action) => {
        switch (action.type) {
            case "SET_FILTER":
                return {
                    ...state,
                    filters: {...state.filters, [action.payload.field]: action.payload.value},
                };
            case "SET_PAGE":
                return {
                    ...state,
                    pagination: {...state.pagination, [action.payload.field]: action.payload.value},
                };
            case "SET_DATA":
                return {
                    ...state,
                    data: action.payload,
                    filteredData: action.payload,
                    loading: false
                };
            case "SET_LOADING":
                return {
                    ...state,
                    loading: true,
                };
            case "SET_ERROR":
                return {
                    ...state,
                    error: action.payload, loading: false
                };
            case 'reset':
                return initialState;
            default:
                return state;
        }

    };

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