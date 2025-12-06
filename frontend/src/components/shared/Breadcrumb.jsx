import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600 py-4 flex items-center space-x-1">
      {items.map((item, index) => (
        <span key={index} className="flex items-center space-x-1">
          <a
            href={item.href}
            className={`hover:text-green-600 ${
              index === items.length - 1 ? "font-semibold text-green-700" : ""
            }`}
          >
            {item.label}
          </a>
          {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
