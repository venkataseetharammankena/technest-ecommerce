import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, CreditCard, Smartphone, 
  Building, Banknote, Wallet, ArrowRight, CheckCircle2, 
  Lock, Truck, Sparkles, QrCode 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const CheckoutPage = ({ onOrderPlaced, onNavigateShop }) => {
  const { 
    cartItems, 
    cartSubtotal, 
    couponDiscount, 
    deliveryFee, 
    cartTotal,
    placeOrder 
  } = useCart();

  // Shipping form fields
  const [shippingForm, setShippingForm] = useState({
    fullName: 'Ramesh Sundaram',
    email: 'ramesh.sundaram@student.ac.in',
    phone: '+91 98765 43210',
    address: 'Flat 402, Sunshine Heights, 12th Main Road, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038'
  });

  const [shippingMethod, setShippingMethod] = useState('standard'); // 'standard' or 'express'
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'credit-card', 'debit-card', 'net-banking', 'cod', 'wallets'

  // Payment mock details
  const [upiId, setUpiId] = useState('ramesh@okhdfcbank');
  const [cardNumber, setCardNumber] = useState('4111 2222 3333 4444');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('781');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [selectedWallet, setSelectedWallet] = useState('Paytm Wallet');

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Recalculate total with express shipping option if selected
  const shippingCharge = shippingMethod === 'express' ? 149 : deliveryFee;
  const finalPayableTotal = Math.max(0, cartSubtotal - couponDiscount + shippingCharge);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    // Trigger fireworks confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback if canvas-confetti is not loaded
    }

    setTimeout(() => {
      const order = placeOrder({
        customer: {
          name: shippingForm.fullName,
          email: shippingForm.email,
          phone: shippingForm.phone,
          address: shippingForm.address,
          city: shippingForm.city,
          state: shippingForm.state,
          pincode: shippingForm.pincode
        },
        shippingTier: shippingMethod === 'express' ? 'Express Delivery (1–3 Days)' : 'Standard Delivery (3–7 Days)',
        shippingCost: shippingCharge,
        paymentMethod: paymentMethod === 'upi' ? `UPI (${upiId})` :
                       paymentMethod === 'credit-card' ? 'Credit Card (Simulated)' :
                       paymentMethod === 'debit-card' ? 'Debit Card (Simulated)' :
                       paymentMethod === 'net-banking' ? `Net Banking (${selectedBank})` :
                       paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : `Digital Wallet (${selectedWallet})`,
        finalTotal: finalPayableTotal
      });

      setIsSubmitting(false);
      onOrderPlaced(order);
    }, 1200);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Your cart is empty</h2>
        <p className="text-xs text-slate-500">Add products from our catalog before checking out.</p>
        <button
          onClick={onNavigateShop}
          className="px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Simulated Demonstration Checkout
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Complete shipping details and select your preferred simulated payment rail.
        </p>
      </div>

      {/* MANDATORY PROMINENT ACADEMIC DISCLAIMER */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex items-start gap-3 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm space-y-0.5">
          <span className="font-extrabold block text-amber-900 text-sm sm:text-base">
            "This is an academic demonstration store. No real payment will be processed."
          </span>
          <p className="text-amber-800 text-xs">
            This checkout flow satisfies MBA Continuous Assessment criteria (CA1 Requirements D & E). All bank gateways, cards, and UPI endpoints run in offline test simulation mode.
          </p>
        </div>
      </div>

      {/* Main Grid: Form on Left + Order Summary on Right */}
      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Shipping & Payment (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Section 1: Shipping Address */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h2 className="text-base font-bold text-slate-900">Delivery Address Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={shippingForm.fullName}
                  onChange={(e) => setShippingForm({ ...shippingForm, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Email for Invoicing *</label>
                <input
                  type="email"
                  required
                  value={shippingForm.email}
                  onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-bold text-slate-700 block mb-1">Mobile Number (For Courier OTP) *</label>
                <input
                  type="text"
                  required
                  value={shippingForm.phone}
                  onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-bold text-slate-700 block mb-1">Street Address, Hostel / Apartment *</label>
                <input
                  type="text"
                  required
                  value={shippingForm.address}
                  onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">City *</label>
                <input
                  type="text"
                  required
                  value={shippingForm.city}
                  onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">State / Province *</label>
                <input
                  type="text"
                  required
                  value={shippingForm.state}
                  onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Postal PIN Code *</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={shippingForm.pincode}
                  onChange={(e) => setShippingForm({ ...shippingForm, pincode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Delivery Speed Selection */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h2 className="text-base font-bold text-slate-900">Select Shipping Speed</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <label 
                onClick={() => setShippingMethod('standard')}
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  shippingMethod === 'standard' ? 'border-brand-600 bg-brand-50/40' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="shipping_tier"
                  checked={shippingMethod === 'standard'}
                  onChange={() => setShippingMethod('standard')}
                  className="mt-1 text-brand-600"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Standard Delivery</span>
                    <span className="font-extrabold text-emerald-600">
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-1">3–7 business days across India</p>
                  <span className="text-[10px] text-slate-400">Orders above ₹999 qualify for Free Shipping</span>
                </div>
              </label>

              <label 
                onClick={() => setShippingMethod('express')}
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  shippingMethod === 'express' ? 'border-brand-600 bg-brand-50/40' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="shipping_tier"
                  checked={shippingMethod === 'express'}
                  onChange={() => setShippingMethod('express')}
                  className="mt-1 text-brand-600"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Express Courier</span>
                    <span className="font-extrabold text-slate-900">+₹149</span>
                  </div>
                  <p className="text-slate-500 text-[11px] mt-1">1–3 business days prioritized air freight</p>
                  <span className="text-[10px] text-brand-600 font-semibold">Priority warehouse packaging</span>
                </div>
              </label>

            </div>
          </div>

          {/* Section 3: Payment Method Selection */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <span className="w-6 h-6 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h2 className="text-base font-bold text-slate-900">Select Payment Method (Simulation)</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  paymentMethod === 'upi' ? 'border-brand-600 bg-brand-50/60 font-bold' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="block text-slate-900">UPI Instant Pay</span>
                <span className="text-[10px] text-slate-400 font-normal">GPay, PhonePe, Paytm</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('credit-card')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  paymentMethod === 'credit-card' ? 'border-brand-600 bg-brand-50/60 font-bold' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-5 h-5 text-brand-600 mb-1" />
                <span className="block text-slate-900">Credit Card</span>
                <span className="text-[10px] text-slate-400 font-normal">Visa, Master, RuPay</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('debit-card')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  paymentMethod === 'debit-card' ? 'border-brand-600 bg-brand-50/60 font-bold' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-5 h-5 text-indigo-600 mb-1" />
                <span className="block text-slate-900">Debit Card</span>
                <span className="text-[10px] text-slate-400 font-normal">All Scheduled Banks</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('net-banking')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  paymentMethod === 'net-banking' ? 'border-brand-600 bg-brand-50/60 font-bold' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Building className="w-5 h-5 text-amber-600 mb-1" />
                <span className="block text-slate-900">Net Banking</span>
                <span className="text-[10px] text-slate-400 font-normal">50+ Indian Banks</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  paymentMethod === 'cod' ? 'border-brand-600 bg-brand-50/60 font-bold' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Banknote className="w-5 h-5 text-teal-600 mb-1" />
                <span className="block text-slate-900">Cash on Delivery</span>
                <span className="text-[10px] text-slate-400 font-normal">Pay at doorstep</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('wallets')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  paymentMethod === 'wallets' ? 'border-brand-600 bg-brand-50/60 font-bold' : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Wallet className="w-5 h-5 text-purple-600 mb-1" />
                <span className="block text-slate-900">Digital Wallets</span>
                <span className="text-[10px] text-slate-400 font-normal">Paytm, Amazon Pay</span>
              </button>

            </div>

            {/* Dynamic Simulated Input Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3 mt-4">
              {paymentMethod === 'upi' && (
                <div className="space-y-2">
                  <label className="font-bold text-slate-700 block">Virtual Payment Address (VPA)</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-mono text-xs"
                  />
                  <div className="flex items-center gap-3 pt-2">
                    <QrCode className="w-8 h-8 text-slate-700 shrink-0" />
                    <span className="text-[11px] text-slate-500">
                      Simulated QR code will auto-approve upon clicking 'Confirm Order'.
                    </span>
                  </div>
                </div>
              )}

              {(paymentMethod === 'credit-card' || paymentMethod === 'debit-card') && (
                <div className="space-y-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Card Number (Demo Sandbox)</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-mono text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Expiry</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">CVV</label>
                      <input
                        type="text"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'net-banking' && (
                <div className="space-y-2">
                  <label className="font-bold text-slate-700 block">Select Net Banking Bank</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs"
                  >
                    <option value="HDFC Bank">HDFC Bank Limited</option>
                    <option value="State Bank of India">State Bank of India</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="text-teal-900 space-y-1">
                  <span className="font-bold block">Cash on Delivery Confirmed</span>
                  <p className="text-[11px] text-slate-600">
                    Pay ₹{finalPayableTotal.toLocaleString('en-IN')} in cash or UPI QR upon courier arrival.
                  </p>
                </div>
              )}

              {paymentMethod === 'wallets' && (
                <div className="space-y-2">
                  <label className="font-bold text-slate-700 block">Select Digital Wallet</label>
                  <select
                    value={selectedWallet}
                    onChange={(e) => setSelectedWallet(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs"
                  >
                    <option value="Paytm Wallet">Paytm Wallet Balance</option>
                    <option value="Amazon Pay">Amazon Pay Balance</option>
                    <option value="MobiKwik">MobiKwik ZIP</option>
                  </select>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary & Place Order Button (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-5 sticky top-28">
            <h3 className="font-bold text-slate-900 text-base pb-3 border-b border-slate-100">
              Order Review ({cartItems.length} items)
            </h3>

            {/* Thumbnail items list */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1 divide-y divide-slate-100">
              {cartItems.map((item) => (
                <div key={item.product.id} className="pt-2 first:pt-0 flex items-center gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0 bg-slate-50"
                  />
                  <div className="flex-1 min-w-0 text-xs">
                    <h4 className="font-bold text-slate-800 truncate">{item.product.name}</h4>
                    <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900 shrink-0">
                    ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Student Coupon (TECHNEST10)</span>
                  <span>-₹{couponDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee ({shippingMethod === 'express' ? 'Express' : 'Standard'})</span>
                <span className="font-semibold text-slate-800">
                  {shippingCharge === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${shippingCharge}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                <span>Total Payable</span>
                <span className="text-xl text-brand-600">₹{finalPayableTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Submit Place Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-4 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-400 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-brand-500/25 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <span>Simulating Payment Gateway...</span>
              ) : (
                <>
                  <span>Place Demonstration Order</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 space-y-1 text-center">
              <div className="flex items-center justify-center gap-1 font-semibold text-slate-700">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Simulated PCI-DSS Encrypted Channel</span>
              </div>
              <p>No financial debit will take place. This generates a realistic order confirmation for academic review.</p>
            </div>

          </div>
        </div>

      </form>

    </div>
  );
};
