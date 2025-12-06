// src/services/productService.js
import api from "./api";

// Fetch all products
export const getProducts = async ({
  category = null,
  featured = null,
  page = 1,
  limit = 12,
  search = ""
} = {}) => {
  try {
    const params = {};

    if (category) params.category = category;
    if (featured) params.featured = featured;
    if (page) params.page = page;
    if (limit) params.limit = limit;
    if (search) params.search = search;

    const response = await api.get("/api/products", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error.response?.data || error.message;
  }
};

// Fetch single product
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error.response?.data || error.message;
  }
};

// Create new product
export const createProduct = async (productData) => {
  try {
    const response = await api.post("/api/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error.response?.data || error.message;
  }
};
