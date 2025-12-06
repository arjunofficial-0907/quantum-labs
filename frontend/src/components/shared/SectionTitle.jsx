import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
