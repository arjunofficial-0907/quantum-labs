import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";

const Topbar = ({ onNewsletterOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-green-600 text-white text-xs md:text-sm py-2 border-b border-green-700">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* Welcome text */}
          <span className="font-medium tracking-wide">
            Welcome to QuantumLabs Projects!!
          </span>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-5">

            <div className="flex items-center space-x-3">
              <a href="#"><Facebook className="w-4 h-4" /></a>
              <a href="#"><Twitter className="w-4 h-4" /></a>
              <a href="#"><Instagram className="w-4 h-4" /></a>
              <a href="#"><Youtube className="w-4 h-4" /></a>
            </div>

            <span className="text-green-200">|</span>

            <button onClick={onNewsletterOpen} className="font-medium">
              NEWSLETTER
            </button>

            <a href="tel:+919344099864" className="flex items-center gap-1 font-medium">
              <PhoneCall className="w-4 h-4" /> +91 93440 99864
            </a>

            <a
              href="https://wa.me/919344099864"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>

            <a href="mailto:support@quantumlabs.com" className="flex items-center gap-1 font-medium">
              <Mail className="w-4 h-4" /> Email
            </a>

            <Link to="/contact" className="font-medium">CONTACT US</Link>
            <Link to="/faq" className="font-medium">FAQS</Link>
          </div>

          {/* Mobile Menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 rounded hover:bg-green-700 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-600 text-white px-4 py-4 space-y-4 animate-slideDown">
          <Link to="/contact" className="block">CONTACT US</Link>
          <Link to="/faq" className="block">FAQS</Link>
          <a href="tel:+919344099864" className="block">📞 +91 93440 99864</a>
          <a href="https://wa.me/919344099864" target="_blank" className="block">💬 WhatsApp</a>
          <a href="mailto:support@quantumlabs.com" className="block">✉ Email</a>
        </div>
      )}
    </>
  );
};

export default Topbar;
