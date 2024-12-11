import React from "react";
import {Col, Pagination, Row} from "react-bootstrap";
import {useAlumniTableContext} from "../../../../../context/AlumniTableContext";
import {usePagination} from "../../../../../hooks/usePagination";

const PaginationControls = () => {
    const {totalPage, currentPage, setCurrentPage} = useAlumniTableContext();

    const displayedPages = usePagination(totalPage, currentPage);
    if (totalPage <= 1) return null;

    return (
        <Row>
            <Col>
                <small>Showing Page</small>
                <Pagination>
                    <Pagination.Prev
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        aria-label="Previous page"
                    />
                    {displayedPages.map((page, index) =>
                        typeof page === "number" ? (
                            <Pagination.Item
                                key={page}
                                active={page === currentPage}
                                onClick={() => setCurrentPage(page)}
                                aria-label={`Go to page ${page}`}
                                aria-current={page === currentPage ? "page" : undefined}
                            >
                                {page}
                            </Pagination.Item>
                        ) : (
                            <Pagination.Ellipsis key={`ellipsis-${index}`} />
                        )
                    )}
                    <Pagination.Next
                        disabled={currentPage === totalPage}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
                        aria-label="Next page"
                    />
                </Pagination>
            </Col>
        </Row>
    );
};

export default PaginationControls;
