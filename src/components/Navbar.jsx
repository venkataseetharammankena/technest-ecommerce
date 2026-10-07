import React, { useState } from 'react';
import { 
  ShoppingBag, Search, Menu, X, ChevronDown, Sparkles, 
  Layers, MessageSquare, BookOpen, Star, HelpCircle, 
  Truck, CreditCard, Share2, DollarSign, MessageCircle, Info, Heart
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';

export const Navbar = ({ activePage, setActivePage, searchQuery, setSearchQuery, onSelectCategory }) => {
  const { cartCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [ca1DropdownOpen, setCa1DropdownOpen] = useState(false);
  const [ca2DropdownOpen, setCa2DropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNav = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
    setCa1DropdownOpen(false);
    setCa2DropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    handleNav('shop');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-accent-500 flex items-center justify-center text-white shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-2xl tracking-tight">T</span>
              <span className="font-bold text-lg text-amber-300">N</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                  Tech<span className="text-brand-600">Nest</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-brand-50 text-brand-700 border border-brand-200">
                  STORE
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-normal hidden sm:block">
                Smart Technology. Better Everyday.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === 'home' ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('shop')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === 'shop' ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              Shop
            </button>

            {/* Categories Dropdown */}
            <div className="relative" onMouseLeave={() => setCategoriesDropdownOpen(false)}>
              <button
                onMouseEnter={() => setCategoriesDropdownOpen(true)}
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 transition-colors"
              >
                Categories
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Product Categories
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 flex items-center justify-between transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-slate-400 px-1.5 py-0.5 rounded-full bg-slate-100">
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CA1 Dropdown */}
            <div className="relative" onMouseLeave={() => setCa1DropdownOpen(false)}>
              <button
                onMouseEnter={() => setCa1DropdownOpen(true)}
                onClick={() => setCa1DropdownOpen(!ca1DropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  ['reviews', 'shipping', 'payment', 'channels'].includes(activePage)
                    ? 'text-brand-600 bg-brand-50 font-semibold'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                CA1 Features
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {ca1DropdownOpen && (
                <div className="absolute top-full left-0 w-64 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-indigo-700 uppercase tracking-wider bg-indigo-50/50">
                    Continuous Assessment 1
                  </div>
                  <button
                    onClick={() => handleNav('reviews')}
                    className="w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 flex items-center gap-2"
                  >
                    <Star className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="font-medium">Sentiment Analysis (CA1)</div>
                      <div className="text-xs text-slate-500">10+ reviews & analytics dashboard</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('shipping')}
                    className="w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 flex items-center gap-2"
                  >
                    <Truck className="w-4 h-4 text-blue-500" />
                    <div>
                      <div className="font-medium">Shipping & Delivery</div>
                      <div className="text-xs text-slate-500">Timelines, charges & live tracking</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('payment')}
                    className="w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-medium">Payment Options</div>
                      <div className="text-xs text-slate-500">UPI, Cards, Net Banking & COD</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('channels')}
                    className="w-full text-left px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="font-medium">Sales Channels</div>
                      <div className="text-xs text-slate-500">Omnichannel strategy (5 channels)</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* CA2 Dropdown */}
            <div className="relative" onMouseLeave={() => setCa2DropdownOpen(false)}>
              <button
                onMouseEnter={() => setCa2DropdownOpen(true)}
                onClick={() => setCa2DropdownOpen(!ca2DropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  ['whatsapp-campaign', 'blogs', 'feedback', 'revenue', 'support', 'resources'].includes(activePage)
                    ? 'text-purple-600 bg-purple-50 font-semibold'
                    : 'text-slate-700 hover:text-purple-600 hover:bg-slate-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                CA2 Updation
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {ca2DropdownOpen && (
                <div className="absolute top-full left-0 w-72 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-purple-700 uppercase tracking-wider bg-purple-50/50">
                    Continuous Assessment 2
                  </div>
                  <button
                    onClick={() => handleNav('whatsapp-campaign')}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-medium">WhatsApp Marketing Campaign</div>
                      <div className="text-xs text-slate-500">'TechNest Fest' & 3 messages</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('blogs')}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    <div>
                      <div className="font-medium">TechNest Blog</div>
                      <div className="text-xs text-slate-500">3 comprehensive buying guides</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('feedback')}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-pink-500" />
                    <div>
                      <div className="font-medium">Consumer Feedback Portal</div>
                      <div className="text-xs text-slate-500">Interactive form & live ratings</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('revenue')}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2"
                  >
                    <DollarSign className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="font-medium">Revenue Generation Streams</div>
                      <div className="text-xs text-slate-500">8 revenue models & margins</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('support')}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4 text-blue-500" />
                    <div>
                      <div className="font-medium">Customer Support Center</div>
                      <div className="text-xs text-slate-500">Ticket portal & 10 detailed FAQs</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNav('resources')}
                    className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-teal-500" />
                    <div>
                      <div className="font-medium">Customer Resources</div>
                      <div className="text-xs text-slate-500">8 clickable consumer guides</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('about')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === 'about' ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNav('support')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === 'support' ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons: Search & Cart */}
          <div className="flex items-center gap-2">
            
            {/* Search Input on Desktop */}
            <div className="relative hidden md:block w-48 lg:w-56">
              <input
                type="text"
                placeholder="Search 25 gadgets..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activePage !== 'shop') setActivePage('shop');
                }}
                className="w-full pl-9 pr-3 py-2 bg-slate-100 hover:bg-slate-200/60 focus:bg-white text-xs rounded-full border border-transparent focus:border-brand-500 focus:outline-hidden transition-all placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-brand-50 text-slate-700 hover:text-brand-600 transition-all cursor-pointer group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6 group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold text-[11px] min-w-5 h-5 rounded-full flex items-center justify-center px-1 shadow-sm animate-subtle">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expand */}
        {isSearchOpen && (
          <div className="md:hidden py-3 px-1 border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activePage !== 'shop') setActivePage('shop');
                }}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-100 rounded-xl text-sm border-none focus:ring-2 focus:ring-brand-500"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
          <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-3 py-2">
            Main Pages
          </div>
          <button
            onClick={() => handleNav('home')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            🏠 Home
          </button>
          <button
            onClick={() => handleNav('shop')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            🛍️ Shop All (25 Products)
          </button>
          <button
            onClick={() => handleNav('cart')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100 flex items-center justify-between"
          >
            <span>🛒 Shopping Cart</span>
            <span className="px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold">
              {cartCount} items
            </span>
          </button>

          <div className="font-semibold text-xs text-indigo-700 uppercase tracking-wider px-3 py-2 mt-3 bg-indigo-50/50 rounded-lg">
            CA1 Requirements
          </div>
          <button
            onClick={() => handleNav('reviews')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-indigo-50"
          >
            ⭐ Customer Reviews & Sentiment Analysis
          </button>
          <button
            onClick={() => handleNav('shipping')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-indigo-50"
          >
            🚚 Shipping & Delivery Information
          </button>
          <button
            onClick={() => handleNav('payment')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-indigo-50"
          >
            💳 Payment Options & Demonstration Checkout
          </button>
          <button
            onClick={() => handleNav('channels')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-indigo-50"
          >
            🌐 Omnichannel Sales Strategy
          </button>

          <div className="font-semibold text-xs text-purple-700 uppercase tracking-wider px-3 py-2 mt-3 bg-purple-50/50 rounded-lg">
            CA2 Requirements
          </div>
          <button
            onClick={() => handleNav('whatsapp-campaign')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50"
          >
            📱 WhatsApp Marketing Campaign ('TechNest Fest')
          </button>
          <button
            onClick={() => handleNav('blogs')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50"
          >
            📰 TechNest Blogs (3 Guides)
          </button>
          <button
            onClick={() => handleNav('feedback')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50"
          >
            ✍️ Consumer Feedback Form
          </button>
          <button
            onClick={() => handleNav('revenue')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50"
          >
            💰 Revenue Generation Streams (8 Streams)
          </button>
          <button
            onClick={() => handleNav('support')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50"
          >
            🎧 Customer Support Center & FAQs
          </button>
          <button
            onClick={() => handleNav('resources')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-purple-50"
          >
            📚 Customer Resources (8 Guides)
          </button>

          <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-3 py-2 mt-3">
            Company & Admin
          </div>
          <button
            onClick={() => handleNav('about')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100"
          >
            ℹ️ About TechNest (MBA Project)
          </button>
          <button
            onClick={() => handleNav('admin')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-emerald-700 bg-emerald-50"
          >
            📊 Admin & Demo Metrics Dashboard
          </button>
        </div>
      )}
    </header>
  );
};
