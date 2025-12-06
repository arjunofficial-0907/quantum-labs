import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
