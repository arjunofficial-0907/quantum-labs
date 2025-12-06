import React, { useContext } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

import { CartContext } from "../context/CartContext";
import Spinner from "../components/shared/Spinner";
import EmptyState from "../components/shared/EmptyState";
import formatPrice from "../utils/formatPrice";

const Cart = () => {
  const { cartItems, loading, handleRemoveFromCart } = useContext(CartContext);

  // Safe total price calculation
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum +
      ((item.product?.discount_price || item.product?.price || 0) *
        item.quantity),
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen animate-fadeIn">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <ShoppingCart className="w-7 h-7 text-green-600" /> Your Cart
      </h2>

      {/* Loading state */}
      {loading && (
        <div className="flex justify-center py-20">
          <Spinner size="lg" />
        </div>
      )}

      {/* Empty Cart */}
      {!loading && cartItems.length === 0 && (
        <EmptyState
          title="Your cart is empty"
          message="Browse our projects and add items to start your order!"
          actionLabel="Browse Projects"
          actionLink="/shop"
        />
      )}

      {/* Items */}
      {!loading && cartItems.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product?.image || "/placeholder.png"}
                    alt={item.product?.title || "Product"}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {item.product?.title || "Unknown Product"}
                    </h3>

                    <p className="text-green-600 font-bold text-lg">
                      {formatPrice(
                        item.product?.discount_price ||
                          item.product?.price ||
                          0
                      )}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="p-2 bg-red-50 rounded-lg hover:bg-red-100 transition"
                >
                  <Trash2 className="w-5 h-5 text-red-600" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            <h3 className="text-xl font-bold text-gray-900">
              Order Summary
            </h3>

            <div className="flex justify-between text-gray-700 border-b pb-3">
              <span>Total Amount</span>
              <span className="font-bold text-green-600 text-2xl">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <button
              onClick={() => {
                const message = encodeURIComponent(
                  `Hello 👋, I want to purchase the following projects:\n\n${cartItems
                    .map(
                      (item) =>
                        `• ${item.product?.title} - ${formatPrice(
                          item.product?.discount_price || item.product?.price
                        )} (Qty: ${item.quantity})`
                    )
                    .join("\n")}\n\nTotal Amount: ${formatPrice(totalPrice)}\n\nPlease guide me for payment.`
                );

                const phone = "919344099864"; // your WhatsApp number without + sign
                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
              }}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
            >
              Checkout
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
