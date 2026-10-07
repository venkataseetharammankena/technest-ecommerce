import React from 'react';
import { 
  Globe, MessageSquare, Instagram, Facebook, Mail, 
  ArrowRight, CheckCircle2, TrendingUp, Users, Target, 
  Zap, Share2, Sparkles 
} from 'lucide-react';
import { salesChannels } from '../data/channels';

export const SalesChannelsPage = ({ onNavigatePage }) => {
  const channelIcons = {
    web: <Globe className="w-6 h-6 text-blue-600" />,
    whatsapp: <MessageSquare className="w-6 h-6 text-emerald-600" />,
    instagram: <Instagram className="w-6 h-6 text-pink-600" />,
    facebook: <Facebook className="w-6 h-6 text-blue-700" />,
    email: <Mail className="w-6 h-6 text-purple-600" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold font-mono">
              CA1 SECTION F
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Omnichannel Strategy Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            TechNest Sales Channels
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Multi-touch customer acquisition and conversational commerce framework. Demonstrating how TechNest acquires, converts, and retains diverse consumer segments.
          </p>
        </div>
      </div>

      {/* Omnichannel Architecture Overview */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-brand-600" />
              Omnichannel Revenue Contribution Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Integrated attribution model across all 5 active sales channels
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
            5 Channels Unified
          </span>
        </div>

        {/* Visual share bar */}
        <div className="space-y-2">
          <div className="h-6 rounded-xl overflow-hidden flex text-[10px] font-bold text-white shadow-inner">
            <div style={{ width: '55%' }} className="bg-blue-600 flex items-center justify-center truncate px-1">
              Website (55%)
            </div>
            <div style={{ width: '18%' }} className="bg-emerald-600 flex items-center justify-center truncate px-1">
              WhatsApp (18%)
            </div>
            <div style={{ width: '12%' }} className="bg-pink-600 flex items-center justify-center truncate px-1">
              Insta (12%)
            </div>
            <div style={{ width: '8%' }} className="bg-indigo-800 flex items-center justify-center truncate px-1">
              FB (8%)
            </div>
            <div style={{ width: '7%' }} className="bg-purple-600 flex items-center justify-center truncate px-1">
              Email (7%)
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Website (55%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> WhatsApp (18%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-pink-600"></span> Instagram (12%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-800"></span> Facebook (8%)</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Email (7%)</span>
          </div>
        </div>
      </div>

      {/* 5 Detailed Sales Channel Cards */}
      <div className="space-y-6">
        {salesChannels.map((channel, idx) => (
          <div
            key={channel.id}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-300 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Left Col: Channel Header & Purpose */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 shrink-0">
                  {channelIcons[channel.id]}
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-mono">
                    CHANNEL 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">{channel.name}</h3>
                </div>
              </div>

              <div className="text-xs font-semibold text-brand-600">
                {channel.tagline}
              </div>

              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Core Purpose
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {channel.purpose}
                </p>
              </div>
            </div>

            {/* Middle Col: Target Audience & Example Activity */}
            <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-slate-100 lg:pl-6 text-xs text-slate-600">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Target className="w-3.5 h-3.5 text-brand-600" />
                  Target Customers
                </div>
                <p className="leading-relaxed">{channel.targetCustomers}</p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Example Marketing Activity
                </div>
                <p className="text-[11px] text-slate-600 italic leading-relaxed">
                  "{channel.exampleActivity}"
                </p>
              </div>
            </div>

            {/* Right Col: Performance Metrics & CTA */}
            <div className="lg:col-span-3 space-y-4 lg:border-l lg:border-slate-100 lg:pl-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Channel Key Metrics
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Sales Share</span>
                    <span className="text-base font-extrabold text-slate-900">{channel.keyMetrics.share}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Conversion</span>
                    <span className="text-base font-extrabold text-emerald-600">{channel.keyMetrics.conversionRate}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                    <span className="text-[10px] text-slate-400 block">Avg Order Value</span>
                    <span className="text-sm font-bold text-slate-800">{channel.keyMetrics.avgOrderValue}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigatePage(channel.actionLink)}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <span>{channel.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
