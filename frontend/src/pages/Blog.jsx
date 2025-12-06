import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const mockBlogs = [
  {
    id: 1,
    date: "06",
    month: "JUN",
    category: "CYBERSECURITY",
    title: "FORENSIC-CYBER CRIMINALS EXPOSED",
    description:
      "Digital India opens a vast trove of opportunities for young IT brains as cybersecurity becomes a major challenge...",
    image:
      "https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    date: "06",
    month: "JUN",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "ARTIFICIAL INTELLIGENCE – WILL MACHINES TAKE OVER?",
    description:
      "Are we heading for another cultural shift where unemployment increases due to advancements in AI and automation...",
    image:
      "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    date: "06",
    month: "JUN",
    category: "ANDROID",
    title: "Android – A Future of Infinite Possibilities",
    description:
      "Since 2008 we have witnessed Android change millions of lives and reshape mobile technologies worldwide...",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBlogs(mockBlogs); // Replace with API later
  }, []);

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="blog banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Blog</h1>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-lg shadow-sm hover:shadow-xl transition bg-white"
            >
              {/* Card Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover rounded-t-md"
                />

                {/* Date badge */}
                <div className="absolute left-4 -bottom-6 bg-white shadow-md rounded-md px-3 py-2 text-center leading-4 w-14 font-bold">
                  <span className="text-xl">{blog.date}</span>
                  <br />
                  <span className="text-[11px] font-semibold">{blog.month}</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pt-8 pb-6">
                <div className="mb-2">
                  <span className="bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 leading-6 hover:text-green-600 cursor-pointer">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2 mb-5 line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="text-green-600 font-bold text-sm hover:underline tracking-wide"
                >
                  CONTINUE READING
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
