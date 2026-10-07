import React, { useState } from 'react';
import { 
  Truck, Clock, ShieldCheck, MapPin, Search, CheckCircle2, 
  AlertCircle, Package, ArrowRight, RotateCcw, HelpCircle, Navigation 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ShippingPage = ({ onNavigateCheckout }) => {
  const { orders } = useCart();
  const [trackingIdInput, setTrackingIdInput] = useState('TN-98421');
  const [activeTracking, setActiveTracking] = useState({
    orderId: "TN-98421",
    status: "In Transit",
    courier: "BlueDart Express (AWB: BLR-8839120)",
    currentLocation: "Bengaluru Central Sorting Hub, Karnataka",
    estimatedDelivery: "08 Oct 2026, by 6:00 PM",
    events: [
      { step: "Order Placed", time: "05 Oct, 02:32 PM", done: true, desc: "Order details verified & invoice generated." },
      { step: "Packed & Sealed", time: "05 Oct, 05:40 PM", done: true, desc: "Antistatic packaging & quality check passed." },
      { step: "Handed to Courier", time: "06 Oct, 10:15 AM", done: true, desc: "Dispatched from TechNest Electronic Hub." },
      { step: "In Transit", time: "07 Oct, 08:30 AM", done: true, current: true, desc: "En route to local delivery center." },
      { step: "Out for Delivery", time: "Pending", done: false, desc: "Rider assigned with delivery OTP." },
      { step: "Delivered", time: "Pending", done: false, desc: "Doorstep delivery & signature." }
    ]
  });

  const [pincodeInput, setPincodeInput] = useState('');
  const [pincodeResult, setPincodeResult] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    if (!trackingIdInput.trim()) return;

    // Check if matching order in context
    const foundOrder = orders.find(o => o.orderId.toUpperCase() === trackingIdInput.trim().toUpperCase());

    if (foundOrder) {
      setActiveTracking({
        orderId: foundOrder.orderId,
        status: foundOrder.status || "In Transit",
        courier: "Delhivery Air Logistics (AWB: DEL-490218)",
        currentLocation: `${foundOrder.customer?.city || 'Regional Hub'}, ${foundOrder.customer?.state || 'India'}`,
        estimatedDelivery: foundOrder.expectedDelivery || "In 3 Business Days",
        events: [
          { step: "Order Placed", time: foundOrder.date, done: true, desc: "Order confirmed successfully." },
          { step: "Packed & Sealed", time: "Same Day, 6:00 PM", done: true, desc: "Items cushioned with shockproof buffers." },
          { step: "In Transit", time: "In Progress", done: true, current: true, desc: "Package moving across freight network." },
          { step: "Delivered", time: "Pending", done: false, desc: "Doorstep handover." }
        ]
      });
    } else {
      // Default simulated tracker for any ID entered
      setActiveTracking({
        orderId: trackingIdInput.trim().toUpperCase(),
        status: "In Transit",
        courier: "Express Air Cargo (AWB: TAC-991204)",
        currentLocation: "National Distribution Center, Hub 4",
        estimatedDelivery: "Delivery within 2–4 Business Days",
        events: [
          { step: "Order Placed", time: "Recorded", done: true, desc: "Inventory allocated & payment captured." },
          { step: "Packed & Sealed", time: "Recorded", done: true, desc: "Tamper-evident security tape applied." },
          { step: "In Transit", time: "Active", done: true, current: true, desc: "Package is on schedule for regional transit." },
          { step: "Delivered", time: "Pending", done: false, desc: "Delivery executive will contact via SMS/call." }
        ]
      });
    }
  };

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (!pincodeInput.trim()) return;
    const cleanPin = pincodeInput.trim();
    if (cleanPin.length === 6 && /^\d+$/.test(cleanPin)) {
      setPincodeResult({
        serviceable: true,
        tier: cleanPin.startsWith('56') || cleanPin.startsWith('11') || cleanPin.startsWith('40') ? 'Tier 1 Metro (Express 1-2 Days)' : 'Standard Zone (3-5 Days)',
        codAvailable: true,
        message: `Postal Code ${cleanPin} is fully serviceable for both Prepaid & Cash on Delivery.`
      });
    } else {
      setPincodeResult({
        serviceable: false,
        message: 'Please enter a valid 6-digit Indian PIN code.'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold font-mono">
              CA1 SECTION D
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Shipping & Delivery Terms
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Reliable, safe, and expedited fulfillment across India. Transparent timelines, free shipping thresholds, and real-time package milestone tracking.
          </p>
        </div>
      </div>

      {/* Delivery Tiers Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1: Standard */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-600 flex items-center justify-center">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Standard Delivery</h3>
            <p className="text-xs text-slate-500 mt-1">Everyday pan-India surface logistics</p>
          </div>
          <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Timeline:</span>
              <span className="font-bold text-slate-900">3–7 Business Days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Orders above ₹999:</span>
              <span className="font-bold text-emerald-600 uppercase">FREE Delivery</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Orders below ₹999:</span>
              <span className="font-bold text-slate-900">₹79 Flat Rate</span>
            </div>
          </div>
        </div>

        {/* Tier 2: Express */}
        <div className="p-6 rounded-3xl bg-white border-2 border-brand-500/30 shadow-lg relative space-y-4">
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 text-[10px] font-bold">
              POPULAR
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Express Delivery</h3>
            <p className="text-xs text-slate-500 mt-1">Air courier for urgent requirements</p>
          </div>
          <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Timeline:</span>
              <span className="font-bold text-slate-900">1–3 Business Days</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Metro Hubs:</span>
              <span className="font-bold text-emerald-600">Next-Day Dispatched</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Express Surcharge:</span>
              <span className="font-bold text-slate-900">₹149 Optional Add-on</span>
            </div>
          </div>
        </div>

        {/* Tier 3: Same Day Dispatch */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Same-Day Dispatch</h3>
            <p className="text-xs text-slate-500 mt-1">Warehouse automation standard</p>
          </div>
          <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Cut-off Time:</span>
              <span className="font-bold text-slate-900">2:00 PM IST (Mon–Sat)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Packaging:</span>
              <span className="font-bold text-slate-900">Anti-Static Sealed</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Tracking SMS:</span>
              <span className="font-bold text-emerald-600">Sent within 2 Hours</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Order Tracking Simulator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-brand-600" />
              Live Order Tracking Simulator
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter any TechNest Order ID (e.g. <strong>TN-98421</strong> or <strong>TN-98319</strong>) to inspect milestone progress.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleTrackOrder} className="flex gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="e.g. TN-98421"
              value={trackingIdInput}
              onChange={(e) => setTrackingIdInput(e.target.value)}
              className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-mono uppercase border border-slate-200 focus:outline-hidden focus:border-brand-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Track Package
            </button>
          </form>
        </div>

        {/* Tracking Details Banner */}
        <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Order Number:</span>
            <span className="font-mono font-bold text-slate-900 text-sm">{activeTracking.orderId}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Courier Partner:</span>
            <span className="font-semibold text-slate-800">{activeTracking.courier}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Current Location:</span>
            <span className="font-semibold text-slate-800 truncate block">{activeTracking.currentLocation}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Estimated Handover:</span>
            <span className="font-bold text-emerald-700">{activeTracking.estimatedDelivery}</span>
          </div>
        </div>

        {/* Milestone Steps Timeline */}
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {activeTracking.events.map((ev, idx) => (
              <div key={idx} className="relative flex flex-col items-start md:items-center text-left md:text-center space-y-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${
                  ev.done
                    ? ev.current
                      ? 'bg-brand-600 text-white ring-4 ring-brand-100 animate-pulse'
                      : 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-400 border border-slate-200'
                }`}>
                  {ev.done ? '✓' : idx + 1}
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${ev.done ? 'text-slate-900' : 'text-slate-400'}`}>
                    {ev.step}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
                    {ev.time}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1 max-w-[130px]">
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PIN Code Checker & Delivery Coverage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Postal Code Serviceability Tool */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-600" />
            <h3 className="font-bold text-slate-900 text-lg">Check PIN Code Serviceability</h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Verify estimated delivery dates and Cash on Delivery (COD) eligibility for your university campus or residence.
          </p>

          <form onSubmit={handleCheckPincode} className="flex gap-2">
            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit PIN code (e.g. 560001)"
              value={pincodeInput}
              onChange={(e) => setPincodeInput(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-slate-50 rounded-xl text-xs border border-slate-200 focus:outline-hidden focus:border-brand-500 font-mono"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              Verify
            </button>
          </form>

          {pincodeResult && (
            <div className={`p-4 rounded-2xl text-xs space-y-1.5 ${
              pincodeResult.serviceable ? 'bg-emerald-50 border border-emerald-200 text-emerald-950' : 'bg-rose-50 border border-rose-200 text-rose-950'
            }`}>
              <div className="font-bold flex items-center gap-1.5">
                {pincodeResult.serviceable ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
                <span>{pincodeResult.serviceable ? 'Eligible for Express Delivery!' : 'Invalid Format'}</span>
              </div>
              <p className="text-[11px] leading-relaxed">{pincodeResult.message}</p>
              {pincodeResult.tier && (
                <div className="text-[11px] font-semibold text-emerald-800 pt-1">
                  Zone: {pincodeResult.tier}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Shipping Restrictions & Return to Sender */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-slate-900 text-lg">Failed Delivery & RTS Policy</h3>
          </div>
          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <div>
              <strong className="text-slate-900 block mb-0.5">3 Delivery Attempts:</strong>
              Our logistics partner will make up to three physical delivery attempts. An SMS OTP is triggered on the morning of delivery to ensure personal handover.
            </div>
            <div>
              <strong className="text-slate-900 block mb-0.5">Return to Sender (RTS):</strong>
              If a package is uncollected after 3 attempts or recipient refuses delivery, it returns to our fulfillment center. Prepaid amounts are automatically refunded within 48 hours of return inspection.
            </div>
            <div>
              <strong className="text-slate-900 block mb-0.5">Shipping Restrictions:</strong>
              Power banks and lithium-polymer batteries are strictly transported via specialized ground cargo compliance (IATA Dangerous Goods Regulation compliant).
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
