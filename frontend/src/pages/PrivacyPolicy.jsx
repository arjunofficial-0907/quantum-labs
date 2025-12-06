import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="relative h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-white font-extrabold text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="absolute bottom-5 text-white font-medium">HOME / PRIVACY POLICY</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 leading-8 text-lg text-gray-800">
        <p className="mb-6">
          We collect your personal information for processing your order and
          for smooth customer support communication. We never sell or share
          your information with third-party services.
        </p>
        <p className="mb-6">
          We may collect usage data through cookies to improve user experience,
          website speed, and security performance.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
