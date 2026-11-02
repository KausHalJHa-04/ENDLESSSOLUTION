// import React from 'react';
import { Target, BarChart3, Users, Sparkles, ArrowUpRight, Award } from 'lucide-react';

const STATS_DATA = [
  {
    number: '11+',
    label: 'Years Experience',
    subtext: 'Proven industry track record & growth expertise',
    icon: Target,
    accentGradient: 'from-[#174478] to-[#0ea5e9]',
    badgeBg: 'bg-blue-50 text-[#174478]',
    borderHover: 'hover:border-blue-200',
    statGlow: 'text-[#174478]',
    badge: 'Established 2013'
  },
  {
    number: '500+',
    label: 'Projects Completed',
    subtext: 'High-performing digital campaigns & web builds',
    icon: BarChart3,
    accentGradient: 'from-emerald-600 to-teal-500',
    badgeBg: 'bg-emerald-50 text-emerald-600',
    borderHover: 'hover:border-emerald-200',
    statGlow: 'text-emerald-600',
    badge: 'Delivered ROI'
  },
  {
    number: '95%',
    label: 'Client Retention',
    subtext: 'Long-term strategic business partnerships',
    icon: Users,
    accentGradient: 'from-amber-500 to-orange-500',
    badgeBg: 'bg-amber-50 text-amber-600',
    borderHover: 'hover:border-amber-200',
    statGlow: 'text-amber-600',
    badge: 'Top Rated'
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-white">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-[90px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-400/5 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Mini Tag */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-xs mb-3">
            <Award className="w-3.5 h-3.5 text-[#174478]" />
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-700">
              Impact by the Numbers
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Measurable Growth That Speaks for Itself
          </h2>
        </div>

        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {STATS_DATA.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 ${item.borderHover} shadow-xs hover:shadow-[0_20px_40px_-15px_rgba(23,68,120,0.12)] transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${item.badgeBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white border border-slate-200/80 px-2.5 py-1 rounded-full group-hover:border-slate-300 transition-colors">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    {item.badge}
                  </span>
                </div>

                {/* Big Number Statistic */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight">
                      {item.number}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-300 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </div>
                  
                  {/* Label (Exact preserved name) */}
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                    {item.label}
                  </h3>

                  {/* Supporting subtitle */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-1">
                    {item.subtext}
                  </p>
                </div>

                {/* Bottom Active Glow Accent Bar */}
                <div className={`mt-6 h-[3px] w-12 rounded-full bg-gradient-to-r ${item.accentGradient} group-hover:w-full transition-all duration-500 ease-out`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}