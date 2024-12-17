import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

const PaginationComponent = ({
                                 currentPage,
                                 totalPages,
                                 onPageChange,
                                 visiblePageCount = 5,
                                 labels = { first: "First", prev: "Prev", next: "Next", last: "Last" },
                                 className = "",
                                 size,
                                 style = {}
                             }) => {


    // Helper to calculate the page range
    const getPageRange = () => {
        const half = Math.floor(visiblePageCount / 2);
        let start = Math.max(currentPage - half, 1);
        let end = Math.min(start + visiblePageCount - 1, totalPages);

        if (end - start + 1 < visiblePageCount) {
            start = Math.max(end - visiblePageCount + 1, 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };



    return (
        <Pagination className={className} size={size} style={style}>
            {/* First Page */}
            <Pagination.First
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                {labels.first}
            </Pagination.First>

            {/* Previous Page */}
            <Pagination.Prev
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {labels.prev}
            </Pagination.Prev>

            {/* Page Numbers */}
            {getPageRange().map((page) => (
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Pagination.Item>
            ))}

            {/* Next Page */}
            <Pagination.Next
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {labels.next}
            </Pagination.Next>

            {/* Last Page */}
            <Pagination.Last
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                {labels.last}
            </Pagination.Last>
        </Pagination>
    );
};

PaginationComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    visiblePageCount: PropTypes.number,
    labels: PropTypes.shape({
        first: PropTypes.string,
        prev: PropTypes.string,
        next: PropTypes.string,
        last: PropTypes.string,
    }),
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    style: PropTypes.object,
};

PaginationComponent.defaultProps = {
    visiblePageCount: 5,
    labels: { first: "First", prev: "Prev", next: "Next", last: "Last" },
    className: "",
    size: undefined,
    style: {},
};

export default PaginationComponent;
