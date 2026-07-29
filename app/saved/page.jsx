// app/saved/page.jsx
"use client";
import Link from "next/link";
import { useSaved } from "../../context/SavedContext";
import OpportunityCard from "../../components/OpportunityCard";
import { Bookmark, ArrowLeft, FolderHeart } from "lucide-react";

export default function SavedOpportunitiesPage() {
  const { savedItems } = useSaved() || { savedItems: [] };

  return (
    <div className="space-y-6 py-4">
      {/* هدر صفحه */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
            <Bookmark className="w-6 h-6 fill-purple-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">Saved Opportunities</h1>
            <p className="text-xs text-slate-400">Keep track of positions and scholarships you want to apply for</p>
          </div>
        </div>

        <Link 
          href="/opportunities"
          className="inline-flex items-center space-x-1.5 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors self-start sm:self-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Explore</span>
        </Link>
      </div>

      {/* لیست کارت‌ها یا وضعیت خالی */}
      {savedItems.length === 0 ? (
        <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl space-y-4 max-w-md mx-auto shadow-sm">
          <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
            <FolderHeart className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800">No saved opportunities yet</h3>
            <p className="text-slate-500 text-sm px-6">
              When exploring jobs and scholarships, click the bookmark icon to save them here.
            </p>
          </div>
          <Link
            href="/opportunities"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-sm transition-colors"
          >
            Explore Now
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {savedItems.map((item) => (
            <OpportunityCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}