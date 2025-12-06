// src/components/layout/Navbar.jsx
import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import { WishlistContext } from "../../context/WishlistContext";
import useAuth from "../../hooks/useAuth";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const { wishlistItems } = useContext(WishlistContext);

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");  // <-- added
  const shopRef = useRef(null);

  // CATEGORIES WITH SLUG
  const categories = [
    { name: "Python", slug: "python" },
    { name: "Java", slug: "java" },
    { name: "Machine Learning", slug: "machine-learning" },
    { name: "Artificial Intelligence", slug: "artificial-intelligence" },
    { name: "Web Development", slug: "web-development" },
    { name: "App Development", slug: "app-development" },
  ];

  const handleCategorySelect = (cat) => {
    setCategoryDropdownOpen(false);
    navigate(`/shop?category=${cat.slug}`);
  };

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate(`/shop?search=${searchInput.trim().toLowerCase()}`);
    } else {
      navigate("/shop");
    }
  };

  const handleShopClick = () => {
    navigate("/shop");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-5">

        {/* LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Quantum Labs</h1>
            <p className="text-[11px] text-gray-500">Solutions Unlimited</p>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden lg:flex flex-1 max-w-2xl mx-6">
          <div className="flex w-full border rounded-md">

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm outline-none"
              placeholder="Search for projects"
            />

            {/* CATEGORY DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="px-4 py-2 bg-white border-l flex items-center justify-between gap-1 text-sm text-gray-700 hover:bg-gray-100 min-w-40 rounded-none"
              >
                Select Category
                <ChevronDown className="w-4 h-4" />
              </button>

              {categoryDropdownOpen && (
                <div className="absolute top-full mt-1 w-56 bg-white border rounded-md shadow-xl z-50 max-h-64 overflow-y-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleCategorySelect(cat)}
                      className="block w-full px-4 py-2 text-left hover:bg-green-50 text-sm"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleSearch}
              className="bg-green-600 text-white px-4 flex items-center justify-center hover:bg-green-700 rounded-r-md"
            >
              <Search className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          {!user ? (
            <Link to="/login" className="hidden md:block text-sm font-semibold hover:text-green-600">
              LOGIN / REGISTER
            </Link>
          ) : (
            <button onClick={logout} className="text-sm font-semibold hover:text-red-600">
              LOGOUT
            </button>
          )}

          <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-md transition">
            <Heart
              className={`w-6 h-6 transition ${
                wishlistItems.length > 0 ? "text-red-600 fill-red-600" : "text-gray-700"
              }`}
            />

            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-md">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* NAV MENU */}
      <nav className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 text-sm font-semibold items-center select-none">

          <Link to="/" className="hover:text-green-600 py-3">HOME</Link>

          {/* SHOP MEGA MENU */}
          <div
            ref={shopRef}
            className="relative py-3"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-green-600"
              onClick={handleShopClick}
            >
              SHOP <ChevronDown className="w-4 h-4" />
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full w-[650px] bg-white border shadow-xl rounded-md p-6 z-50 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-green-700 mb-1">Projects</h3>
                  {categories.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleCategorySelect(item)}
                      className="text-left hover:text-green-600 text-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-green-700 mb-1">Workshops</h3>
                  {["Python", "Robotics", "IoT", "Machine Learning"].map((item) => (
                    <button key={item} className="text-left hover:text-green-600 text-sm">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/journal-paper" className="hover:text-green-600 py-3">JOURNAL PAPER</Link>
          <Link to="/blog" className="hover:text-green-600 py-3">BLOG</Link>
          <Link to="/about" className="hover:text-green-600 py-3">ABOUT US</Link>
          <Link to="/contact" className="hover:text-green-600 py-3">CONTACT US</Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
