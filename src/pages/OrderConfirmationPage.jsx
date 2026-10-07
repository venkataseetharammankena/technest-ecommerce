import React from 'react';
import { 
  CheckCircle2, Package, Truck, ArrowRight, Printer, 
  ShoppingBag, ShieldCheck, ExternalLink, GraduationCap 
} from 'lucide-react';

export const OrderConfirmationPage = ({ order, onNavigateShop, onTrackOrder }) => {
  if (!order) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">No recent order found</h2>
        <button
          onClick={onNavigateShop}
          className="px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-in fade-in duration-500">
      
      {/* Success Hero */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
          Demo Order Confirmed
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Thank You for Your Order!
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
          Your simulated purchase has been logged successfully. An automated invoice receipt has been simulated for your academic demonstration.
        </p>
      </div>

      {/* Order Info Receipt Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden space-y-6">
        
        {/* Receipt Header Banner */}
        <div className="p-6 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-slate-400 block font-mono">ORDER IDENTIFIER</span>
            <span className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-brand-300">
              #{order.orderId}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block">ESTIMATED DELIVERY</span>
            <span className="text-sm font-bold text-emerald-400">
              {order.expectedDelivery}
            </span>
          </div>
        </div>

        {/* Details Summary Grid */}
        <div className="p-6 sm:p-8 space-y-6 pt-0">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 pb-6 border-b border-slate-100">
            <div>
              <strong className="block text-slate-900 font-bold mb-1">Shipping To:</strong>
              <p className="font-semibold text-slate-800">{order.customer?.name}</p>
              <p className="text-slate-500">{order.customer?.address}</p>
              <p className="text-slate-500">{order.customer?.city}, {order.customer?.state} - {order.customer?.pincode}</p>
              <p className="text-slate-400 mt-1">{order.customer?.phone}</p>
            </div>

            <div>
              <strong className="block text-slate-900 font-bold mb-1">Shipping Tier:</strong>
              <p className="text-slate-800 font-medium">{order.shippingTier || 'Standard Delivery'}</p>
              <span className="inline-block mt-1 px-2 py-0.5 rounded bg-blue-50 text-brand-700 text-[10px] font-bold">
                Carrier: BlueDart / Delhivery Air
              </span>
            </div>

            <div>
              <strong className="block text-slate-900 font-bold mb-1">Payment Method:</strong>
              <p className="text-slate-800 font-medium">{order.paymentMethod}</p>
              <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                Status: Simulated 200 OK
              </span>
            </div>
          </div>

          {/* Items Purchased List */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">Items in this Order</h3>
            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 p-4 space-y-3">
              {order.items?.map((item, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                    )}
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <span className="text-slate-400">Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <span className="font-extrabold text-slate-900">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Totals Table */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-800">₹{order.subtotal?.toLocaleString('en-IN')}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Discount</span>
                <span>-₹{order.discount?.toLocaleString('en-IN')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span>{order.shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${order.shipping}`}</span>
            </div>
            <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
              <span>Total Paid</span>
              <span className="text-xl text-brand-600">₹{order.total?.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onTrackOrder(order.orderId)}
              className="flex-1 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Truck className="w-4 h-4" />
              <span>Track This Order Live</span>
            </button>

            <button
              onClick={onNavigateShop}
              className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Continue Shopping</span>
            </button>
          </div>

        </div>

      </div>

      {/* Academic Note */}
      <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 flex items-center gap-3">
        <GraduationCap className="w-5 h-5 text-brand-600 shrink-0" />
        <p className="leading-relaxed">
          Order <strong>#{order.orderId}</strong> has been persisted into browser storage. You can view it in the <strong>Admin Demonstration Dashboard</strong> or enter it in the <strong>Shipping Tracker</strong> to demonstrate end-to-end functionality to your professor!
        </p>
      </div>

    </div>
  );
};
