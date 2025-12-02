import React from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      price: 3999,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=200&fit=crop",
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg text-center py-10">
            Your cart is empty
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-green-600 font-bold text-xl">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <select className="border rounded-lg px-3 py-2">
                      <option value={1}>Qty: 1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>

                    <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-8">
              <div className="bg-gray-100 rounded-xl p-6 w-full max-w-sm">
                <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
