// src/pages/Shop.jsx

import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/products/ProductCard";
import Spinner from "../components/shared/Spinner";
import EmptyState from "../components/shared/EmptyState";

const Shop = () => {
  const { products, loading } = useContext(ProductsContext);
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const browseMode = params.get("browse") === "true";
  const searchQuery = params.get("search")?.toLowerCase() || "";
  const categoryFilter = params.get("category")?.toLowerCase() || "";

  // UI Categories
  const categories = [
    "Python",
    "Java",
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "App Development",
  ];

  // FILTER WITH SLUG SUPPORT
  const filtered = useMemo(() => {
    let updated = [...products];

    // search filter
    if (searchQuery) {
      updated = updated.filter((p) =>
        p.title?.toLowerCase().includes(searchQuery)
      );
    }

    // category filter via slug
    if (categoryFilter && categoryFilter !== "select category") {
      updated = updated.filter(
        (p) => p.category_slug?.toLowerCase() === categoryFilter
      );
    }

    return updated;
  }, [products, searchQuery, categoryFilter]);

  useEffect(() => {
    setFilteredProducts(filtered);
  }, [filtered]);

  // category button slug handler
  const handleCategoryClick = (cat) => {
    const slug = cat.replace(/\s+/g, "-").toLowerCase();
    navigate(`/shop?category=${slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {browseMode ? "Browse Categories" : "Shop All Projects"}
      </h2>

      {browseMode ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(cat)}
              className="p-4 border rounded-xl shadow hover:bg-green-50 hover:border-green-600 text-center font-semibold transition"
            >
              {cat}
            </button>
          ))}
        </div>
      ) : (
        <>
          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <Spinner size="lg" />
            </div>
          )}

          {/* No results */}
          {!loading && filteredProducts.length === 0 && (
            <EmptyState
              title="No products found"
              message="Try another search or category."
            />
          )}

          {/* Products */}
          {!loading && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Shop;
