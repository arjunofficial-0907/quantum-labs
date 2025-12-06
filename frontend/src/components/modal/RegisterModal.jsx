import React, { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const { register, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    const success = await register(name, email, password);

    if (success) {
      setSuccessMsg("Account created successfully! Redirecting...");
      setTimeout(() => {
        onClose();
        onSwitchToLogin();
      }, 1200);
    } else {
      setErrorMsg("Registration failed. Try different email.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Start your journey with premium academic projects
        </p>

        {/* Error Message */}
        {errorMsg && (
          <p className="bg-red-100 text-red-700 py-2 px-3 rounded-lg text-sm mb-3 text-center">
            {errorMsg}
          </p>
        )}

        {/* Success Message */}
        {successMsg && (
          <p className="bg-green-100 text-green-700 py-2 px-3 rounded-lg text-sm mb-3 text-center">
            {successMsg}
          </p>
        )}

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-3 focus:outline-none text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              onClick={() => setShowPassword(!showPassword)}
              className="p-1"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-500" />
              ) : (
                <Eye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Switch to Login */}
        <p className="text-center mt-4 text-sm text-gray-700">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
