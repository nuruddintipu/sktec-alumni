import {useMemo} from "react";

export const useGeneratePageNumbers = (currentPage, totalPages) => {
    return useMemo(() => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);

        const pages = [];
        if (start > 1) pages.push(1, "...");
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages) pages.push("...", totalPages);

        return pages;
    }, [totalPages, currentPage]);
};



export const getTotalPages = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems/itemsPerPage);
}

export const paginateData = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex =  startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
}

