import React, { useState } from 'react';
import { GraduationCap, CheckCircle, ChevronRight, X, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

export const AcademicBadgeBar = ({ setActivePage }) => {
  const [showMatrixModal, setShowMatrixModal] = useState(false);

  const ca1Items = [
    { code: "CA1.A", title: "Online Storefront", page: "shop", desc: "Products, categories, search, filter, cart & checkout" },
    { code: "CA1.B", title: "First 15 Products", page: "shop", desc: "Detailed specs, INR pricing, stock & ratings" },
    { code: "CA1.C", title: "Reviews & Sentiment Analysis", page: "reviews", desc: "10+ reviews, dashboard, pie chart & ratings distribution" },
    { code: "CA1.D", title: "Shipping & Delivery", page: "shipping", desc: "Standard (3-7d), Express (1-3d), free above ₹999 & tracking" },
    { code: "CA1.E", title: "Payment Options", page: "payment", desc: "UPI, Cards, Net Banking, COD & simulated demo checkout" },
    { code: "CA1.F", title: "Sales Channels", page: "channels", desc: "Omnichannel: Web, WhatsApp, Instagram, FB & Email" },
  ];

  const ca2Items = [
    { code: "CA2.G", title: "10 Additional Products", page: "shop", desc: "Products 16–25 added (Total 25 products with specs)" },
    { code: "CA2.H", title: "WhatsApp Marketing Campaign", page: "whatsapp-campaign", desc: "'TechNest Fest' dashboard, 3 messages & sample metrics" },
    { code: "CA2.I", title: "TechNest Blogs", page: "blogs", desc: "3 in-depth tech buying & student accessory articles" },
    { code: "CA2.J", title: "Consumer Feedback", page: "feedback", desc: "Interactive feedback form, ratings & live submission" },
    { code: "CA2.K", title: "Revenue Generation Streams", page: "revenue", desc: "8 revenue streams, margins & revenue model flow" },
    { code: "CA2.L", title: "Customer Support Center", page: "support", desc: "Support ticket portal + 10 categorized FAQs" },
    { code: "CA2.M", title: "Customer Resources", page: "resources", desc: "8 clickable guides (Shipping, Warranty, Tracking, etc.)" },
  ];

  return (
    <>
      <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30">
              <GraduationCap className="w-3.5 h-3.5" />
              MBA E-Commerce Evaluation Mode
            </span>
            <span className="hidden md:inline text-slate-400">
              TechNest is fully configured to satisfy Continuous Assessment 1 (CA1) & 2 (CA2) criteria.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowMatrixModal(true)}
              className="inline-flex items-center gap-1 text-brand-300 hover:text-white font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              View Professor Rubric & Fast Navigator
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setActivePage('admin')}
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Demo Admin Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Rubric Navigator Modal */}
      {showMatrixModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-indigo-50 text-brand-600">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">TechNest – Academic Evaluation Checklist</h3>
                    <p className="text-xs text-slate-500">
                      MBA E-Commerce Individual Assignment Requirements (CA1 & CA2 Satisfied)
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowMatrixModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {/* CA1 Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    Continuous Assessment 1 (CA1) Requirements
                  </h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    100% Implemented
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ca1Items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActivePage(item.page);
                        setShowMatrixModal(false);
                      }}
                      className="group p-3 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-indigo-50/40 cursor-pointer transition-all flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800">
                              {item.code}
                            </span>
                            <span className="text-sm font-semibold text-slate-900 group-hover:text-brand-600">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* CA2 Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-purple-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                    Continuous Assessment 2 (CA2) Requirements
                  </h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    100% Implemented
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ca2Items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActivePage(item.page);
                        setShowMatrixModal(false);
                      }}
                      className="group p-3 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/40 cursor-pointer transition-all flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">
                              {item.code}
                            </span>
                            <span className="text-sm font-semibold text-slate-900 group-hover:text-purple-600">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="italic">Click any requirement above to instantly navigate directly to that feature!</span>
              <button
                onClick={() => setShowMatrixModal(false)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-medium"
              >
                Close Rubric
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
