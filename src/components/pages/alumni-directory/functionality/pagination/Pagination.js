import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({currentPage, totalPages, onPageChange}) => {

    return (
        <Pagination>
            <Pagination.First
                onClick={() => onPageChange(1)}
                disabled={currentPage == 1}
            />
            <Pagination.Prev
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage == 1}
            />

            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                );
            })}


            <Pagination.Next
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
            <Pagination.Last
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            />

        </Pagination>
    );
}

export default PaginationComponent;