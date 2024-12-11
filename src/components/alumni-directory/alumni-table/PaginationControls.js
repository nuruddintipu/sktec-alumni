import React from "react";
import {Col, Pagination, Row} from "react-bootstrap";

const PaginationControls = ({totalPages, currentPage, onPageChange}) => {

    const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);

    return (
        <Row>
            <Col>
                <small>Showing Page</small>
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
            </Col>
        </Row>
    );
};

export default PaginationControls;
