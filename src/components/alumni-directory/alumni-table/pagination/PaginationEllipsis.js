import {Pagination} from "react-bootstrap";

const PaginationButton = ({ page, isActive, onClick }) => (
    <Pagination.Item
        active={isActive}
        onClick={onClick}
        aria-label={`Go to page ${page}`}
        aria-current={isActive ? "page" : undefined}
    >
        {page}
    </Pagination.Item>
);

const PaginationEllipsis = ({ key }) => <Pagination.Ellipsis key={key} />;
