// src/services/cartService.js
import api from "./api";

// Fetch all cart items
export const getCartItems = async () => {
  try {
    const response = await api.get("/api/cart/");
    return response.data || [];
  } catch (error) {
    console.error("❌ Error fetching cart items:", error);
    throw {
      message: error?.response?.data?.detail || "Failed to load cart items",
    };
  }
};

// Add item to cart
export const addToCart = async (productId, quantity = 1) => {
  try {
    const response = await api.post("/api/cart/", {
      product_id: productId,
      quantity,
    });

    if (!response.data) {
      throw new Error("Invalid response from server.");
    }

    return response.data; // returns full object including product
  } catch (error) {
    console.error("❌ Error adding to cart:", error);
    throw {
      message: error?.response?.data?.detail || "Failed to add item to cart",
    };
  }
};

// Delete cart item
export const removeFromCart = async (cartId) => {
  try {
    const response = await api.delete(`/api/cart/${cartId}`);
    return response.data;
  } catch (error) {
    console.error("❌ Error removing item:", error);
    throw {
      message:
        error?.response?.data?.detail || "Failed to remove item from cart",
    };
  }
};
