import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-linear-to-r from-green-600 via-green-700 to-blue-600 py-20 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center fade-in">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Get Started?
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of students building industry-ready projects with complete
          documentation, implementation guidance & lifetime support.
        </p>

        <Link to="/shop">
          <button
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-10 py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
