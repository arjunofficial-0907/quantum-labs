import React, { useState } from "react";
import { Mail, Lock, User, Phone, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    const success = await register(
      formData.name,
      formData.email,
      formData.password,
      formData.phone
    );

    if (!success) {
      setError("Registration failed. Try again or use another email.");
    } else {
      setSuccessMsg("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 fade-in">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign up to access premium projects & offers
        </p>

        {/* Error message */}
        {error && (
          <p className="bg-red-100 text-red-700 py-2 px-3 rounded-lg text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Success message */}
        {successMsg && (
          <p className="bg-green-100 text-green-700 py-2 px-3 rounded-lg text-sm text-center mb-4">
            {successMsg}
          </p>
        )}

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div className="relative">
            <User className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-green-600 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="w-5 h-5 absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-green-600 focus:outline-none"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin w-6 h-6" /> : "Register"}
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
