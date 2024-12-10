import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationControls = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Pagination>
            {pageNumbers.map((page) => (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
        </Pagination>
    );
};

export default PaginationControls;
