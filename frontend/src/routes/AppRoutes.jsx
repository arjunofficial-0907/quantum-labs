// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage.jsx";
import Shop from "../pages/Shop.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Cart from "../pages/Cart.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import FAQ from "../pages/FAQ.jsx"
import JournalPaper from "../pages/JournalPaper.jsx"
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx"
import RefundPolicy from "../pages/RefundPolicy.jsx"
import TermsConditions from "../pages/TermsConditions.jsx"
import Wishlist from "../pages/Wishlist.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* Static Pages */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/journal-paper" element={<JournalPaper />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/wishlist" element={<Wishlist />} />


      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Cart */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
