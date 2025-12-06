import React, { useState } from "react";
import { X, Mail, CheckCircle } from "lucide-react";

const ForgotPasswordModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // TODO: Replace timeout simulation with actual API request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);

    try {
      setLoading(true);

      // Example delay simulating backend request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccess(true);
      setTimeout(() => {
        setEmail("");
        setSuccess(false);
        onClose();
      }, 1500);
    } catch {
      setErrorMsg("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

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
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your registered email to receive password reset instructions.
        </p>

        {/* Error Message */}
        {errorMsg && (
          <p className="bg-red-100 text-red-700 py-2 px-3 rounded-lg text-sm text-center mb-3">
            {errorMsg}
          </p>
        )}

        {/* Success Block */}
        {success ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-3">
            <CheckCircle className="w-12 h-12 text-green-600" />
            <p className="text-green-700 font-semibold text-lg text-center">
              Reset link sent successfully!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
        )}

        {/* Switch */}
        <p className="text-center mt-4 text-sm text-gray-700">
          Back to{" "}
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

export default ForgotPasswordModal;
