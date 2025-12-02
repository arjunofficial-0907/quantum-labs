import React, { useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create an Account
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <div className="flex items-center border rounded-lg p-3 mt-1 bg-gray-50">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex items-center border rounded-lg p-3 mt-1 bg-gray-50">
              <Phone className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full bg-transparent outline-none text-gray-700"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border rounded-lg p-3 mt-1 bg-gray-50">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg p-3 mt-1 bg-gray-50">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
            Create Account
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
