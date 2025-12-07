// src/components/layout/Navbar.jsx
import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
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
  const [searchInput, setSearchInput] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const shopRef = useRef(null);

  const categories = [
    { name: "Python", slug: "python" },
    { name: "Java", slug: "java" },
    { name: "Machine Learning", slug: "machine-learning" },
    { name: "Artificial Intelligence", slug: "artificial-intelligence" },
    { name: "Web Development", slug: "web-development" },
    { name: "App Development", slug: "app-development" },
  ];

  const handleCategorySelect = (cat) => {
    navigate(`/shop?category=${cat.slug}`);
    setCategoryDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  };

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      navigate(`/shop?search=${searchInput.trim().toLowerCase()}`);
    } else {
      navigate("/shop");
    }
    setMobileSearchOpen(false);
  };

  const handleShopClick = () => navigate("/shop");

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

      {/* TOP NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Quantum Labs</h1>
            <p className="text-[11px] text-gray-500">Solutions Unlimited</p>
          </div>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden lg:flex flex-1 max-w-2xl mx-6">
          <div className="flex w-full border rounded-md">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm outline-none"
              placeholder="Search for projects"
            />

            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="px-4 py-2 bg-white border-l flex items-center justify-between gap-1 text-sm text-gray-700 hover:bg-gray-100 min-w-40"
              >
                Select Category <ChevronDown className="w-4 h-4" />
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
              className="bg-green-600 text-white px-4 hover:bg-green-700 rounded-r-md flex items-center justify-center"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link to="/login" className="text-sm font-semibold hover:text-green-600">
              LOGIN / REGISTER
            </Link>
          ) : (
            <button onClick={logout} className="text-sm font-semibold hover:text-red-600">
              LOGOUT
            </button>
          )}

          <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-md">
            <Heart
              className={`w-6 h-6 ${wishlistItems.length ? "text-red-600 fill-red-600" : "text-gray-700"}`}
            />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-md">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setMobileSearchOpen(true)}>
            <Search className="w-6 h-6 text-gray-800" />
          </button>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7 text-gray-800" />
          </button>
        </div>
      </div>

      {/* DESKTOP MAIN NAV */}
      <nav className="border-t bg-white hidden md:flex">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 text-sm font-semibold items-center">
          <Link to="/" className="py-3 hover:text-green-600">HOME</Link>

          <div
            ref={shopRef}
            className="relative py-3"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600" onClick={handleShopClick}>
              SHOP <ChevronDown className="w-4 h-4" />
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full w-[650px] bg-white border shadow-xl rounded-md p-6 grid grid-cols-2 gap-4 z-50">
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
              </div>
            )}
          </div>

          <Link to="/journal-paper" className="hover:text-green-600 py-3">JOURNAL PAPER</Link>
          <Link to="/blog" className="hover:text-green-600 py-3">BLOG</Link>
          <Link to="/about" className="hover:text-green-600 py-3">ABOUT US</Link>
          <Link to="/contact" className="hover:text-green-600 py-3">CONTACT US</Link>
        </div>
      </nav>

      {/* MOBILE SEARCH DRAWER */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-999">
          <div className="bg-white w-full p-5 shadow-xl animate-slide-down">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search Projects</h2>
              <button onClick={() => setMobileSearchOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
              className="border px-4 py-2 rounded-md w-full mb-4"
            />

            <button
              onClick={handleSearch}
              className="bg-green-600 w-full py-2 rounded-md text-white font-semibold"
            >
              Search Now
            </button>
          </div>
        </div>
      )}

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-999">
          <div
            className="absolute right-0 top-0 w-72 h-full bg-white p-6 shadow-xl animate-slide-left flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>

            {!user ? (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="font-semibold">
                LOGIN / REGISTER
              </Link>
            ) : (
              <button onClick={logout} className="font-semibold text-red-600">
                LOGOUT
              </button>
            )}

            <Link to="/wishlist" className="flex justify-between">
              Wishlist <span>({wishlistItems.length})</span>
            </Link>

            <Link to="/cart" className="flex justify-between">
              Cart <span>({cartCount})</span>
            </Link>

            <hr />

            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategorySelect(cat)}
                className="text-left hover:text-green-600 py-2"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
