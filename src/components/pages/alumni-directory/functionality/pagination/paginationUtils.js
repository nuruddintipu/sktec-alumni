export const getTotalPages = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems/itemsPerPage);
}

export const paginateData = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex =  startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
}