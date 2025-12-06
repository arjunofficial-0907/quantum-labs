import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, ShoppingCart, Heart, Loader2 } from "lucide-react";
import { getProductById } from "../services/productService";
import useCart from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { handleAddToCart, loading: cartLoading } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const result = await getProductById(id);
        setProduct(result);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );

  if (!product) return <div className="text-center p-10">Product not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-lg font-semibold">
              {product.rating}
            </span>
            <span className="ml-2 text-gray-600 text-sm">
              ({product.reviews_count} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="my-4">
            {product.discount_price && (
              <span className="text-gray-400 line-through text-lg mr-2">
                ₹{product.price}
              </span>
            )}
            <span className="text-4xl font-bold text-green-600">
              ₹{product.discount_price || product.price}
            </span>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 my-4">
            {product.tech_stack?.map((tech, i) => (
              <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <h3 className="text-lg font-semibold mt-6 mb-2">Features</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {product.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              onClick={() => handleAddToCart(product.id)}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              {cartLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ShoppingCart className="w-5 h-5" />
              )}
              Add to Cart
            </button>

            <button className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              <Heart className="w-5 h-5 text-red-500" />
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Description Block */}
      <div className="max-w-7xl mx-auto px-4 py-10 bg-white rounded-xl shadow-md mt-12">
        <h2 className="text-2xl font-bold mb-4">Project Description</h2>
        <p className="text-gray-700 leading-7">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
