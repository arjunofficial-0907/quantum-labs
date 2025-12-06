// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { Star, Loader2, Heart } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import axios from "../api/axiosInstance";

import AddToCartButton from "../components/products/AddToCartButton";
import formatPrice from "../utils/formatPrice";
import { WishlistContext } from "../context/WishlistContext"; // <-- added

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Wishlist context
  const {
    wishlistItems,
    handleAddToWishlist,
    handleRemoveFromWishlist,
  } = useContext(WishlistContext);

  const isWishlisted = wishlistItems.some((item) => item.id === product?.id);

  const handleWishlistToggle = () => {
    if (!product) return;

    if (isWishlisted) {
      handleRemoveFromWishlist(product.id);
    } else {
      handleAddToWishlist(product);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/products/slug/${slug}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Product fetch failed:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="w-10 h-10 text-green-600 animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">❌ Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-lg font-semibold">{product.rating || 4.5}</span>
            <span className="ml-2 text-gray-600 text-sm">
              ({product.reviews_count ?? 0} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-7 mb-6">
            {product.description}
          </p>

          {/* Price */}
          <div className="my-4">
            {product.discount_price && (
              <span className="text-gray-400 line-through text-lg mr-3">
                ₹{formatPrice(product.price)}
              </span>
            )}
            <span className="text-4xl font-bold text-green-600">
              ₹{formatPrice(product.discount_price || product.price)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <AddToCartButton productId={product.id} />

            <button
              onClick={handleWishlistToggle}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-semibold transition shadow-sm ${
                isWishlisted
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? "text-white fill-white" : "text-red-500"
                }`}
              />
              {isWishlisted ? "Added to Wishlist" : "Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
