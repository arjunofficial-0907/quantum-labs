import React, { useState } from "react";

const faqs = [
  {
    question: "When will I receive the project that I purchased?",
    answer:
      "For software projects: We provide complete runnable source code via Google Drive. Using tools like AnyDesk or Google Meet deployment will be done with full explanation.\n\nFor hardware projects: Once kit work is completed we share demo video first so students can see full functionality before receiving the kit.",
  },
  { question: "Whether modifications are accepted?", answer: "Yes, based on feasibility we accept modifications." },
  { question: "How can I return a project?", answer: "Return policy depends on project type. Contact support." },
  { question: "Do you accept Own Concepts?", answer: "Yes, we develop custom concepts as per requirements." },
  { question: "Do you support for Journal / Research Papers?", answer: "Yes, we provide full journal paper support." },
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Send failed");

      alert("Message sent successfully! We will contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* FAQ Left Section */}
        <div>
          <h4 className="text-xs text-gray-500 font-semibold tracking-wider mb-2">
            INFORMATION QUESTIONS
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-3">
                <button
                  className="flex justify-between w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span
                    className={`font-semibold ${openIndex === index ? "text-green-600" : "text-black"}`}
                  >
                    {faq.question}
                  </span>
                  <span className="text-lg font-bold">{openIndex === index ? "˄" : "˅"}</span>
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-gray-600 whitespace-pre-line leading-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Right Section */}
        <div>
          <h4 className="text-xs text-gray-500 font-semibold tracking-wider mb-2">
            INFORMATION ABOUT US
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            CONTACT US FOR ANY QUESTIONS
          </h2>

          <form className="space-y-4" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleForm}
              className="w-full border px-4 py-3 rounded-md outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleForm}
              className="w-full border px-4 py-3 rounded-md outline-none"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleForm}
                className="w-full border px-4 py-3 rounded-md outline-none"
                required
              />

              <input
                type="text"
                placeholder="College Name"
                name="college"
                value={formData.college}
                onChange={handleForm}
                className="w-full border px-4 py-3 rounded-md outline-none"
                required
              />
            </div>

            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleForm}
              className="w-full border px-4 py-3 h-32 rounded-md outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white font-bold px-6 py-3 rounded-md hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
