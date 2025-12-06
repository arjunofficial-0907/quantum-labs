/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from "react";
import { loginUser, registerUser, getMe } from "../services/authService";
import { setToken, getToken, clearToken } from "../utils/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setAuthToken] = useState(getToken());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * Fetch authenticated user profile
   * Wrapped in useCallback to prevent infinite loop in useEffect
   */
  const fetchUserProfile = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getMe(); // token added automatically by axios interceptor
      setUser(data);
    } catch (err) {
      console.error("❌ Failed to load user profile:", err);
      logout(); // clear session if token invalid
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Auto-fetch user profile on token change
   */
  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token, fetchUserProfile]);

  /**
   * Login user and store token
   */
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await loginUser({ email, password });

      if (res?.access_token) {
        setToken(res.access_token);
        setAuthToken(res.access_token);
        await fetchUserProfile();
      }
      return true;
    } catch (err) {
      console.error("❌ Login failed:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Register user
   */
  const register = async (name, email, password, phone) => {
    try {
      setLoading(true);
      await registerUser({ name, email, password, phone });
      return true;
    } catch (err) {
      console.error("❌ Registration failed:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Logout user and clear session
   */
  const logout = () => {
    clearToken();
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        fetchUserProfile,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
