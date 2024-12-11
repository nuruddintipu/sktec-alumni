import { useMemo } from "react";

export const usePagination = (totalPage, currentPage) => {
    return useMemo(() => {
        if (totalPage <= 5) return Array.from({ length: totalPage }, (_, i) => i + 1);

        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPage, currentPage + 2);

        const pages = [];
        if (start > 1) pages.push(1, "...");
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPage) pages.push("...", totalPage);

        return pages;
    }, [totalPage, currentPage]);
};
