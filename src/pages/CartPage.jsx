import React, { useState } from 'react';
import { 
  ShoppingBag, Trash2, ArrowRight, ShieldCheck, Tag, 
  CheckCircle2, ArrowLeft, Truck, Sparkles 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage = ({ onNavigateShop, onNavigateCheckout }) => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal, 
    cartOriginalTotal, 
    productDiscount, 
    deliveryFee, 
    cartTotal,
    appliedCoupon,
    couponDiscount,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');

  const freeShippingThreshold = 999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingPct = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponCode('');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Your Shopping Cart is Empty</h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          You have not added any electronics to your cart yet. Explore our 25 smart gadgets with student discounts and fast delivery.
        </p>
        <button
          onClick={onNavigateShop}
          className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-brand-500/25 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Shopping Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)} Items)
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review your selected electronics before proceeding to simulated demonstration checkout.
          </p>
        </div>
        <button
          onClick={onNavigateShop}
          className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>
      </div>

      {/* Free Shipping Meter */}
      <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2">
        <div className="flex items-center justify-between text-xs font-medium">
          {remainingForFreeShipping > 0 ? (
            <span className="text-slate-700">
              Add <strong className="text-brand-700 font-bold">₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more to unlock <span className="text-emerald-700 font-bold">FREE Delivery</span>
            </span>
          ) : (
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              You qualify for FREE Standard Delivery on this order!
            </span>
          )}
          <span className="text-slate-500 text-[11px]">{freeShippingPct}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              remainingForFreeShipping === 0 ? 'bg-emerald-500' : 'bg-brand-600'
            }`}
            style={{ width: `${freeShippingPct}%` }}
          />
        </div>
      </div>

      {/* Cart Grid: Items Table on Left + Order Summary on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Items Table (8 Cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400 grid grid-cols-12 gap-4">
            <span className="col-span-6 sm:col-span-6">Product</span>
            <span className="col-span-3 sm:col-span-3 text-center">Quantity</span>
            <span className="col-span-3 sm:col-span-3 text-right">Total</span>
          </div>

          <div className="divide-y divide-slate-100 p-5 space-y-4">
            {cartItems.map((item) => (
              <div key={item.product.id} className="pt-4 first:pt-0 grid grid-cols-12 gap-4 items-center">
                
                {/* Product Info */}
                <div className="col-span-6 flex items-center gap-3.5">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shrink-0 bg-slate-50"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      {item.product.id}
                    </span>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">{item.product.category}</p>
                    <div className="text-xs font-bold text-slate-800 mt-1">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-200 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-200 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal & Delete */}
                <div className="col-span-3 text-right flex items-center justify-end gap-3">
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-slate-400 hover:text-rose-500 p-1.5 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-5">
            <h3 className="font-bold text-slate-900 text-base pb-3 border-b border-slate-100">
              Order Summary
            </h3>

            {/* Coupon Code Section */}
            {appliedCoupon ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Promo <strong>{appliedCoupon}</strong> Applied</span>
                </div>
                <button
                  onClick={removeCoupon}
                  className="text-xs text-emerald-700 hover:text-emerald-900 underline font-medium"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. TECHNEST10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-500 font-mono"
                    />
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="text-[11px] text-rose-500">{couponError}</p>}
              </form>
            )}

            {/* Breakdown */}
            <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-slate-800">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>

              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Student Promo Discount (10%)</span>
                  <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                <span>Total Amount</span>
                <span className="text-lg text-brand-600">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={onNavigateCheckout}
              className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-brand-500/25 transition-all cursor-pointer"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Simulated Academic Checkout • No Money Deducted</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
