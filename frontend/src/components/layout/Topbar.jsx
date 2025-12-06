import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  PhoneCall,
} from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";

const Topbar = ({ onNewsletterOpen }) => {
  return (
    <div className="bg-green-600 text-white text-xs md:text-sm py-2 border-b border-green-700">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-4">

        {/* Welcome Text */}
        <span className="font-medium tracking-wide">
          Welcome to Final Year Projects!!
        </span>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-5">

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors duration-300">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Divider */}
          <span className="text-green-200">|</span>

          {/* Newsletter */}
          <button
            onClick={onNewsletterOpen}
            className="hover:text-green-200 transition font-medium cursor-pointer"
          >
            NEWSLETTER
          </button>

          {/* Phone */}
          <a
            href="tel:+919344099864"
            className="hover:text-green-200 transition font-medium flex items-center gap-1"
          >
            <PhoneCall className="w-4 h-4" /> +91 93440 99864
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919344099864"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-200 transition font-medium flex items-center gap-1"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:support@quantumlabs.com"
            className="hover:text-green-200 transition font-medium flex items-center gap-1"
          >
            <Mail className="w-4 h-4" /> Email
          </a>

          {/* Pages */}
          <Link to="/contact" className="hover:text-green-200 transition font-medium">
            CONTACT US
          </Link>

          <Link to="/faq" className="hover:text-green-200 transition font-medium">
            FAQS
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-1 rounded hover:bg-green-700 transition">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
