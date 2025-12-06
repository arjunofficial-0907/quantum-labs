import axios from "axios";
import { getToken, clearToken } from "../utils/storage";

// Base API instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000", // local backend
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach Authorization token automatically
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("❌ Request Interceptor Error:", error);
    return Promise.reject(error);
  }
);

// Global error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("❌ Network Error: Backend unreachable");
      return Promise.reject({ message: "Network Error" });
    }

    const { status, data } = error.response;

    // Unauthorized
    if (status === 401) {
      console.warn("⚠ Unauthorized - Token expired or missing");
      clearToken();

      // Prevent infinite redirects if already on login
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    // Forbidden
    if (status === 403) {
      console.warn("⚠ Forbidden - Permission denied");
    }

    // Not found
    if (status === 404) {
      console.warn("❗ API route not found:", data);
    }

    // Server error
    if (status >= 500) {
      console.error("🚨 Server Error:", data);
    }

    return Promise.reject(data);
  }
);

export default api;
