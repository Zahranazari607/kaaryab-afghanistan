// components/OpportunityCard.jsx
"use client";
import Link from "next/link";
import { useSaved } from "@/context/SavedContext";
import { Calendar, MapPin, Briefcase, Bookmark, BookmarkCheck } from "lucide-react";

export default function OpportunityCard({ item }) {
  const { savedItems, toggleSave } = useSaved();
  const isSaved = savedItems.some((saved) => saved.id === item.id);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
      
      {/* دکمه بوکمارک */}
      <button
        onClick={() => toggleSave(item)}
        className="absolute top-6 right-6 p-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-500 transition-colors z-10"
      >
        {isSaved ? (
          <BookmarkCheck className="w-5 h-5 text-purple-600 fill-purple-600" />
        ) : (
          <Bookmark className="w-5 h-5" />
        )}
      </button>

      <div className="space-y-4">
        {/* دسته‌بندی و نوع کار */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md">
            {item.category}
          </span>
          <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
            {item.type}
          </span>
        </div>

        {/* عنوان و شرکت */}
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="text-sm text-slate-500 font-medium">{item.organization}</p>
        </div>

        {/* توضیحات کوتاه */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* موقعیت مکانی و ددلاین */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-50">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center space-x-1 text-amber-600 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.deadline}</span>
          </div>
        </div>
      </div>

      {/* دکمه مشاهده جزئیات */}
      <div className="pt-4 mt-4">
        <Link
          href={`/opportunities/${item.id}`}
          className="block text-center bg-slate-50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:text-white border border-slate-100 text-slate-700 text-sm font-medium py-2 rounded-xl transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}