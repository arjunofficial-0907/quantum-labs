import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const leftAccordion = [
  {
    title: "Choosing and Refining Your Research Topic",
    content: [
      "Topic Selection: Get expert advice on selecting a relevant and impactful research topic with proper domain selection.",
      "Literature Review: Guidance on conducting a thorough literature review to refine your research question and objectives.",
    ],
  },
  {
    title: "Crafting Your Proposal",
    content: [
      "Support and templates to structure your proposal clearly and professionally.",
    ],
  },
  {
    title: "Research Design and Methodology",
    content: [
      "Get guidance developing the appropriate methodologies that align with your research focus.",
    ],
  },
  {
    title: "Writing and Editing Your Manuscript",
    content: ["Enhance clarity, formatting, flow, and academic tone."],
  },
];

const rightAccordion = [
  {
    title: "Proofreading Services",
    content: [
      "Experienced Proofreaders",
      "Comprehensive Proofreading",
      "Quick Turnaround",
      "Confidentiality & Secure Document Handling",
      "Affordable Rates",
    ],
  },
  {
    title: "Translation Services",
    content: [
      "Convert your research to multiple languages while maintaining technical meaning.",
    ],
  },
  {
    title: "Navigating the Peer Review Process",
    content: ["Address reviewer feedback with expert guidance."],
  },
];

const JournalPaper = () => {
  const [openLeft, setOpenLeft] = useState(0);
  const [openRight, setOpenRight] = useState(0);

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Journal Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Journal Paper Publishing for Final Year Students
          </h1>
          <p className="text-white font-medium mt-3 tracking-wide">HOME / JOURNAL PAPER</p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Journal Paper Writing"
          className="rounded-lg shadow-lg"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Journal Paper Guidance for Final Year Students
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            We are your premier resource for journal writing and publication. We provide consulting, ethical
            guidance, proofreading and peer review support to ensure smooth publication.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For final-year students, we help refine your research ideas into publishable manuscripts and
            guide you through the entire publication journey confidently.
          </p>

          <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">
            VIEW MORE
          </button>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Accordion */}
        <div>
          {leftAccordion.map((item, index) => (
            <div key={index} className="border border-green-700 rounded-md mb-3">
              <button
                onClick={() => setOpenLeft(openLeft === index ? null : index)}
                className="w-full bg-green-700 text-white px-5 py-3 font-semibold flex justify-between items-center"
              >
                <span>{item.title}</span>
                <ChevronDown className={`${openLeft === index ? "rotate-180" : ""} transition-transform`} />
              </button>

              {openLeft === index && (
                <ul className="bg-white p-5 text-gray-700 space-y-2">
                  {item.content.map((line, i) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Accordion */}
        <div>
          {rightAccordion.map((item, index) => (
            <div key={index} className="border border-green-700 rounded-md mb-3">
              <button
                onClick={() => setOpenRight(openRight === index ? null : index)}
                className="w-full bg-green-700 text-white px-5 py-3 font-semibold flex justify-between items-center"
              >
                <span>{item.title}</span>
                <ChevronDown className={`${openRight === index ? "rotate-180" : ""} transition-transform`} />
              </button>

              {openRight === index && (
                <ul className="bg-white p-5 text-gray-700 space-y-2">
                  {item.content.map((line, i) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-lg shadow-lg p-10 text-center bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center text-white">
          <h3 className="bg-green-600 rounded px-4 py-1 mb-3 inline-block">Get Started Today</h3>
          <p>
            Navigate your research-to-publication journey with expert support from start to finish.
          </p>
        </div>

        <Link
        to="/contact"
        className="rounded-lg shadow-lg p-10 text-center bg-[url('https://images.pexels.com/photos/276781/pexels-photo-276781.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center text-white block cursor-pointer hover:scale-105 transition-transform"
        >
        <h3 className="bg-green-600 rounded px-4 py-1 mb-3 inline-block">Contact Us</h3>
        <p>
          For inquiries or quotes, email ashokanarjun@gmail.com or call +91 9344099864.
        </p>
        </Link>
      </div>
    </div>
  );
};

export default JournalPaper;
