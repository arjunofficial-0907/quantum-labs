import React from "react";
import { Code, Cpu, Settings } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 leading-relaxed">
      {/* Title / Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Empowering students & innovators to turn ideas into real-world projects
        </p>
      </div>

      {/* Our Mission */}
      <section className="mb-14">
        <div className="flex items-start gap-4">
          <Code size={40} className="text-green-600" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to inspire creativity, curiosity, and critical thinking among
              students by providing them with the resources, guidance, and support they
              need to pursue their academic passions and achieve their goals. We believe
              that every student has the potential to make a positive impact, and we’re
              here to help them unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-14">
        <div className="flex items-start gap-4">
          <Cpu size={40} className="text-green-600" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Approach</h2>
            <p className="text-gray-700">
              At Quantum Labs, we believe in a student-centered approach to learning,
              where students are empowered to take ownership of their projects,
              explore their interests, and develop the skills and confidence they
              need to succeed in their academic and professional lives.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="mb-14">
        <div className="flex items-start gap-4">
          <Settings size={40} className="text-green-600" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Get Involved Today</h2>
            <p className="text-gray-700">
              Ready to embark on your academic journey? Explore our project opportunities,
              meet our mentors, and join a community of like-minded students who are passionate
              about innovation. Whether you’re a diploma, undergraduate, or postgraduate student,
              there’s a project for you at Quantum Labs.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-3">Let’s Build the Future Together</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Join hands with us to create meaningful technology that solves real-world problems.
          Your journey to innovation starts here.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
