import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Zap, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  // Safe fallback image for electronics
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="%23f1f5f9"><rect width="400" height="400" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="18" font-weight="600" fill="%2364748b" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(product.name)}</text></svg>`;

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group relative bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5">
          {product.badge && (
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-xs ${
              product.badge.includes('CA2')
                ? 'bg-purple-600 text-white'
                : product.badge === 'Bestseller'
                ? 'bg-amber-500 text-white'
                : 'bg-brand-600 text-white'
            }`}>
              {product.badge}
            </span>
          )}
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-900/80 text-white backdrop-blur-xs">
            {product.id}
          </span>
        </div>

        <span className="px-2 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-600 border border-rose-200">
          {product.discount}% OFF
        </span>
      </div>

      {/* Image Area */}
      <div className="relative aspect-4/3 bg-slate-50 overflow-hidden">
        <img
          src={imgError ? fallbackSvg : product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Quick View overlay button */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-3.5 py-2 rounded-xl bg-white/95 text-slate-800 text-xs font-semibold shadow-lg hover:bg-white hover:text-brand-600 flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick Specs
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-brand-600 uppercase tracking-wider text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60 text-amber-900 font-bold text-[11px]">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-1 text-base">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Add to Cart button */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-slate-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {product.stockStatus}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className={`p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow-brand-500/25'
            }`}
            title="Add to cart"
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
