import React, { useContext } from "react";
import { Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import AddToCartButton from "./AddToCartButton";
import { WishlistContext } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Wishlist context
  const {
    wishlistItems,
    handleAddToWishlist,
    handleRemoveFromWishlist,
  } = useContext(WishlistContext);

  // Check if product is already in wishlist (using ID array)
  const isWishlisted = wishlistItems.includes(product.id);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isWishlisted) {
      handleRemoveFromWishlist(product.id);
    } else {
      handleAddToWishlist(product);
    }
  };

  const handleClick = () => navigate(`/product/${product.slug || product.id}`);

  const discountPercent =
    product.discount_price &&
    Math.round(((product.price - product.discount_price) / product.price) * 100);

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-2xl border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={handleClick}
    >
      {/* IMAGE & BADGES */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-white text-gray-800 px-3 py-1 text-xs font-semibold rounded-md shadow z-20">
            {product.category}
          </span>
        )}

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full shadow-md">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-700 line-clamp-1">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold ml-1">{product.rating || 4.5}</span>
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews || 21} reviews)
          </span>
        </div>

        {/* Tech Stack */}
        {product.tech_stack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tech_stack.map((stack, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700"
              >
                {stack}
              </span>
            ))}
          </div>
        )}

        {/* PRICE + ACTIONS */}
        <div className="flex items-center justify-between">
          <div>
            {product.discount_price && (
              <span className="text-gray-400 line-through text-sm mr-2">
                {formatPrice(product.price)}
              </span>
            )}
            <span className="text-xl font-bold text-green-700">
              {formatPrice(product.discount_price || product.price)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              className={`p-2 rounded-lg transition shadow-sm ${
                isWishlisted ? "bg-red-500" : "bg-gray-100 hover:bg-red-500"
              }`}
            >
              <Heart
                className={`w-5 h-5 transition ${
                  isWishlisted ? "text-white fill-white" : "text-red-500"
                }`}
              />
            </button>

            {/* Add to Cart */}
            <AddToCartButton productId={product.id} small />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
