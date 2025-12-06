// src/pages/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We provide complete runnable source code via Google Drive for software projects. Using tools like AnyDesk or Google Meet, deployment is done with full explanation. For hardware projects, once completed we share demo video first for full understanding before delivering the kit.",
  },
  {
    question: "When will I receive the project that I purchased?",
    answer:
      "For software projects delivery is immediate after payment and explanation session. Hardware project kits are delivered after confirming demo.",
  },
  {
    question: "Are modifications accepted?",
    answer:
      "Yes, we accept reasonable modifications based on project compatibility. Extra customization may involve additional charges.",
  },
  {
    question: "Do you accept your own concepts?",
    answer:
      "Yes! We help students convert their own concepts into full projects with proper documentation and support.",
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes. We provide full documentation including abstract, system requirements, DFD, UML diagrams, screenshots, and conclusion.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="FAQ Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Faq</h1>
          <p className="text-white font-medium tracking-wide mt-2">
            HOME / FAQ
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Graphic / Illustration */}
        <div className="bg-green-700 h-72 md:h-full rounded-xl flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2986/2986545.png"
            alt="faq icon"
            className="w-40 h-40 opacity-90"
          />
        </div>

        {/* FAQ Right Section */}
        <div>
          <h3 className="text-green-600 font-semibold uppercase tracking-wide">
            FAQ
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">
            Feel Free to Ask!
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <button
                  className="w-full flex justify-between items-center text-left bg-green-700 text-white px-5 py-3 font-semibold"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="p-5 text-gray-700 bg-white leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
