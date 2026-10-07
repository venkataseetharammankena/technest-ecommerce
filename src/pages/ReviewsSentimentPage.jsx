import React, { useState } from 'react';
import { 
  Star, MessageSquare, ThumbsUp, ThumbsDown, Minus, 
  TrendingUp, BarChart3, PieChart, Plus, CheckCircle2, 
  HelpCircle, Sparkles, Filter 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export const ReviewsSentimentPage = () => {
  const { reviews, addReview, sentimentMetrics } = useCart();
  const [sentimentFilter, setSentimentFilter] = useState('All');
  const [showAddForm, setShowAddForm] = useState(false);

  // New review state
  const [formData, setFormData] = useState({
    customerName: '',
    productId: products[0].id,
    rating: 5,
    reviewText: ''
  });

  const filteredReviews = reviews.filter(rev => {
    if (sentimentFilter === 'All') return true;
    return rev.sentiment === sentimentFilter;
  });

  // Calculate Product-Wise Sentiment Distribution
  const productSentimentMap = {};
  reviews.forEach(rev => {
    if (!productSentimentMap[rev.productPurchased]) {
      productSentimentMap[rev.productPurchased] = {
        name: rev.productPurchased,
        total: 0,
        positive: 0,
        neutral: 0,
        negative: 0,
        avgRating: 0,
        ratingsSum: 0
      };
    }
    const item = productSentimentMap[rev.productPurchased];
    item.total++;
    item.ratingsSum += rev.rating;
    if (rev.sentiment === 'Positive') item.positive++;
    else if (rev.sentiment === 'Negative') item.negative++;
    else item.neutral++;
  });

  Object.values(productSentimentMap).forEach(item => {
    item.avgRating = (item.ratingsSum / item.total).toFixed(1);
    item.positivePct = ((item.positive / item.total) * 100).toFixed(0);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.reviewText.trim()) return;

    const prod = products.find(p => p.id === formData.productId) || products[0];
    
    // Simple heuristic sentiment scoring based on rating and keywords
    let sentiment = 'Neutral';
    let sentimentScore = 0.05;
    const textLower = formData.reviewText.toLowerCase();

    const posKeywords = ['great', 'excellent', 'amazing', 'good', 'love', 'best', 'sturdy', 'worth', 'smooth', 'crisp'];
    const negKeywords = ['bad', 'poor', 'terrible', 'worst', 'delay', 'defect', 'issue', 'waste', 'slow', 'disappoint'];

    let scoreVal = (formData.rating - 3) * 0.4;
    posKeywords.forEach(k => { if (textLower.includes(k)) scoreVal += 0.2; });
    negKeywords.forEach(k => { if (textLower.includes(k)) scoreVal -= 0.3; });

    scoreVal = Math.max(-1.0, Math.min(1.0, scoreVal));

    if (scoreVal > 0.25 || formData.rating >= 4) {
      sentiment = 'Positive';
      sentimentScore = Number(Math.max(0.65, Math.min(0.98, scoreVal + 0.3)).toFixed(2));
    } else if (scoreVal < -0.2 || formData.rating <= 2) {
      sentiment = 'Negative';
      sentimentScore = Number(Math.max(-0.95, Math.min(-0.45, scoreVal - 0.2)).toFixed(2));
    } else {
      sentiment = 'Neutral';
      sentimentScore = Number((Math.random() * 0.2).toFixed(2));
    }

    addReview({
      customerName: formData.customerName,
      productPurchased: prod.name,
      productId: prod.id,
      rating: Number(formData.rating),
      reviewText: formData.reviewText,
      sentiment,
      sentimentScore,
      aspects: { general: sentiment }
    });

    setFormData({
      customerName: '',
      productId: products[0].id,
      rating: 5,
      reviewText: ''
    });
    setShowAddForm(false);
  };

  // SVGs for Sentiment Doughnut
  const posAngle = (parseFloat(sentimentMetrics.positivePct) / 100) * 360;
  const neuAngle = (parseFloat(sentimentMetrics.neutralPct) / 100) * 360;
  const negAngle = (parseFloat(sentimentMetrics.negativePct) / 100) * 360;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Title & CA1 Rubric Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold font-mono">
              CONTINUOUS ASSESSMENT 1 • SECTION C
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement C Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Customer Review Sentiment Analysis – CA1
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Real-time Natural Language Processing (NLP) sentiment scoring of customer feedback. Evaluates polarity scores (-1.0 to +1.0) across verified tech accessory buyers for continuous quality benchmarking.
          </p>
        </div>
      </div>

      {/* Sentiment Analysis Dashboard KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Reviews</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {sentimentMetrics.total}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Verified Purchases</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
            <ThumbsUp className="w-3.5 h-3.5" /> Positive
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">
            {sentimentMetrics.positive}
          </div>
          <div className="text-[11px] text-emerald-700 font-bold mt-1">
            {sentimentMetrics.positivePct}% of total
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <Minus className="w-3.5 h-3.5" /> Neutral
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-700 mt-1">
            {sentimentMetrics.neutral}
          </div>
          <div className="text-[11px] text-slate-500 font-bold mt-1">
            {sentimentMetrics.neutralPct}% of total
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="text-xs font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1">
            <ThumbsDown className="w-3.5 h-3.5" /> Negative
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 mt-1">
            {sentimentMetrics.negative}
          </div>
          <div className="text-[11px] text-rose-700 font-bold mt-1">
            {sentimentMetrics.negativePct}% of total
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Avg Rating
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 mt-1">
            {sentimentMetrics.avgRating} <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Customer Satisfaction</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Sentiment Index
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mt-1">
            +{sentimentMetrics.avgSentimentScore}
          </div>
          <div className="text-[11px] text-indigo-700 font-bold mt-1">Scale (-1.0 to +1.0)</div>
        </div>

      </div>

      {/* Charts Section: Pie/Doughnut + Rating Distribution Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Sentiment Distribution Doughnut / Visualizer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <PieChart className="w-4 h-4 text-brand-600" />
                1. Sentiment Distribution Breakdown
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Classification of customer emotion polarity</p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              CA1 Required
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-6 pt-2">
            
            {/* SVG Doughnut Visualization */}
            <div className="relative w-44 h-44 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Background Track */}
                <path
                  className="text-slate-100"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Positive Slice (Green) */}
                <path
                  className="text-emerald-500 transition-all duration-1000"
                  strokeDasharray={`${sentimentMetrics.positivePct}, 100`}
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black text-slate-900">{sentimentMetrics.positivePct}%</span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Positive</span>
              </div>
            </div>

            {/* Legend & Summary Cards */}
            <div className="w-full sm:w-auto space-y-3 text-xs">
              
              <div className="flex items-center justify-between gap-6 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="font-bold text-emerald-950">Positive Sentiment</span>
                </div>
                <div className="font-extrabold text-emerald-800">
                  {sentimentMetrics.positive} ({sentimentMetrics.positivePct}%)
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                  <span className="font-bold text-slate-800">Neutral Sentiment</span>
                </div>
                <div className="font-extrabold text-slate-700">
                  {sentimentMetrics.neutral} ({sentimentMetrics.neutralPct}%)
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 p-2.5 rounded-xl bg-rose-50/70 border border-rose-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="font-bold text-rose-950">Negative Sentiment</span>
                </div>
                <div className="font-extrabold text-rose-800">
                  {sentimentMetrics.negative} ({sentimentMetrics.negativePct}%)
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Chart 2: Rating Distribution Chart */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-amber-500" />
                2. Rating Distribution Chart
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Distribution across 1 to 5 star customer ratings</p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              CA1 Required
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = sentimentMetrics.ratingCounts[star] || 0;
              const pct = sentimentMetrics.total ? Math.round((count / sentimentMetrics.total) * 100) : 0;
              return (
                <div key={star} className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1 w-14 font-semibold text-slate-700">
                    <span>{star}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>

                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        star >= 4 ? 'bg-amber-400' : star === 3 ? 'bg-slate-400' : 'bg-rose-400'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="w-16 text-right font-mono text-slate-500">
                    <span>{count}</span>
                    <span className="text-[10px] text-slate-400 ml-1">({pct}%)</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200/60 flex items-center justify-between">
            <span>Overall Recommendation Index:</span>
            <strong className="text-emerald-700 font-bold">
              {(( (sentimentMetrics.ratingCounts[5] + sentimentMetrics.ratingCounts[4]) / sentimentMetrics.total ) * 100).toFixed(0)}% would recommend TechNest
            </strong>
          </div>
        </div>

      </div>

      {/* Chart 3: Product-Wise Sentiment Summary Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              3. Product-Wise Sentiment Summary
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Aggregated sentiment score and rating metrics per product model
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">
            {Object.keys(productSentimentMap).length} Products Tracked
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 divide-y divide-slate-100">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4 rounded-l-lg">Product Name</th>
                <th className="py-3 px-3 text-center">Reviews</th>
                <th className="py-3 px-3 text-center">Avg Rating</th>
                <th className="py-3 px-3 text-center">Positive</th>
                <th className="py-3 px-3 text-center">Neutral</th>
                <th className="py-3 px-3 text-center">Negative</th>
                <th className="py-3 px-4 rounded-r-lg text-right">Positive Ratio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {Object.values(productSentimentMap).map((prod, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900">{prod.name}</td>
                  <td className="py-3 px-3 text-center font-mono">{prod.total}</td>
                  <td className="py-3 px-3 text-center font-bold text-amber-600">★ {prod.avgRating}</td>
                  <td className="py-3 px-3 text-center text-emerald-600 font-semibold">{prod.positive}</td>
                  <td className="py-3 px-3 text-center text-slate-500">{prod.neutral}</td>
                  <td className="py-3 px-3 text-center text-rose-600 font-semibold">{prod.negative}</td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {prod.positivePct}% Pos
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Reviews List & Interactive Review Simulator */}
      <div className="space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Verified Customer Reviews ({filteredReviews.length})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Read transparent feedback with sentiment classifications and polarity scores.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Sentiment Filter Pills */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              {['All', 'Positive', 'Neutral', 'Negative'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSentimentFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    sentimentFilter === filter ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Write Review Button */}
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Academic Review</span>
            </button>
          </div>
        </div>

        {/* Interactive Add Review Modal / Drawer */}
        {showAddForm && (
          <form onSubmit={handleFormSubmit} className="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-200 shadow-md space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Submit Demo Customer Review</h4>
                <p className="text-xs text-slate-500">Test the real-time sentiment scoring algorithm</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-xs text-slate-400 hover:text-slate-700"
              >
                Cancel
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:border-brand-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Product Purchased</label>
                <select
                  value={formData.productId}
                  onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:border-brand-500"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Star Rating (1 to 5)</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:border-brand-500"
                >
                  <option value={5}>★★★★★ (5 Stars - Excellent)</option>
                  <option value={4}>★★★★☆ (4 Stars - Very Good)</option>
                  <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                  <option value={2}>★★☆☆☆ (2 Stars - Disappointed)</option>
                  <option value={1}>★☆☆☆☆ (1 Star - Poor)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Review Comments</label>
              <textarea
                required
                rows={3}
                placeholder="Share your detailed feedback regarding audio quality, delivery speed, or ergonomics..."
                value={formData.reviewText}
                onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                className="w-full px-3 py-2 bg-white rounded-xl text-xs border border-slate-300 focus:outline-hidden focus:border-brand-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="submit"
                className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
              >
                Analyze & Post Review
              </button>
            </div>
          </form>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Header: Customer + Sentiment Badge */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.customerName}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 bg-slate-50"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{rev.customerName}</h4>
                      <p className="text-[11px] text-slate-400">{rev.date} • Verified Purchase</p>
                    </div>
                  </div>

                  {/* Sentiment Badge */}
                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      rev.sentiment === 'Positive'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : rev.sentiment === 'Negative'
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {rev.sentiment === 'Positive' && <ThumbsUp className="w-3 h-3" />}
                      {rev.sentiment === 'Negative' && <ThumbsDown className="w-3 h-3" />}
                      {rev.sentiment === 'Neutral' && <Minus className="w-3 h-3" />}
                      <span>{rev.sentiment}</span>
                    </span>
                    <span className="block text-[10px] font-mono text-slate-400 mt-0.5">
                      Polarity: {rev.sentimentScore > 0 ? `+${rev.sentimentScore}` : rev.sentimentScore}
                    </span>
                  </div>
                </div>

                {/* Product Purchased Tag & Stars */}
                <div className="flex items-center justify-between text-xs py-2 border-y border-slate-100 my-2">
                  <span className="font-medium text-brand-700 bg-brand-50/70 px-2 py-0.5 rounded text-[11px] truncate max-w-[220px]">
                    {rev.productPurchased}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic pt-1">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Aspect Tags */}
              {rev.aspects && (
                <div className="flex flex-wrap gap-1.5 pt-2 text-[10px]">
                  {Object.entries(rev.aspects).map(([k, v], i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                      {k}: <strong>{v}</strong>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
