import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, SlidersHorizontal, ArrowUpDown, X, 
  RotateCcw, Sparkles, CheckCircle2, LayoutGrid, Check 
} from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ShopPage = ({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  onViewDetails 
}) => {
  const [caPhaseFilter, setCaPhaseFilter] = useState('all'); // 'all', 'CA1', 'CA2'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'rating', 'discount'
  const [maxPrice, setMaxPrice] = useState(6000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category filter
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
        return false;
      }
      // CA Phase filter
      if (caPhaseFilter !== 'all' && prod.caPhase !== caPhaseFilter) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesDesc = prod.shortDescription.toLowerCase().includes(q);
        const matchesCat = prod.category.toLowerCase().includes(q);
        const matchesId = prod.id.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat && !matchesId) {
          return false;
        }
      }
      // Price filter
      if (prod.price > maxPrice) {
        return false;
      }
      // In stock
      if (inStockOnly && prod.stockStatus !== 'In Stock') {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') return b.discount - a.discount;
      return 0; // default order
    });
  }, [selectedCategory, caPhaseFilter, searchQuery, maxPrice, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setCaPhaseFilter('all');
    setSearchQuery('');
    setMaxPrice(6000);
    setInStockOnly(false);
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold font-mono">
              25 PRODUCTS CATALOG
            </span>
            <span className="text-xs text-slate-400">
              CA1 (1–15) + CA2 (16–25)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Explore All TechNest Electronics
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Engineered for durability, modern ergonomics, and academic productivity. Browse real-time inventory with full specifications and verified sentiment scores.
          </p>
        </div>
      </div>

      {/* Main Grid: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filter Column */}
        <aside className="hidden lg:block space-y-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <SlidersHorizontal className="w-4 h-4 text-brand-600" />
                <span>Filters & Facets</span>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-600 hover:text-brand-800 font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Academic Phase Filter (CA1 vs CA2) */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Assessment Cohort
              </label>
              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => setCaPhaseFilter('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                    caPhaseFilter === 'all'
                      ? 'bg-brand-50 text-brand-700 font-bold border border-brand-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>All Products</span>
                  <span className="font-mono text-[11px] text-slate-400">25</span>
                </button>
                <button
                  onClick={() => setCaPhaseFilter('CA1')}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                    caPhaseFilter === 'CA1'
                      ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>CA1 Initial (1–15)</span>
                  <span className="font-mono text-[11px] text-indigo-500 font-bold">15</span>
                </button>
                <button
                  onClick={() => setCaPhaseFilter('CA2')}
                  className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                    caPhaseFilter === 'CA2'
                      ? 'bg-purple-50 text-purple-700 font-bold border border-purple-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>CA2 Additional (16–25)</span>
                  <span className="font-mono text-[11px] text-purple-500 font-bold">10</span>
                </button>
              </div>
            </div>

            {/* Product Category Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Categories
              </label>
              <div className="space-y-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-brand-600 text-white font-bold shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold uppercase tracking-wider text-slate-400">Max Price</span>
                <span className="font-bold text-slate-900">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="400"
                max="6000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹400</span>
                <span>₹6,000+</span>
              </div>
            </div>

            {/* Stock Availability */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 w-4 h-4 cursor-pointer"
                />
                <span className="font-medium">Show In-Stock Only</span>
              </label>
            </div>

          </div>
        </aside>

        {/* Products Area */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by name, spec, or product ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-slate-50 focus:bg-white text-xs rounded-xl border border-slate-200 focus:border-brand-500 focus:outline-hidden transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-brand-500 cursor-pointer"
              >
                <option value="featured">Featured (Default)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount %</option>
              </select>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
                aria-label="Filter"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Active Filter Pills Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">
              Showing {filteredProducts.length} of 25 products
            </span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 font-medium text-xs">
                Category: {selectedCategory}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-brand-900" 
                  onClick={() => setSelectedCategory('all')} 
                />
              </span>
            )}

            {caPhaseFilter !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium text-xs">
                Cohort: {caPhaseFilter}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-purple-900" 
                  onClick={() => setCaPhaseFilter('all')} 
                />
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-medium text-xs">
                Search: "{searchQuery}"
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-amber-950" 
                  onClick={() => setSearchQuery('')} 
                />
              </span>
            )}
          </div>

          {/* Mobile Filter Accordion Dropdown */}
          {showMobileFilters && (
            <div className="lg:hidden p-4 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-xs">Filter Options</span>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-xs text-slate-400"
                >
                  Close
                </button>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase">Assessment Cohort</label>
                <div className="grid grid-cols-3 gap-2 mt-1.5">
                  {['all', 'CA1', 'CA2'].map((phase) => (
                    <button
                      key={phase}
                      onClick={() => setCaPhaseFilter(phase)}
                      className={`py-1.5 px-2 text-xs rounded-lg font-medium ${
                        caPhaseFilter === phase ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {phase === 'all' ? 'All (25)' : phase}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase">Category</label>
                <div className="grid grid-cols-2 gap-2 mt-1.5">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`py-1 px-2 text-xs rounded-lg text-left truncate ${
                        selectedCategory === c.id ? 'bg-brand-600 text-white font-bold' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We couldn't find any electronics matching your selected search criteria. Try loosening your filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          )}

        </main>
      </div>

    </div>
  );
};
