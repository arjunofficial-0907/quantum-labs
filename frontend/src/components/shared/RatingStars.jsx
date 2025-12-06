import React from "react";
import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));

  return (
    <div className="flex items-center">
      {stars.map((filled, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            filled ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default RatingStars;
