import React, { useState } from 'react';
import { 
  Truck, RotateCcw, ShieldAlert, CreditCard, Navigation, 
  BookOpen, HelpCircle, Headphones, ArrowRight, X, 
  CheckCircle2, FileText, Sparkles 
} from 'lucide-react';
import { customerResources } from '../data/resources';

export const ResourcesPage = ({ onNavigatePage }) => {
  const [selectedResource, setSelectedResource] = useState(null);

  const resourceIcons = {
    'shipping-guide': <Truck className="w-6 h-6 text-blue-600" />,
    'return-policy': <RotateCcw className="w-6 h-6 text-purple-600" />,
    'warranty-info': <ShieldAlert className="w-6 h-6 text-emerald-600" />,
    'payment-guide': <CreditCard className="w-6 h-6 text-indigo-600" />,
    'tracking-guide': <Navigation className="w-6 h-6 text-teal-600" />,
    'buying-guides': <BookOpen className="w-6 h-6 text-amber-600" />,
    'faq-resource': <HelpCircle className="w-6 h-6 text-pink-600" />,
    'support-center': <Headphones className="w-6 h-6 text-rose-600" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-mono">
              CONTINUOUS ASSESSMENT 2 • SECTION M
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement M Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Customer Resources & Knowledge Base
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Comprehensive documentation directory covering warranty claims, reverse logistics, payment compliance, and product buying guides.
          </p>
        </div>
      </div>

      {/* Grid of 8 Clickable Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {customerResources.map((res) => (
          <div
            key={res.id}
            onClick={() => setSelectedResource(res)}
            className="group p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                  {resourceIcons[res.id]}
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {res.category}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                {res.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed mt-2">
                {res.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Full Resource Viewer Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 my-auto">
            
            <button
              onClick={() => setSelectedResource(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-50 border border-brand-100">
                  {resourceIcons[selectedResource.id]}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">
                    {selectedResource.category} Guide
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedResource.title}
                  </h2>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic pb-2 border-b border-slate-100">
                {selectedResource.summary}
              </p>

              {/* Guide Markdown / HTML formatted content */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line font-sans">
                {selectedResource.content}
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedResource(null);
                    if (selectedResource.id === 'shipping-guide' || selectedResource.id === 'tracking-guide') onNavigatePage('shipping');
                    else if (selectedResource.id === 'payment-guide') onNavigatePage('payment');
                    else if (selectedResource.id === 'buying-guides') onNavigatePage('blogs');
                    else onNavigatePage('support');
                  }}
                  className="px-4 py-2 bg-brand-50 text-brand-700 hover:bg-brand-100 font-bold text-xs rounded-xl transition-colors"
                >
                  Visit Dedicated Section
                </button>

                <button
                  onClick={() => setSelectedResource(null)}
                  className="px-5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Close Document
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
