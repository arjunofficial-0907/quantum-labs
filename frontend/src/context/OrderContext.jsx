/* eslint-disable react-refresh/only-export-components */
// src/context/OrderContext.jsx

import { createContext, useState, useEffect, useCallback } from "react";
import { placeOrder, getOrders } from "../services/orderService";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { token } = useAuth();
  const { fetchCart } = useContext(CartContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState(null);

  /**
   * Fetch orders
   */
  const fetchOrders = useCallback(async () => {
    if (!token) {
      setOrders([]);
      return;
    }

    try {
      setLoading(true);
      setOrderError(null);

      const data = await getOrders();
      setOrders(data || []);
    } catch (error) {
      console.error("Failed to load orders:", error);
      setOrderError("Could not load orders. Try again later.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);


  /**
   * Place a new order
   */
  const handlePlaceOrder = async (shippingAddress) => {
    try {
      setLoading(true);
      setOrderError(null);

      const newOrder = await placeOrder(shippingAddress);

      // Add new order to list instantly
      setOrders((prev) => [newOrder, ...prev]);

      // Refresh cart after placing order
      fetchCart();

      return newOrder;
    } catch (error) {
      setOrderError("Order failed. Please try again.");
      console.error("Order failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };


  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        orderError,
        fetchOrders,
        handlePlaceOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
