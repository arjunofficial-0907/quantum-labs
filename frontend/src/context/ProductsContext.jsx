/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from "react";
import { getProducts, getProductById } from "../services/productService";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (options = {}) => {
    try {
      setLoading(true);
      setError(null);

      const response = await getProducts(options);

      const fetchedProducts = Array.isArray(response)
        ? response
        : response?.data || [];

      setProducts(fetchedProducts);
      setFeatured(fetchedProducts.filter((p) => p.is_featured === true));
    } catch (err) {
      console.error("Error loading products:", err);
      setError(err?.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProductDetails = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProductById(id);
      return data;
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError(err?.message || "Failed to fetch product details");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        featured,
        loading,
        error,
        fetchProducts,
        fetchProductDetails,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
