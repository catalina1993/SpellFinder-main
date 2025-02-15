import React, { useState } from "react";
import "../styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPageNumbersToShow = 3; // Show three pages at a time
  const [activeButton, setActiveButton] = useState(null);

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (endPage - startPage < maxPageNumbersToShow - 1) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (page, buttonType) => {
    setActiveButton(buttonType); // Set the clicked button as active
    onPageChange(page);

    setTimeout(() => {
      setActiveButton(null); // Reset after a short delay
    }, 200); // Adjust delay if needed
  };

  return (
    <div className="pagination-container">
      <button
        className={`pagination-button ${
          activeButton === "prev" ? "clicked" : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1, "prev")}
      >
        Previous
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`page-number ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={`pagination-button ${
          activeButton === "next" ? "clicked" : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1, "next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
