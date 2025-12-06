import React from "react";

// Homepage Sections
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTA from "../components/home/CTA";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <CTA />
    </div>
  );
};

export default Homepage;
