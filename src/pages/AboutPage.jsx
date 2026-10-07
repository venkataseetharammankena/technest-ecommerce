import React from 'react';
import { 
  GraduationCap, Target, Eye, Heart, ShieldCheck, 
  Sparkles, Award, CheckCircle2, ArrowRight, Laptop, BookOpen 
} from 'lucide-react';

export const AboutPage = ({ onNavigateShop }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold font-mono">
              MBA E-COMMERCE INDIVIDUAL ASSIGNMENT
            </span>
            <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
              <GraduationCap className="w-4 h-4" /> Continuous Assessment 1 & 2
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About TechNest Electronics
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            TechNest is a student-created e-commerce concept focused on making smart technology products accessible, ergonomic, and affordable for everyday learners and working professionals.
          </p>
        </div>
      </div>

      {/* Academic Project Origin & Disclaimer Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-indigo-50/70 border border-indigo-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-brand-600 text-white">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Academic Project Background & Scope
            </h2>
            <p className="text-xs text-slate-500">
              Master of Business Administration (MBA) • E-Commerce & Digital Business Strategy
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          This comprehensive web application has been researched, architected, and engineered to fulfill the full syllabus deliverables of <strong>Continuous Assessment 1 (CA1)</strong> and <strong>Continuous Assessment 2 (CA2)</strong>. It models real-world Direct-to-Consumer (D2C) electronic commerce, omnichannel marketing, customer sentiment analysis using Natural Language Processing paradigms, logistics unit economics, and 8 distinct monetization streams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
          <div className="p-4 bg-white rounded-2xl border border-indigo-100 space-y-1">
            <strong className="text-indigo-900 font-bold block">CA1 Core Modules Built:</strong>
            <p className="text-slate-600 leading-relaxed">
              Full storefront with first 15 electronics products, real-time search, category filters, cart, simulated checkout, 10+ verified customer reviews, sentiment polarity scoring dashboard, shipping details, and 5 sales channels.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-indigo-100 space-y-1">
            <strong className="text-purple-900 font-bold block">CA2 Updation Modules Built:</strong>
            <p className="text-slate-600 leading-relaxed">
              10 additional hardware products (Total 25), WhatsApp marketing campaign ('TechNest Fest') with 3 broadcast messages and conversion funnel analytics, 3 tech buying blogs, consumer feedback portal, 8 revenue generation streams, and customer support center with 10 FAQs.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-600 flex items-center justify-center mb-2">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To democratize high-durability, ergonomically validated electronics and computing accessories for college students and remote workers without inflating prices through middleman distribution markups.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To emerge as the premier academic tech companion across Indian university campuses, empowering students to study longer with less physical cervical strain, faster charging, and crystal-clear audio.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Core Values</h3>
          <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
            <li>• <strong>Product Integrity:</strong> 100% BIS certified electronics components.</li>
            <li>• <strong>Ergonomic Care:</strong> Designing tools that protect student posture and vision.</li>
            <li>• <strong>Radical Value:</strong> High-performance hardware at student-first pricing.</li>
          </ul>
        </div>

      </div>

      {/* Customer Promise */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Our Commitment to Excellence
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            The TechNest Customer Promise
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every customer order is backed by concrete operational guarantees that build enduring brand equity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 text-xs">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-sm">1-Year Warranty</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Doorstep courier pickup and swift hardware replacement if any internal component malfunctions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-sm">7-Day Easy Returns</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Zero-friction doorstep returns if you receive a defective unit or mismatched specifications.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-sm">Free Express Shipping</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Automatic zero delivery fees on orders above ₹999 with same-day order dispatch before 2 PM.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="font-bold text-white text-sm">4-Hour Support SLA</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Dedicated WhatsApp and ticketing team ready to assist with tech setup, tracking, and advice.
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-center sm:justify-start">
          <button
            onClick={onNavigateShop}
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-lg shadow-brand-500/25 transition-all cursor-pointer"
          >
            <span>Explore The TechNest Catalog (25 Products)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
