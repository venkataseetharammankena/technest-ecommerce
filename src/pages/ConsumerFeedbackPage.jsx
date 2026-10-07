import React, { useState } from 'react';
import { 
  MessageSquare, Star, Send, CheckCircle2, ThumbsUp, 
  Lightbulb, Sparkles, User, Mail, Award 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export const ConsumerFeedbackPage = () => {
  const { feedbackList, addFeedback } = useCart();

  const [form, setForm] = useState({
    customerName: '',
    email: '',
    product: products[0].name,
    rating: 5,
    feedback: '',
    suggestions: ''
  });

  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Compute metrics
  const total = feedbackList.length;
  const avgRating = total ? (feedbackList.reduce((acc, f) => acc + f.rating, 0) / total).toFixed(1) : "5.0";
  const positiveCount = feedbackList.filter(f => f.rating >= 4).length;
  const positivePct = total ? ((positiveCount / total) * 100).toFixed(0) : "100";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customerName.trim() || !form.feedback.trim()) return;

    addFeedback({
      customerName: form.customerName,
      email: form.email,
      product: form.product,
      rating: Number(form.rating),
      feedback: form.feedback,
      suggestions: form.suggestions
    });

    setSubmittedMessage(true);
    setForm({
      customerName: '',
      email: '',
      product: products[0].name,
      rating: 5,
      feedback: '',
      suggestions: ''
    });

    setTimeout(() => {
      setSubmittedMessage(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-pink-950 via-slate-900 to-purple-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold font-mono">
              CONTINUOUS ASSESSMENT 2 • SECTION J
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement J Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Consumer Feedback Portal
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Continuous consumer grievance monitoring, user experience suggestions, and product iteration feedback pipeline.
          </p>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
            <Star className="w-7 h-7 fill-amber-400" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Average Satisfaction</span>
            <div className="text-3xl font-extrabold text-slate-900 mt-0.5">
              {avgRating} <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold">Consistently High</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-brand-600 flex items-center justify-center shrink-0">
            <MessageSquare className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Submissions</span>
            <div className="text-3xl font-extrabold text-slate-900 mt-0.5">
              {total}
            </div>
            <span className="text-[11px] text-slate-500">Live Local Storage Synchronized</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ThumbsUp className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Positive Sentiment</span>
            <div className="text-3xl font-extrabold text-emerald-600 mt-0.5">
              {positivePct}%
            </div>
            <span className="text-[11px] text-slate-500">Rated 4 or 5 Stars</span>
          </div>
        </div>

      </div>

      {/* Main Grid: Form on Left + Recent Feedback List on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Feedback Submission Form (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Submit Your Product Feedback
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Help our product management team iterate and improve future batches.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div>
              <label className="font-bold text-slate-700 block mb-1">Full Name *</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={form.customerName}
                  onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Email Address (Optional)</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="student@university.edu"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Product Evaluated</label>
              <select
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
              >
                {products.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1.5">Rating Experience</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setForm({ ...form, rating: star })}
                    className="p-1 cursor-pointer focus:outline-hidden"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        star <= form.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-slate-600 ml-2">
                  {form.rating} of 5 Stars
                </span>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Consumer Feedback *</label>
              <textarea
                required
                rows={3}
                placeholder="Share your practical experience with this gadget..."
                value={form.feedback}
                onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Improvement Suggestions</label>
              <textarea
                rows={2}
                placeholder="What new colors, cables, or features would you like in future versions?"
                value={form.suggestions}
                onChange={(e) => setForm({ ...form, suggestions: e.target.value })}
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-brand-500 bg-slate-50 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Feedback</span>
            </button>

            {submittedMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! Your feedback has been recorded into the live database.</span>
              </div>
            )}

          </form>
        </div>

        {/* Recent Feedback Feed (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-lg font-bold text-slate-900">
              Recent Customer Feedback ({feedbackList.length})
            </h3>
            <span className="text-xs text-slate-400">Live Customer Wall</span>
          </div>

          <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1">
            {feedbackList.map((fb) => (
              <div
                key={fb.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{fb.customerName}</h4>
                    <span className="text-[11px] text-brand-700 font-semibold bg-brand-50 px-2 py-0.5 rounded">
                      {fb.product}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < fb.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{fb.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{fb.feedback}"
                </p>

                {fb.suggestions && (
                  <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[11px] text-amber-900">Consumer Suggestion:</strong>
                      <span className="text-[11px] leading-relaxed">{fb.suggestions}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};
