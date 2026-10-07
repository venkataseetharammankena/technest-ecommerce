import React from 'react';
import { 
  DollarSign, ShoppingBag, PackagePlus, ShieldCheck, 
  Layers, Handshake, Percent, Sparkles, Repeat, 
  ArrowRight, CheckCircle2, TrendingUp, BarChart2 
} from 'lucide-react';
import { revenueStreams, revenueModelFlow } from '../data/revenueStreams';

export const RevenueGenerationPage = () => {
  const streamIcons = {
    1: <ShoppingBag className="w-6 h-6 text-blue-600" />,
    2: <PackagePlus className="w-6 h-6 text-indigo-600" />,
    3: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    4: <Layers className="w-6 h-6 text-purple-600" />,
    5: <Handshake className="w-6 h-6 text-amber-600" />,
    6: <Percent className="w-6 h-6 text-pink-600" />,
    7: <Sparkles className="w-6 h-6 text-cyan-600" />,
    8: <Repeat className="w-6 h-6 text-green-600" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold font-mono">
              CONTINUOUS ASSESSMENT 2 • SECTION K
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement K Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Revenue Generation Streams
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Strategic business monetization architecture. Demonstrating how TechNest captures direct margins, lifts basket sizes, and scales high-margin recurring services.
          </p>
        </div>
      </div>

      {/* Revenue Model Flow Visualization Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-600" />
              E-Commerce Revenue Architecture Model
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Strategic flow from initial customer acquisition to margin maximization
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            MBA Business Model
          </span>
        </div>

        {/* Horizontal Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {revenueModelFlow.map((flow, i) => (
            <div
              key={i}
              className="relative p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between text-center space-y-2"
            >
              <div className="text-[10px] font-mono font-bold text-slate-400">STAGE 0{i + 1}</div>
              <h4 className="font-bold text-slate-900 text-xs">{flow.step}</h4>
              <div className="text-[11px] text-slate-600 font-medium">
                {flow.role}
              </div>
              <div className="pt-2 border-t border-slate-200/60">
                <span className="px-2 py-0.5 rounded-full bg-white text-brand-700 text-[11px] font-extrabold border border-brand-200">
                  {flow.share} Share
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Flow Explanation Box */}
        <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-1">
          <strong className="text-indigo-900 block font-bold text-xs">
            Revenue Synergies in Action:
          </strong>
          <p>
            <strong>Product Sales</strong> forms the core 60% revenue foundation → <strong>Bundles</strong> immediately increase the Average Order Value (AOV) by +25% → <strong>Cross-selling</strong> adds high-margin accessory sundries → <strong>Extended Warranty (Shield+)</strong> delivers 85% gross margin without inventory risk → <strong>Brand & Affiliate Partnerships</strong> generate pure commission flows.
          </p>
        </div>
      </div>

      {/* 8 Detailed Revenue Streams Cards */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            Comprehensive 8 Monetization Channels
          </h3>
          <span className="text-xs text-slate-400">MBA Syllabus Reference</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {revenueStreams.map((stream) => (
            <div
              key={stream.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-400 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 shrink-0">
                      {streamIcons[stream.id]}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        STREAM {stream.id.toString().padStart(2, '0')}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">{stream.title}</h4>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 shrink-0">
                    {stream.contributionPct}% Share
                  </span>
                </div>

                {/* Subtitle / Role */}
                <div className="text-xs font-semibold text-emerald-700 mb-2">
                  Role: {stream.roleInModel} • Gross Margin: {stream.margin}
                </div>

                {/* Explanation */}
                <div className="space-y-1 text-xs text-slate-600 leading-relaxed mb-3">
                  <strong className="text-slate-900 block text-xs">Monetization Explanation:</strong>
                  <p>{stream.explanation}</p>
                </div>

                {/* Example */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                  <strong className="text-indigo-900 font-bold block text-[11px] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Practical TechNest Example:
                  </strong>
                  <p className="text-slate-700 text-[11px] italic leading-relaxed">
                    "{stream.example}"
                  </p>
                </div>
              </div>

              {/* Scalability Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Scalability: <strong className="text-slate-800">{stream.scalability}</strong></span>
                <span className="font-mono text-emerald-600 font-bold">Margin: {stream.margin}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
