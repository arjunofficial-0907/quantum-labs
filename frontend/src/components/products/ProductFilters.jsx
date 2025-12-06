import React from "react";

const ProductFilters = ({ categories, selected, onChange }) => {
  return (
    <aside className="bg-white shadow p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
      <ul className="space-y-2">
        {categories?.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onChange(cat.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition
              ${selected === cat.id ? "bg-green-600 text-white" : "hover:bg-gray-100"}
            `}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProductFilters;
