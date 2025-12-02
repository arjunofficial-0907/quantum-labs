import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Code, Cpu, Database, Layers, ChevronRight, Star, TrendingUp, ChevronDown, Heart, User, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Homepage = () => {
  const [_mobileMenuOpen, _setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('SELECT CATEGORY');

  const categories = [
    { id: 1, name: 'Java', icon: '☕', count: 12, color: 'bg-blue-500' },
    { id: 2, name: 'Python', icon: '🐍', count: 18, color: 'bg-green-500' },
    { id: 3, name: 'Embedded', icon: '⚙️', count: 8, color: 'bg-purple-500' },
    { id: 4, name: 'Machine Learning', icon: '🤖', count: 10, color: 'bg-orange-500' },
    { id: 5, name: 'Mechanical', icon: '⚡', count: 6, color: 'bg-red-500' },
    { id: 6, name: 'Matlab', icon: '🔥', count: 7, color: 'bg-pink-500' },
    { id: 7, name: 'VLSI', icon: '💾', count: 5, color: 'bg-indigo-500' },
    { id: 8, name: 'Raspberry PI', icon: '🍓', count: 9, color: 'bg-rose-500' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'MERN Stack',
      price: 4999,
      rating: 4.8,
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      discount: 20,
    },
    {
      id: 2,
      title: 'ML Image Classifier',
      category: 'Machine Learning',
      price: 3499,
      rating: 4.9,
      reviews: 31,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      techStack: ['TensorFlow', 'Python', 'OpenCV'],
      discount: 15,
    },
    {
      id: 3,
      title: 'Inventory Management System',
      category: 'Java Projects',
      price: 2999,
      rating: 4.7,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      techStack: ['Java', 'Spring Boot', 'MySQL'],
      discount: 0,
    },
    {
      id: 4,
      title: 'Data Analysis Dashboard',
      category: 'Python Projects',
      price: 3999,
      rating: 4.6,
      reviews: 22,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      techStack: ['Python', 'Pandas', 'Plotly', 'Dash'],
      discount: 10,
    },
  ];

  const stats = [
    { label: 'Projects Sold', value: '500+', icon: TrendingUp },
    { label: 'Happy Customers', value: '350+', icon: Star },
    { label: 'Categories', value: '8+', icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Green Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <span>Welcome to Final Year Projects!!</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <a href="#" className="hover:text-green-200 transition"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-green-200 transition"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-green-200 transition"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:text-green-200 transition"><Youtube className="w-4 h-4" /></a>
              </div>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hidden md:inline hover:text-green-200 transition">NEWSLETTER</a>
              <a href="tel:+919025434960" className="hidden md:inline hover:text-green-200 transition">+91 90254 34960</a>
              <a href="#" className="hidden md:inline hover:text-green-200 transition">CONTACT US</a>
              <a href="#" className="hidden md:inline hover:text-green-200 transition">FAQS</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700">
                    <span className="text-green-600">Quantum Labs</span>
                  </div>
                  <div className="text-xs text-gray-500">Solutions Unlimited</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent rounded-l"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="relative">
                  <button 
                    onClick={() => setCategoriesOpen(!categoriesOpen)}
                    className="border border-l-0 border-gray-300 px-4 py-2 bg-white hover:bg-gray-50 flex items-center space-x-2 min-w-[180px] justify-between"
                  >
                    <span className="text-sm text-gray-600">{selectedCategory}</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>
                  {categoriesOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg mt-1 z-50 max-h-64 overflow-y-auto">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.name);
                            setCategoriesOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm text-gray-700"
                        >
                          {cat.icon} {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button className="bg-green-600 text-white px-6 py-2 hover:bg-green-700 transition rounded-r">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-green-600 transition font-medium text-sm hidden md:block">
                LOGIN / REGISTER
              </a>
              <div className="flex items-center space-x-3">
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                  <Heart className="w-6 h-6 text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                  <User className="w-6 h-6 text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              {/* Browse Categories Dropdown */}
              <div className="relative">
                <button className="bg-green-600 text-white px-6 py-4 hover:bg-green-700 transition flex items-center space-x-2">
                  <Menu className="w-5 h-5" />
                  <span className="font-medium">BROWSE CATEGORIES</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Main Navigation */}
              <nav className="hidden md:flex items-center space-x-8 ml-8">
                <a href="#" className="text-green-600 font-semibold py-4 border-b-2 border-green-600">HOME</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition font-medium py-4">SHOP</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition font-medium py-4">JOURNAL PAPER</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition font-medium py-4">BLOG</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition font-medium py-4">ABOUT US</a>
                <a href="#" className="text-gray-700 hover:text-green-600 transition font-medium py-4">CONTACT US</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🚀 100+ Ready-to-Use Projects
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Final Year Projects for Your Success
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                High-quality, production-ready projects in Java, Python, MERN Stack, and Machine Learning. Save months of development time.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition font-semibold text-lg shadow-lg hover:shadow-xl">
                  Browse Projects
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg border-2 border-gray-200">
                  View Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                  alt="Coding workspace"
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-lg">4.8/5.0</span>
                    <span className="text-gray-500 text-sm">(500+ reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg">Our most popular and highly-rated projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                  />
                  {project.discount > 0 && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{project.discount}%
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold ml-1">{project.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({project.reviews})</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {project.discount > 0 && (
                        <span className="text-gray-400 line-through text-sm mr-2">
                          ₹{project.price}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-green-600">
                        ₹{project.discount > 0 ? Math.round(project.price * (1 - project.discount / 100)) : project.price}
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully completed their final year projects with QuantumLabs
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-xl">
            Explore All Projects
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700">
                    <span className="text-green-600">Global Techno Solutions</span>
                  </div>
                  <div className="text-xs text-gray-500">Solutions Unlimited</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                Global Techno Solutions - GTS, started by young engineering graduates to overcome a problem they faced during their academic years. That is "Providing Solutions". They kept it as the motto for their company.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span>Phone: (+91) 90254 34960</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <span>Mail: sales@finalyearprojects.in</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-1">
            <div className="rounded-lg overflow-hidden h-48 shadow-md">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d280.7263691336469!2d80.09851555448633!3d12.993396451667275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1764608822124!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>

            {/* Our Category */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">Our Category</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600 transition">Java</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Python</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Embedded</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Matlab</a></li>
                <li><a href="#" className="hover:text-green-600 transition">VLSI</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Mechanical</a></li>
              </ul>
            </div>

            {/* Useful Links & Mini Projects */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">Useful Links</h4>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Returns</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Latest News</a></li>
                <li><a href="#" className="hover:text-green-600 transition">FAQ</a></li>
              </ul>
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">Mini Projects</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600 transition">Java</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Python</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Embedded</a></li>
              </ul>
            </div>
          </div>

          {/* Payment Methods & Copyright */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-600 mb-4 md:mb-0">
                Copyright <span className="font-semibold">Finalyearprojects.In</span> 2024
              </div>
              <div className="flex items-center space-x-3">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%231434CB' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='10' font-weight='bold' text-anchor='middle' dominant-baseline='central'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-8" />
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23EB001B' width='20' height='25' rx='3'/%3E%3Crect fill='%23FF5F00' x='10' width='20' height='25' rx='3'/%3E%3Crect fill='%23F79E1B' x='20' width='20' height='25' rx='3'/%3E%3C/svg%3E" alt="Mastercard" className="h-8" />
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23003087' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='8' font-weight='bold' text-anchor='middle' dominant-baseline='central'%3EPayPal%3C/text%3E%3C/svg%3E" alt="PayPal" className="h-8" />
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'%3E%3Crect fill='%23016FD0' width='40' height='25' rx='3'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='8' font-weight='bold' text-anchor='middle' dominant-baseline='central'%3EAMEX%3C/text%3E%3C/svg%3E" alt="Amex" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;