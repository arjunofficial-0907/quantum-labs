import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-md shadow-green-200">
                <span className="text-white font-bold text-2xl">Q</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  <span className="text-green-600">Quantum Labs</span>
                </h3>
                <p className="text-xs text-gray-500">Solutions Unlimited</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Quantum Labs was founded by passionate engineers to help students and researchers build 
              real-world, innovative academic projects — solving real-life problems through technology.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-600" />
                <span>+91 93440 99864</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-600" />
                <span>support@quantumlabs.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-48 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d280.7263691336469!2d80.09851555448633!3d12.993396451667275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1764608822124!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="company-location"
            ></iframe>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Python", "Java", "Machine Learning", "Artificial Intelligence", "Web Development", "App Development"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/shop?category=${item.replace(/\s+/g, "-").toLowerCase()}`}
                      className="hover:text-green-600 transition font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Useful Links
            </h4>

            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              <li>
                <Link to="/privacy-policy" className="hover:text-green-600 transition font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-green-600 transition font-medium">
                  Refund & Returns
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-green-600 transition font-medium">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-600 transition font-medium">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-green-600 transition font-medium">
                  FAQ
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              Mini Projects
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Java", "Python", "MERN"].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/shop?category=${item.toLowerCase()}`} className="hover:text-green-600 transition font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="font-semibold">Quantum Labs</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 opacity-90">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
              alt="Upi"
              className="h-6"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
