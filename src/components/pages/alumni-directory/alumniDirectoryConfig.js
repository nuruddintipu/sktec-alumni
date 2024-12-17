

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
    loading: false,
    error: null
}