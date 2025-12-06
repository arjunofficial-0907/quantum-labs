import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { WishlistProvider } from "./context/WishlistContext";

// Newsletter Modal Component
import NewsletterModal from "./components/common/NewsletterModal";

const App = () => {
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>   {/* <-- ADDED HERE */}
            <Router>
              <div className="min-h-screen flex flex-col bg-gray-50">

                {/* Topbar with Newsletter Trigger */}
                <Topbar onNewsletterOpen={() => setNewsletterOpen(true)} />

                {/* Main Navigation */}
                <Navbar />

                {/* Routed Pages */}
                <main className="flex-1">
                  <AppRoutes />
                </main>

                {/* Footer */}
                <Footer />

                {/* Newsletter Modal */}
                <NewsletterModal
                  isOpen={newsletterOpen}
                  onClose={() => setNewsletterOpen(false)}
                />

              </div>
            </Router>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
