import { Info, Target, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const values = [
    { 
      title: "Our Mission", 
      desc: "Empowering Afghan youth by providing centralized, free, and verifiable access to jobs and educational resources.", 
      icon: Target, 
      color: "text-purple-600 dark:text-purple-400", 
      bg: "bg-purple-50 dark:bg-purple-950/50" 
    },
    { 
      title: "Inclusivity", 
      desc: "We prioritize safe, remote, and hybrid alternatives to ensure everyone, especially women, can continue their career path.", 
      icon: Heart, 
      color: "text-pink-600 dark:text-pink-400", 
      bg: "bg-pink-50 dark:bg-pink-950/50" 
    },
    { 
      title: "Transparency", 
      desc: "Every single opportunity listed here undergoes strict review to eliminate scam offers and outdated entries.", 
      icon: ShieldCheck, 
      color: "text-indigo-600 dark:text-indigo-400", 
      bg: "bg-indigo-50 dark:bg-indigo-950/50" 
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto space-y-12 py-4 animate-in fade-in duration-300">
      
      {/* 🌟 پس‌زمینه انیمیشنی درخشان (Ambient Glow Background) 🌟 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 pointer-events-none -z-10 flex justify-center items-center">
        <div className="absolute top-0 left-10 w-72 h-72 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500/15 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob [animation-delay:2000ms]"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-500/15 dark:bg-indigo-600/15 rounded-full blur-3xl animate-blob [animation-delay:4000ms]"></div>
      </div>

      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold border border-purple-100 dark:border-purple-900/40">
          <Info className="w-3.5 h-3.5" /> <span>About KaarYab</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight dark:text-slate-50">
          Bridging the Gap Between <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Talent & Opportunity</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          KaarYab Afghanistan was born out of a critical need: to create a secure, modern, and unified space where students and job seekers can seamlessly discover their next step in life.
        </p>
      </div>

      {/* Aim and Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((val, i) => {
          const Icon = val.icon;
          return (
            <div key={i} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3 hover:shadow-md transition-all duration-200">
              <div className={`p-3 rounded-xl w-fit ${val.bg} ${val.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{val.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">{val.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Banner */}
      <div className="bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 md:p-8 text-center space-y-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Built by the Community, for the Community</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          KaarYab is driven by volunteer developers and educators dedicated to making education and employment accessible across all provinces of Afghanistan.
        </p>
      </div>
    </div>
  );
}
