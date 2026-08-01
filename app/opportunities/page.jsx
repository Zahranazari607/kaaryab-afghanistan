// app/opportunities/page.jsx
"use client";
import { useState } from "react";
import { useSaved } from "../../context/SavedContext";
import { opportunities as defaultOpportunities } from "../../data/opportunities";
import OpportunityCard from "../../components/OpportunityCard";
import { Search, SlidersHorizontal, Folder, Globe } from "lucide-react";

export default function OpportunitiesPage() {
  const contextData = useSaved()?.allOpportunities;
  
  const allOpportunities = (contextData && contextData.length > 0) 
    ? contextData 
    : defaultOpportunities;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filteredOpportunities = allOpportunities.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.organization.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    const matchesType = type === "All" || item.type === type;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const categories = ["All", "Job", "Internship", "Scholarship", "Online course"];
  const types = ["All", "Remote", "On-site", "Hybrid"];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Explore Opportunities</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Search and filter through jobs, scholarships, and training options.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">

        <div className="relative flex-grow">
          <Search className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title, keyword, or organization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        <div className="flex items-center space-x-2 min-w-[180px]">
          <Folder className="w-4 h-4 text-slate-400 dark:text-slate-500 hidden md:block" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-3 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="dark:bg-slate-950">
                {cat === "All" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2 min-w-[150px]">
          <Globe className="w-4 h-4 text-slate-400 dark:text-slate-500 hidden md:block" />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-3 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
          >
            {types.map((t) => (
              <option key={t} value={t} className="dark:bg-slate-950">
                {t === "All" ? "All Types" : t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((item) => (
            <OpportunityCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm space-y-3">
          <SlidersHorizontal className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">No Opportunities Found</h3>
          <p className="text-sm text-slate-400 dark:text-slate-400 max-w-xs mx-auto">Try adjusting your search keywords or filters to find what you are looking for.</p>
        </div>
      )}
    </div>
  );
}
