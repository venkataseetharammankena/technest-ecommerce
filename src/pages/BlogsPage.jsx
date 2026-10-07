import React, { useState } from 'react';
import { 
  BookOpen, Clock, User, ArrowRight, X, CheckCircle2, 
  Lightbulb, Share2, Sparkles, Tag 
} from 'lucide-react';
import { blogPosts } from '../data/blogs';

export const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold font-mono">
              CONTINUOUS ASSESSMENT 2 • SECTION I
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Requirement I Satisfied
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            TechNest Insights & Buying Guides
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Technical analysis, ergonomic tips, and smart electronics buying guides curated for students and young working professionals.
          </p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Featured Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900/80 backdrop-blur-xs text-white">
                  {post.category}
                </span>
              </div>

              {/* Header Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </div>

            {/* Author Footer & Read More Button */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="text-[11px] text-slate-500 truncate max-w-[170px]">
                By <strong className="text-slate-800">{post.author.split('(')[0]}</strong>
              </div>

              <button
                onClick={() => setSelectedBlog(post)}
                className="px-4 py-2 bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white rounded-xl text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Modal View */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative animate-in fade-in zoom-in-95 my-auto">
            
            {/* Close */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold">
                  {selectedBlog.category}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{selectedBlog.date}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{selectedBlog.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-3 pt-2 text-xs text-slate-600 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-brand-700 font-bold flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{selectedBlog.author}</span>
                  <span className="text-[11px] text-slate-400">TechNest Editorial Team</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 my-4">
                <img
                  src={selectedBlog.featuredImage}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Introduction */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium italic">
                "{selectedBlog.introduction}"
              </div>

              {/* Main Content Sections */}
              <div className="space-y-6 pt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedBlog.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h3 className="font-bold text-slate-900 text-base">
                      {sec.heading}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Practical Tips Box */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 mt-6">
                <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  Practical Tips for Students & Shoppers
                </h4>
                <ul className="space-y-1.5 text-xs text-amber-900">
                  {selectedBlog.practicalTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="pt-6 border-t border-slate-200 space-y-2 text-xs sm:text-sm">
                <h4 className="font-bold text-slate-900 text-base">
                  Conclusion
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedBlog.conclusion}
                </p>
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
