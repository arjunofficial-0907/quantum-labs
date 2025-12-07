import React, { useContext } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

import axios from "../services/axiosInstance";
import { CartContext } from "../context/CartContext";
import Spinner from "../components/shared/Spinner";
import EmptyState from "../components/shared/EmptyState";
import formatPrice from "../utils/formatPrice";

const Cart = () => {
  const { cartItems, loading, handleRemoveFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + ((item.product?.discount_price || item.product?.price || 0) * item.quantity),
    0
  );

  const handleRazorpayPayment = async () => {
    try {
      // Create order request
      const res = await axios.post("/api/payment/create-order", {
        amount: Math.round(totalPrice),  // send in rupees, backend converts to paise
      });

      console.log("Order response:", res.data);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,   // Client Key
        amount: res.data.amount,                      // amount in paise
        currency: "INR",
        name: "Quantum Labs",
        description: "Final Year Project Purchase",
        order_id: res.data.id,                        // Razorpay order id
        handler: function (response) {
          alert("Payment Success 🎉");
          console.log("Payment Response:", response);
          // TODO: save order + navigate success page
        },
        theme: { color: "#10B981" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment initialization failed. Try again.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-screen animate-fadeIn">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <ShoppingCart className="w-7 h-7 text-green-600" /> Your Cart
      </h2>

      {loading && (
        <div className="flex justify-center py-20">
          <Spinner size="lg" />
        </div>
      )}

      {!loading && cartItems.length === 0 && (
        <EmptyState
          title="Your cart is empty"
          message="Browse our projects and add items to start your order!"
          actionLabel="Browse Projects"
          actionLink="/shop"
        />
      )}

      {!loading && cartItems.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.product?.image || "/placeholder.png"}
                    alt={item.product?.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{item.product?.title}</h3>
                    <p className="text-green-600 font-bold text-lg">
                      {formatPrice(item.product?.discount_price || item.product?.price)}
                    </p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
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

          <div className="bg-white p-6 rounded-xl shadow space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Order Summary</h3>

            <div className="flex justify-between text-gray-700 border-b pb-3">
              <span>Total Amount</span>
              <span className="font-bold text-green-600 text-2xl">{formatPrice(totalPrice)}</span>
            </div>

            <button
              onClick={handleRazorpayPayment}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
            >
              Pay with Razorpay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
