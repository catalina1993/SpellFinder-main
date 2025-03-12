import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>
      <span className="page-number">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
