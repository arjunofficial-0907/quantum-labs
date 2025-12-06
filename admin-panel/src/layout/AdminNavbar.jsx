import React from "react";

const AdminNavbar = () => {
  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between">
      <h1 className="font-semibold">Admin Panel</h1>
      <button onClick={logout} className="bg-red-600 px-4 py-1 rounded-md">
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;
