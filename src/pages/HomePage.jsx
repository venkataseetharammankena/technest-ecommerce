import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Truck, RotateCcw, Headphones, 
  Sparkles, Star, ChevronRight, Zap, ShoppingBag, Eye,
  Award, CheckCircle2, TrendingUp, Check
} from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export const HomePage = ({ onNavigateShop, onViewDetails, onSelectCategory, onNavigatePage }) => {
  const { reviews, addToCart } = useCart();
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Featured 8 products (mix of CA1 bestsellers and CA2 new additions)
  const featuredProducts = [
    products[0], // AirBeat Earbuds
    products[1], // Pulse Smartwatch
    products[3], // PowerMax Power Bank
    products[7], // Mechanical Keyboard
    products[8], // Flex Laptop Stand
    products[12], // 65W Fast Charger
    products[15], // Smart Fitness Band (CA2)
    products[16]  // Gaming Headset (CA2)
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200 text-brand-700 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>TECHNEST FEST IS LIVE • UP TO 50% OFF</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Smart Technology. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-accent-600">
                  Better Everyday.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover affordable electronics and smart accessories designed for your everyday academic and professional life. Ergonomic engineering, high durability, and genuine value.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onNavigateShop}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-brand-500/25 transition-all cursor-pointer group"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigatePage('whatsapp-campaign')}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-brand-600" />
                  <span>View Festive Deals</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free Shipping &gt; ₹999</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>7-Day Easy Return</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image / Product Spotlight Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-3xl blur-2xl opacity-20 transform -rotate-1" />
                
                {/* Main Card */}
                <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      ★ Featured Deal
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      TN-001
                    </span>
                  </div>

                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 mb-5">
                    <img
                      src={products[0].image}
                      alt={products[0].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-lg font-bold">
                      Hybrid ANC Earbuds
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-lg">
                        {products[0].name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {products[0].shortDescription}
                    </p>

                    <div className="pt-3 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-extrabold text-slate-900">
                          ₹{products[0].price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400 line-through ml-2">
                          ₹{products[0].originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <button
                        onClick={() => onViewDetails(products[0])}
                        className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        Explore Specs
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
              Smart Collections
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Categories
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Explore 6 high-demand electronic accessory categories tailored for students and creators.
            </p>
          </div>
          <button
            onClick={onNavigateShop}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group self-start sm:self-auto cursor-pointer"
          >
            <span>View All 25 Products</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.filter(c => c.id !== 'all').map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-400 hover:shadow-lg transition-all duration-300 text-center cursor-pointer flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 group-hover:bg-brand-600 text-brand-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-brand-600 transition-colors">
                {cat.name}
              </h3>
              <span className="text-[11px] text-slate-400 mt-1 font-medium">
                {cat.count} Items
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROMOTIONAL FESTIVE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-8 sm:p-12 shadow-2xl border border-indigo-900/60">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase">
              Semester Tech Fest
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              TechNest Fest – Get Up to 30% to 50% OFF
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Upgrade your academic productivity with our Brown-Switch Mechanical Keyboards, GaN 65W Rapid Adapters, and Ergonomic Aluminum Stands at student-first pricing.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateShop}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Claim Festive Discounts
              </button>
              <button
                onClick={() => onNavigatePage('whatsapp-campaign')}
                className="px-6 py-3 rounded-xl bg-brand-500/30 hover:bg-brand-500/40 text-brand-200 border border-brand-400/30 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                View WhatsApp Deals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (6-8 PRODUCTS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
              Top Customer Picks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Electronics
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              High-performance gadgets verified by customer sentiment analysis.
            </p>
          </div>
          <button
            onClick={onNavigateShop}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group cursor-pointer"
          >
            <span>Explore All 25 Items</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE TECHNEST? */}
      <section className="bg-slate-50 border-y border-slate-200/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              The TechNest Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Choose TechNest?
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              We eliminate traditional middleman brand premiums to provide certified smart electronics directly to young achievers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Affordable Prices</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Factory-direct pricing ensuring students get premium specs without paying brand markups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Quality Products</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Rigorous 12-point quality testing with BIS electrical certifications across all 25 models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Fast Delivery</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Same-day warehouse dispatch with 1–3 day Express courier options across India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Secure Payments</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                256-bit encrypted simulated checkout supporting UPI, Cards, Net Banking, and COD.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Customer Support</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Dedicated WhatsApp helpline and ticketing helpdesk with 4-hour SLA resolution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SELECTED CUSTOMER REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
              Social Proof & Voice of Customer
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What TechNest Shoppers Say
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Verified feedback categorized by NLP sentiment analysis (CA1 Requirement C).
            </p>
          </div>
          <button
            onClick={() => onNavigatePage('reviews')}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group cursor-pointer"
          >
            <span>View Full Sentiment Dashboard</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev) => (
            <div 
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                      />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    rev.sentiment === 'Positive' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {rev.sentiment} (+{rev.sentimentScore})
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.customerName}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.customerName}</h4>
                  <p className="text-[11px] text-slate-400 truncate max-w-[180px]">{rev.productPurchased}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider">
              Stay Connected
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Subscribe to TechNest Insider
            </h2>
            <p className="text-xs sm:text-sm text-brand-100 leading-relaxed font-normal">
              Subscribe to receive new product updates, semester exam gadget checklists, and exclusive secret discount codes.
            </p>

            {newsletterSubscribed ? (
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-emerald-300" />
                <span>Thank you for subscribing! Your ₹150 welcome voucher has been queued.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your student email..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-900 text-xs sm:text-sm border-none focus:outline-hidden placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-brand-200">
              No spam ever. Unsubscribe at any time with one click.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
