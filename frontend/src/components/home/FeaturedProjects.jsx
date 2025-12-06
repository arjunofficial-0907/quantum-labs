import React, { useContext } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext"; // adjust path if needed
import AddToCartButton from "../products/AddToCartButton"; // adjust path if needed
import Spinner from "../shared/Spinner"; // optional loading component

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const { products, loading } = useContext(ProductsContext);

  // Choose first 4 products OR filter by a boolean field "featured"
  const featuredProjects = products.slice(0, 4);

  const discountPercent = (price, discountPrice) =>
    discountPrice
      ? Math.round(((price - discountPrice) / price) * 100)
      : 0;

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Explore our most popular & highly rated final year projects
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/product/${project.slug || project.id}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {project.discount_price && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-md">
                    {discountPercent(project.price, project.discount_price)}% OFF
                  </span>
                )}

                {/* Category Badge */}
                {project.category && (
                  <span className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 text-xs font-semibold rounded-md shadow">
                    {project.category}
                  </span>
                )}
              </div>

              <div className="p-5">
                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-700 line-clamp-1">
                  {project.title}
                </h3>

                {/* Ratings */}
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold ml-1">{project.rating || 4.5}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({project.reviews || 21} reviews)
                  </span>
                </div>

                {/* Tech Stack */}
                {project.tech_stack?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map((stack, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                        {stack}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price + Add to Cart */}
                <div className="flex items-center justify-between">
                  <div>
                    {project.discount_price && (
                      <span className="text-gray-400 line-through text-sm mr-2">
                        ₹{project.price}
                      </span>
                    )}
                    <span className="text-xl font-bold text-green-700">
                      ₹{project.discount_price || project.price}
                    </span>
                  </div>

                  {/* Cart Button */}
                  <div onClick={(e) => e.stopPropagation()}>
                    <AddToCartButton productId={project.id} small />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
