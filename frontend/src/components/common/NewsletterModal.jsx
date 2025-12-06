// src/components/common/NewsletterModal.jsx
import React from "react";
import { X } from "lucide-react";

const NewsletterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-999"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-[90%] bg-cover bg-center rounded-xl shadow-2xl p-10 text-center text-white animate-fadeIn"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/abstract-server-data-circuit-board-background_73426-636.jpg?w=800')`,
        }}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X className="w-7 h-7 text-white hover:text-red-400" />
        </button>

        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          HEY YOU, SIGN UP AND CONNECT <br /> TO QUANTUM LABS
        </h2>

        <p className="mt-4 text-gray-200">
          Be the first to learn about latest projects, offers & research updates. 🚀
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-72 rounded-lg outline-none text-black"
          />
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold">
            Subscribe
          </button>
        </div>

        <p className="mt-4 text-xs">
          Will be used in accordance with our <span className="font-bold underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default NewsletterModal;
