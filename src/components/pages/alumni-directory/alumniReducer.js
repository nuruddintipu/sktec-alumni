

export const initialState = {
    filters: {
        name: "",
        batch: "",
        department: ""
    },
    pagination: {
        currentPage: 1,
        totalPages: 0
    },
    data: [],
    filteredData: [],
}


const alumniReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                filters: {...state.filters, [action.payload.field]: action.payload.value},
                pagination: {...state.pagination, currentPage: 1}
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
        case 'reset':
            return action.initialState;
        default:
            return state;
    }

};

export default alumniReducer;