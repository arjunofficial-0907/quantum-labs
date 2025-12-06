import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLogin from "../pages/AdminLogin";
import Projects from "../pages/Projects";
import AddProject from "../pages/AddProject";
import AdminNavbar from "../layout/AdminNavbar";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <>
              <AdminNavbar />
              <Projects />
            </>
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-project"
        element={
          <ProtectedRoute>
            <>
              <AdminNavbar />
              <AddProject />
            </>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
