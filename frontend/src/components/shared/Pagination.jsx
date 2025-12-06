import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <button
        className="px-3 py-2 border rounded-md disabled:opacity-40 hover:bg-gray-200"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-md border ${
            currentPage === i + 1
              ? "bg-green-600 text-white"
              : "hover:bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-3 py-2 border rounded-md disabled:opacity-40 hover:bg-gray-200"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
