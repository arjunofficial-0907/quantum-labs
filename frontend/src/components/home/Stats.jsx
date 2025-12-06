import React from "react";
import { TrendingUp, Star, Layers } from "lucide-react";

const Stats = () => {
  const stats = [
    { label: "Projects Sold", value: "500+", icon: TrendingUp },
    { label: "Happy Customers", value: "350+", icon: Star },
    { label: "Categories", value: "8+", icon: Layers },
  ];

  return (
    <section className="bg-white py-16 border-t border-b fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group transition transform hover:-translate-y-1 hover:shadow-xl duration-300 rounded-xl p-6 border border-gray-100 bg-white"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition">
                  <stat.icon className="w-7 h-7 text-green-600 group-hover:text-white transition" />
                </div>
              </div>

              <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
