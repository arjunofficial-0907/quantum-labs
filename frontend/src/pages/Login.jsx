import React, { useState } from "react";
import { Mail, Lock, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const success = await login(formData.email, formData.password);

    if (!success) {
      setError("Invalid email or password. Please try again.");
    } else {
      navigate("/"); // redirect to homepage after login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 fade-in">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Login to access dashboard, orders & more
        </p>

        {/* Error message */}
        {error && (
          <p className="bg-red-100 text-red-700 py-2 px-3 rounded-lg text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div className="relative">
            <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-green-600 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-green-600 focus:outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-green-600 hover:underline transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Login"}
          </button>
        </form>

        {/* Switch to Register */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
