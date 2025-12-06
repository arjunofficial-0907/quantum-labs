// src/services/authService.js

import api from "./api";
import { setToken, clearToken, getToken } from "../utils/storage";

const AUTH_URL = "/api/auth";

// Register new user
export const registerUser = async (data) => {
  try {
    const response = await api.post(`${AUTH_URL}/register`, data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error.response?.data || error;
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const response = await api.post(`${AUTH_URL}/login`, data);

    if (response.data?.access_token) {
      setToken(response.data.access_token);
    }

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error.response?.data || error;
  }
};

// Get logged-in user profile
export const getMe = async () => {
  try {
    const token = getToken();
    if (!token) return null;

    const response = await api.get(`${AUTH_URL}/me`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error.response?.data || error;
  }
};

// Logout user
export const logoutUser = () => {
  clearToken();
};

export default {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
};
