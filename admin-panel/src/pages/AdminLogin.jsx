import React, { useState } from "react";
import http from "../api/http";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await http.post("/auth/login", form);
      localStorage.setItem("adminToken", res.data.access_token);
      window.location.href = "/";
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={login} className="bg-white p-8 rounded-xl w-96 space-y-4 shadow-lg">
        <h2 className="text-xl font-bold text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border w-full px-4 py-2 rounded-lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full px-4 py-2 rounded-lg"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-600 text-white w-full py-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
