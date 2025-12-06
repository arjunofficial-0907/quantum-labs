import React from "react";

const RefundPolicy = () => {
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
          Refund and Returns Policy
        </h1>
        <p className="absolute bottom-5 text-white font-medium">HOME / REFUND AND RETURNS POLICY</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 leading-8 text-lg">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>

        <p className="mb-6">
          Our refund and returns policy lasts 30 days. If 30 days have passed
          since your purchase, we cannot offer a full refund or exchange.
        </p>

        <p className="mb-6">
          To be eligible for a return, the product must be unused and in its
          original condition and packaging. Several categories of items cannot
          be returned such as digital downloads and documentation files.
        </p>

        <h3 className="font-bold text-xl mb-3">Non-returnable items:</h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Gift Cards</li>
          <li>Downloaded ZIP Source Codes</li>
          <li>Customized / Modified Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default RefundPolicy;
