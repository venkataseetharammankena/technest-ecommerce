import React, { useState } from 'react';
import { 
  X, Star, ShieldCheck, Truck, RotateCcw, CheckCircle2, 
  ShoppingBag, Zap, Heart, Share2, Layers 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductModal = ({ product, onClose, onGoToCheckout }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imgError, setImgError] = useState(false);

  if (!product) return null;

  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="%23f1f5f9"><rect width="600" height="600" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="22" font-weight="600" fill="%2364748b" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(product.name)}</text></svg>`;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    onClose();
    if (onGoToCheckout) onGoToCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image & Highlights */}
          <div className="p-6 md:p-8 bg-slate-50/70 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-white">
                  {product.id}
                </span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  product.caPhase === 'CA2' ? 'bg-purple-100 text-purple-700' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {product.caPhase} Catalog
                </span>
              </div>

              {/* Main Image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs relative">
                <img
                  src={imgError ? fallbackSvg : product.image}
                  alt={product.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-xs font-extrabold bg-rose-600 text-white shadow-sm">
                  Save {product.discount}%
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-slate-200/80 text-center text-[11px] text-slate-600">
              <div className="p-2 rounded-xl bg-white border border-slate-200/60">
                <ShieldCheck className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                <span className="font-semibold block">1-Yr Warranty</span>
                <span className="text-[10px] text-slate-400">Doorstep repair</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200/60">
                <Truck className="w-4 h-4 mx-auto text-brand-600 mb-1" />
                <span className="font-semibold block">Free Shipping</span>
                <span className="text-[10px] text-slate-400">On ₹999+</span>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200/60">
                <RotateCcw className="w-4 h-4 mx-auto text-purple-600 mb-1" />
                <span className="font-semibold block">7-Day Return</span>
                <span className="text-[10px] text-slate-400">Easy replacement</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Purchasing */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-brand-600 uppercase tracking-wider text-xs">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60 text-amber-900 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              {/* Title & Brand */}
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                {product.name}
              </h2>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <span>Brand: <strong className="text-slate-800">{product.brand}</strong></span>
                <span>•</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {product.stockStatus} ({product.stockCount} units ready)
                </span>
              </div>

              {/* Price Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700">
                    You save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} ({product.discount}% OFF)
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">Inclusive of all taxes</span>
              </div>

              {/* Detailed Description */}
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Product Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Specifications
                </h4>
                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                  {Object.entries(product.specifications || {}).map(([key, val], idx) => (
                    <div key={idx} className="grid grid-cols-2 p-2 px-3 bg-white hover:bg-slate-50">
                      <span className="font-semibold text-slate-600">{key}</span>
                      <span className="text-slate-800">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: Quantity & Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 hover:bg-slate-100 text-slate-700 font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-slate-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 hover:bg-slate-100 text-slate-700 font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="py-3 px-4 rounded-xl border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
