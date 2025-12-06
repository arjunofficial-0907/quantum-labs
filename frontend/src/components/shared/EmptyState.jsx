import React from "react";
import { Inbox } from "lucide-react";

const EmptyState = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <Inbox className="w-16 h-16 text-gray-400 mb-4" />
      <p className="text-gray-600 text-lg">{message || "No results found"}</p>
    </div>
  );
};

export default EmptyState;
