import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CategoryMenu = ({ categories = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Category");
  const menuRef = useRef(null);

  const handleSelect = (name) => {
    setSelected(name);
    setOpen(false);
    if (onSelect) onSelect(name);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="border border-gray-300 px-4 py-2 bg-white hover:bg-gray-50 flex items-center space-x-2 min-w-[180px] justify-between text-sm font-medium text-gray-700 rounded-lg shadow-sm transition"
      >
        <span>{selected}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-xl rounded-lg mt-1 z-50 max-h-64 overflow-y-auto animate-fadeIn">
          {categories.length > 0 ? (
            categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => handleSelect(cat.name)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm text-gray-800 flex items-center space-x-2 transition"
              >
                {cat.icon && <span className="text-lg">{cat.icon}</span>}
                <span>{cat.name}</span>
              </button>
            ))
          ) : (
            <p className="p-4 text-center text-gray-500 text-sm">
              No categories found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
