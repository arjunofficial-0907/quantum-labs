/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from "react";
import { getCartItems, addToCart as addCartAPI, removeFromCart } from "../services/cartService";
import useAuth from "../hooks/useAuth";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    if (!token) {
      setCartItems([]);
      return;
    }

    try {
      setLoading(true);
      const data = await getCartItems();
      setCartItems(data || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // ADD TO CART
  const handleAddToCart = async (productId, quantity = 1) => {
    try {
      setLoading(true);

      const newItem = await addCartAPI(productId, quantity);

      setCartItems((prev) => {
        const exists = prev.find((i) => i.product.id === productId);

        if (exists) {
          return prev.map((i) =>
            i.product.id === productId
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        }

        return [...prev, newItem];
      });
    } catch (error) {
      console.error("Add to cart failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // REMOVE FROM CART
  const handleRemoveFromCart = async (cartId) => {
    try {
      setLoading(true);
      await removeFromCart(cartId);
      setCartItems((prev) => prev.filter((item) => item.id !== cartId));
    } catch (error) {
      console.error("Remove cart item failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        handleAddToCart,
        handleRemoveFromCart,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
