// src/pages/Wishlist.jsx

import React, { useContext } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import Spinner from "../components/shared/Spinner";
import EmptyState from "../components/shared/EmptyState";
import formatPrice from "../utils/formatPrice";

const Wishlist = () => {
  const { wishlistItems, loading, handleRemoveFromWishlist } =
    useContext(WishlistContext);

  const { handleAddToCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  // Convert stored IDs → actual product objects
  const fullItems = wishlistItems
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen animate-fadeIn">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Heart className="w-7 h-7 text-red-600" /> Your Wishlist
      </h2>

      {loading && (
        <div className="flex justify-center py-20">
          <Spinner size="lg" />
        </div>
      )}

      {!loading && fullItems.length === 0 && (
        <EmptyState
          title="No items in wishlist"
          message="Browse & save projects you love!"
          actionLabel="Browse Projects"
          actionLink="/shop"
        />
      )}

      {!loading && fullItems.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fullItems.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-between hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-green-600 font-bold text-lg">
                    {formatPrice(product.discount_price || product.price)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleAddToCart(product.id, 1)}
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="p-2 bg-red-50 rounded-lg hover:bg-red-100 transition"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
