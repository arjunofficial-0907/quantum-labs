import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Loader2, ShoppingCart } from "lucide-react";

const AddToCartButton = ({ productId, small = false }) => {
  const { handleAddToCart, loading: cartLoading } = useContext(CartContext);
  const [adding, setAdding] = useState(false);

  const handleAdd = async (e) => {
    e.stopPropagation();
    try {
      setAdding(true);
      await handleAddToCart(productId, 1);
    } catch (error) {
      console.error("Failed to add item:", error);
    } finally {
      setAdding(false);
    }
  };

  return (
    <button
      onClick={handleAdd}
      disabled={adding || cartLoading}
      className={`${
        small
          ? "p-2 w-10 h-10 flex items-center justify-center rounded-lg bg-green-600 hover:bg-green-700"
          : "w-full bg-green-600 text-white py-3 rounded-lg mt-4 font-semibold hover:bg-green-700"
      } transition shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed`}
    >
      {adding || cartLoading ? (
        <Loader2 className="w-5 h-5 animate-spin text-white" />
      ) : (
        <ShoppingCart className={`${small ? "w-5 h-5 text-white" : "w-5 h-5"}`} />
      )}
    </button>
  );
};

export default AddToCartButton;
