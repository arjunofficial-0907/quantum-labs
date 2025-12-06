import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-white">
      {/* HERO HEADER */}
      <div className="relative h-72 w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1559028012-aa460788cd3a?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-white font-extrabold text-4xl md:text-5xl">
          Terms and Conditions
        </h1>
        <p className="absolute bottom-5 text-white font-medium tracking-wide">
          HOME / TERMS AND CONDITIONS
        </p>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* MAIN TEXT */}
        <div className="lg:col-span-2 text-gray-800 leading-8 text-lg">
          <p className="uppercase font-semibold mb-6 tracking-wide">
            PLEASE READ THIS AGREEMENT CAREFULLY...
          </p>

          <p>
            It contains the sole terms and conditions of sale that apply to the
            purchase of products from finalyearprojects.in. Any different or
            additional terms set forth in customer's purchase order shall not
            be binding unless signed by an authorized officer...
          </p>

          <hr className="my-8" />

          <h2 className="font-bold text-2xl mb-4">1. AVAILABILITY & PRICING</h2>
          <p>
            Product listings, specifications, availability and pricing are
            subject to change without notice. Prices listed do not include tax,
            shipping or payment fees...
          </p>
        </div>

        {/* SIDEBAR */}
        <div className="border-l pl-6">
          <h3 className="font-bold text-xl mb-3">CATEGORIES</h3>
          <ul className="space-y-2 text-green-600 font-semibold">
            <li className="hover:underline cursor-pointer">Android</li>
            <li className="hover:underline cursor-pointer">Artificial Intelligence</li>
            <li className="hover:underline cursor-pointer">Cybersecurity</li>
          </ul>

          <hr className="my-8" />

          <h3 className="font-bold text-xl mb-3">RECENT POSTS</h3>
          <div className="space-y-5">
            <div className="flex gap-3 cursor-pointer hover:opacity-70">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80&h=80&fit=crop"
                className="w-16 h-16 rounded object-cover"
                alt="post"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  FORENSIC – CYBER CRIMINALS EXPOSED
                </p>
                <p className="text-sm text-gray-500">June 6, 2024 · No Comments</p>
              </div>
            </div>

            <div className="flex gap-3 cursor-pointer hover:opacity-70">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80&h=80&fit=crop"
                className="w-16 h-16 rounded object-cover"
                alt="post"
              />
              <div>
                <p className="font-semibold text-gray-900">
                  ARTIFICIAL INTELLIGENCE – WILL MACHINES TAKE OVER?
                </p>
                <p className="text-sm text-gray-500">June 6, 2024 · No Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
