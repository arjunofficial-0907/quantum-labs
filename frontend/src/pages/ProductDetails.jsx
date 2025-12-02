import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";

const ProductDetails = () => {
  const product = {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 24,
    price: 4999,
    discount: 20,
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    description:
      "A complete production-ready e-commerce web application including authentication, cart, orders, payments and admin panel.",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>

          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold ml-1">{product.rating}</span>
            <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-5">{product.description}</p>

          <div className="flex items-center gap-3 mb-6">
            {product.discount > 0 && (
              <span className="text-gray-400 line-through text-lg">₹{product.price}</span>
            )}
            <span className="text-4xl font-bold text-green-600">
              ₹{Math.round(product.price * (1 - product.discount / 100))}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {product.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 border px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              <Heart className="w-5 h-5 text-gray-700" /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
