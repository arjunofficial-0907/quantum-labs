// src/components/home/Hero.jsx
import React from "react";
import { Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const browseCategories = [
  { name: "Python", slug: "python" },
  { name: "Java", slug: "java" },
  { name: "Machine Learning", slug: "machine-learning" },
  { name: "Artificial Intelligence", slug: "artificial-intelligence" },
  { name: "Web Development", slug: "web-development" },
  { name: "App Development", slug: "app-development" },
];

const Hero = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (cat) => {
    navigate(`/shop?category=${cat.slug}`);
  };

  return (
    <section className="relative bg-linear-to-br from-green-50 via-white to-blue-50 py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT BROWSE CATEGORIES PANEL */}
          <div className="md:col-span-1">
            <div className="bg-green-600 text-white font-semibold px-5 py-4 rounded-t-lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="text-xl">☰</span> BROWSE CATEGORIES
              </span>
            </div>

            <div className="bg-white border border-green-200 rounded-b-lg shadow-md divide-y">
              {browseCategories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(item)}
                  className="w-full text-left px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="md:col-span-3 flex flex-col md:flex-row items-center gap-10">

            {/* LEFT TEXT BLOCK */}
            <div className="flex-1">
              <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                🚀 100+ Ready-to-Use Final Year Projects
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                Build Your Career with Premium{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-blue-600">
                  Academic Projects
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Industry-quality projects in Java, Python, MERN Stack, IoT & AI/ML.
                Complete source code, documentation & support included.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/shop"
                  className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-green-700 transition-all"
                >
                  Browse Projects
                </Link>

                <button className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-semibold text-lg hover:border-green-600 hover:text-green-600 transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 relative">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=520&fit=crop"
                  alt="Developer workspace"
                  className="rounded-xl w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl border px-5 py-3 rounded-xl flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-lg">4.8/5.0</span>
                <span className="text-gray-500 text-sm">(500+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
