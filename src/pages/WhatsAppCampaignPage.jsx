import React, { useState } from 'react';
import { 
  MessageCircle, Send, CheckCheck, Clock, Users, Target, 
  Sparkles, ArrowRight, ExternalLink, ShieldCheck, CheckCircle2, 
  ShoppingBag, HelpCircle, AlertCircle, TrendingUp, BarChart2 
} from 'lucide-react';
import { campaignOverview, sampleMetrics, whatsappMessages } from '../data/campaign';

export const WhatsAppCampaignPage = ({ onNavigatePage }) => {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const activeMsg = whatsappMessages[activeMessageIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & CA2 Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
              CONTINUOUS ASSESSMENT 2 • SECTION H
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement H Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            WhatsApp Marketing Campaign
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Direct-to-consumer conversational broadcast and interactive recovery funnel for the semester kickoff electronics promotion.
          </p>
        </div>
      </div>

      {/* Campaign Dashboard Overview Cards */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
              Live Campaign Framework
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              {campaignOverview.campaignName}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              Active Duration: {campaignOverview.duration}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-700">
          
          {/* Objectives */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-600" />
              Campaign Objectives
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-600">
              {campaignOverview.objective.map((obj, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-indigo-600" />
              Target Audience
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-600">
              {campaignOverview.targetAudience.map((aud, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Offer & CTA */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Promotional Offer
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-semibold text-emerald-800">
                {campaignOverview.promotionalOffer}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/60">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-0.5">
                Primary Call-to-Action
              </h4>
              <p className="text-[11px] text-slate-600">
                {campaignOverview.callToAction}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Sample Campaign Metrics Dashboard */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Performance Analytics
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                Sample / Demo Campaign Metrics
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight mt-1">
              WhatsApp Broadcast Funnel Conversion
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            Official Meta Cloud API Simulated Telemetry
          </span>
        </div>

        {/* 5 Funnel KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block">Messages Sent</span>
            <span className="text-2xl font-extrabold text-white mt-1 block">
              {sampleMetrics.messagesSent.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] text-slate-400 mt-1 block">100% Broadcast Out</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block">Delivered</span>
            <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">
              {sampleMetrics.messagesDelivered.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] text-emerald-300 mt-1 block font-semibold">{sampleMetrics.deliveryRate} Delivery Rate</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block">Opened (Read)</span>
            <span className="text-2xl font-extrabold text-teal-300 mt-1 block">
              {sampleMetrics.messagesOpened.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] text-teal-200 mt-1 block font-semibold">{sampleMetrics.openRate} Open Rate</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
            <span className="text-xs text-slate-400 block">Link Clicks</span>
            <span className="text-2xl font-extrabold text-blue-400 mt-1 block">
              {sampleMetrics.linkClicks.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] text-blue-300 mt-1 block font-semibold">{sampleMetrics.clickRate} Click-through</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 col-span-2 md:col-span-1">
            <span className="text-xs text-slate-400 block">Expected Orders</span>
            <span className="text-2xl font-extrabold text-amber-400 mt-1 block">
              {sampleMetrics.expectedConversions}
            </span>
            <span className="text-[10px] text-amber-300 mt-1 block font-semibold">{sampleMetrics.conversionRate} Conversion Rate</span>
          </div>
        </div>

        {/* Financial ROI Summary */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[11px]">Estimated Gross Revenue:</span>
            <strong className="text-lg font-extrabold text-emerald-400">{sampleMetrics.estimatedRevenue}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Avg Order Value (AOV):</span>
            <strong className="text-white">{sampleMetrics.avgOrderValue}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Messaging API Expense:</span>
            <strong className="text-slate-300">{sampleMetrics.campaignCost}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">Campaign Efficiency:</span>
            <strong className="text-amber-300">{sampleMetrics.estimatedROI}</strong>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 italic text-center">
          * Note: Data displayed represents simulated / sample campaign metrics modeled for academic evaluation of conversational commerce ROI.
        </p>
      </div>

      {/* 3 WhatsApp Promotional Messages Preview Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Interactive WhatsApp Broadcast Messages (3 Blasts)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Toggle between the 3 planned campaign messages to view realistic WhatsApp smartphone rendering.
            </p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            {whatsappMessages.map((msg, idx) => (
              <button
                key={msg.id}
                onClick={() => setActiveMessageIndex(idx)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeMessageIndex === idx ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Blast {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Smartphone Simulator */}
        <div className="max-w-md mx-auto bg-slate-900 rounded-[40px] p-4 shadow-2xl border-4 border-slate-800">
          
          {/* Phone Screen Container */}
          <div className="bg-[#0b141a] text-slate-100 rounded-[32px] overflow-hidden flex flex-col min-h-[580px] text-xs">
            
            {/* WhatsApp Top App Bar */}
            <div className="bg-[#202c33] p-3 flex items-center justify-between border-b border-[#2a3942]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-extrabold text-sm">
                  TN
                </div>
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-1">
                    <span>TechNest Store</span>
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-[9px] flex items-center justify-center text-black font-bold">✓</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">Official Business Account</span>
                </div>
              </div>
              <span className="text-[10px] text-slate-400">WhatsApp</span>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px]">
              
              <div className="text-center">
                <span className="text-[10px] bg-[#182229] text-slate-400 px-3 py-1 rounded-lg">
                  {activeMsg.phase}
                </span>
              </div>

              {/* Incoming Bubble */}
              <div className="bg-[#202c33] text-slate-200 rounded-2xl rounded-tl-xs p-3.5 shadow-md max-w-[95%] space-y-2 border border-[#2a3942]">
                <div className="font-bold text-emerald-400 text-xs">
                  {activeMsg.header}
                </div>

                <div className="whitespace-pre-line leading-relaxed text-[11px] text-slate-200 font-sans">
                  {activeMsg.body}
                </div>

                <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
                  <span>{activeMsg.timestamp}</span>
                  <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>

              {/* Interactive Quick-Reply Action Buttons (As required by prompt) */}
              <div className="space-y-1.5 max-w-[95%]">
                {activeMsg.buttons.map((btn, bIdx) => (
                  <button
                    key={bIdx}
                    onClick={() => onNavigatePage(btn.action)}
                    className="w-full py-2.5 px-3 bg-[#202c33] hover:bg-[#2a3942] border border-[#2a3942] rounded-xl text-center text-emerald-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{btn.text}</span>
                  </button>
                ))}
              </div>

            </div>

            {/* Phone Bottom Input Bar */}
            <div className="bg-[#202c33] p-2.5 flex items-center gap-2 border-t border-[#2a3942]">
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-slate-400 text-xs">
                Type 'DEAL' or ask a question...
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900">
                <Send className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
