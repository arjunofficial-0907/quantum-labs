// src/services/orderService.js

import api from "./api";

// Place a new order
export const placeOrder = async (shippingAddress) => {
  try {
    const response = await api.post("/api/orders/", {
      shipping_address: shippingAddress,
    });
    return response.data;
  } catch (error) {
    console.error("Order placement failed:", error);
    throw error;
  }
};

// Get all orders for logged-in user
export const getOrders = async () => {
  try {
    const response = await api.get("/api/orders/");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
