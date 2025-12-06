// src/context/WishlistContext.jsx
import { createContext, useState, useContext } from "react";
import { ProductsContext } from "./ProductsContext";

// eslint-disable-next-line react-refresh/only-export-components
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);

  const [wishlistItems, setWishlistItems] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const syncToLocalStorage = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems((prev) => {
      const updated = [...prev, product.id]; // store only ID
      syncToLocalStorage(updated);
      return updated;
    });
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems((prev) => {
      const updated = prev.filter((itemId) => itemId !== id);
      syncToLocalStorage(updated);
      return updated;
    });
  };

  // Convert stored IDs to real product objects
  const wishlistProducts = wishlistItems
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistProducts,
        handleAddToWishlist,
        handleRemoveFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
