import React from 'react';
import { 
  ShieldCheck, Truck, RotateCcw, Headphones, 
  Mail, Phone, MapPin, Heart, ExternalLink, GraduationCap 
} from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Upper Value Proposition Strip */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Fast & Free Shipping</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Free delivery on orders ₹999+</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">1-Year Warranty</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Doorstep pickup & repair</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">7-Day Easy Returns</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Hassle-free replacements</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">Student Support</h5>
              <p className="text-[11px] text-slate-400 mt-0.5">Dedicated WhatsApp & ticketing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center text-white font-extrabold text-xl">
                T
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Tech<span className="text-brand-400">Nest</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong>Smart Technology. Better Everyday.</strong> TechNest is an academic online electronics and smart accessories store conceptualized for college students, young professionals, and modern tech consumers.
            </p>

            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-brand-300 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>MBA E-Commerce Academic Project</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Created to satisfy the syllabus criteria of Continuous Assessment 1 (CA1) and Continuous Assessment 2 (CA2).
              </p>
            </div>
          </div>

          {/* CA1 Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
              CA1 Deliverables
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-brand-300 transition-colors">
                  Storefront (First 15 Products)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-brand-300 transition-colors">
                  Sentiment Analysis Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shipping')} className="hover:text-brand-300 transition-colors">
                  Shipping & Delivery Info
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('payment')} className="hover:text-brand-300 transition-colors">
                  Payment Options & Demo
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('channels')} className="hover:text-brand-300 transition-colors">
                  Omnichannel Sales Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* CA2 Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              CA2 Deliverables
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-purple-300 transition-colors">
                  10 New Products (Total 25)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('whatsapp-campaign')} className="hover:text-purple-300 transition-colors">
                  WhatsApp Marketing Campaign
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blogs')} className="hover:text-purple-300 transition-colors">
                  Tech Buying Blogs (3 Articles)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('feedback')} className="hover:text-purple-300 transition-colors">
                  Consumer Feedback Form
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('revenue')} className="hover:text-purple-300 transition-colors">
                  8 Revenue Generation Streams
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-purple-300 transition-colors">
                  Customer Support & 10 FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-purple-300 transition-colors">
                  Customer Resources Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              Store Contact
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>TechNest Electronics Labs, MG Road, Bengaluru, Karnataka 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-brand-300">support@technest.store</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span>+91 98765 43210 (WhatsApp Available)</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('admin')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-semibold hover:bg-emerald-900 transition-colors block"
                >
                  ⚡ Admin Analytics View
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} TechNest Inc. Developed for MBA E-Commerce Academic Assessment.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => handleNav('resources')} className="hover:text-slate-300">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => handleNav('resources')} className="hover:text-slate-300">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => handleNav('shipping')} className="hover:text-slate-300">Shipping Policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
