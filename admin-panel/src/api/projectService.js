// src/api/projectService.js

import http from "./http";

// CREATE PROJECT (Multipart form upload)
export const addProject = async (formData, token) => {
  return await http.post("/products/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// GET ALL PRODUCTS
export const getProjects = async () => {
  return await http.get("/products/");
};

// DELETE PROJECT
export const deleteProject = async (id, token) => {
  return await http.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET PRODUCT BY SLUG/ID
export const getProductBySlug = async (slug) => {
  return await http.get(`/products/${slug}`);
};
