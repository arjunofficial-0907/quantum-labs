import React, { useState } from "react";
import { X, Mail, Lock, Eye, EyeOff } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const { login, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const success = await login(email, password);

    if (success) {
      onClose();
    } else {
      setErrorMsg("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Login to Your Account
        </h2>
        <p className="text-center text-gray-600 mb-5">
          Access your dashboard, orders & wishlist
        </p>

        {/* Error Message */}
        {errorMsg && (
          <p className="bg-red-100 text-red-700 py-2 px-3 rounded-lg text-sm mb-3 text-center">
            {errorMsg}
          </p>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-3 focus:outline-none text-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-3 py-3 focus:outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-500" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-green-600 hover:underline transition"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Switch to Register */}
        <p className="text-center mt-4 text-sm text-gray-700">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
