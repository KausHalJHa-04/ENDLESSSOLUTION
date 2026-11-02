import { useState } from 'react';
import {
  Compass,
  BarChart3,
  TrendingUp,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Compass,
    title: 'Precision Growth Roadmaps',
    subtitle: 'Zero vanity metrics. We engineer multi-channel campaigns calibrated specifically for customer acquisition and verified pipeline revenue.',
    metric: 'Strategic Blueprint',
    badge: 'Directional Clarity',
    gradient: 'from-[#174478] via-blue-600 to-sky-500',
    lightBg: 'bg-blue-50 text-[#174478]'
  },
  {
    icon: BarChart3,
    title: 'Algorithmic Data Intelligence',
    subtitle: 'Every rupee spent is audited in real time. We replace guesswork with deep funnel tracking, search intent analysis, and conversion rate science.',
    metric: 'Real-Time Telemetry',
    badge: 'Analytical Edge',
    gradient: 'from-amber-500 via-orange-500 to-yellow-500',
    lightBg: 'bg-amber-50 text-amber-600'
  },
  {
    icon: TrendingUp,
    title: 'Compounding Market Authority',
    subtitle: 'We build durable digital real estate through evergreen organic search dominance, robust local visibility, and brand assets that yield long-term ROI.',
    metric: 'Scalable Systems',
    badge: 'Sustainable Impact',
    gradient: 'from-emerald-600 via-teal-500 to-[#174478]',
    lightBg: 'bg-emerald-50 text-emerald-600'
  }
];

const LOCAL_HUBS = [
  { name: 'Pitampura', focus: 'Retail & Corporate' },
  { name: 'Rohini', focus: 'Healthcare & Tech' },
  { name: 'Moti Nagar', focus: 'Commercial Hubs' },
  { name: 'Patel Nagar', focus: 'Manufacturing & SMEs' },
  { name: 'Rajouri Garden', focus: 'High-Growth Brands' },
  { name: 'Janakpuri', focus: 'B2B & Professional' },
  { name: 'Laxmi Nagar', focus: 'Finance & Trade' },
  { name: 'South Delhi', focus: 'Enterprise & D2C' }
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white via-slate-50/40 to-blue-50/20">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
        
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#174478 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/80 shadow-xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#174478]" />
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-[#174478]">
              The Strategic Advantage
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Engineering Predictable Growth for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#174478] via-amber-500 to-[#16a34a]">
              Ambitious Businesses
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Modern digital visibility demands more than surface-level campaigns. We architect full-funnel acquisition engines designed to turn searches into qualified buyer pipelines.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* ================= LEFT: Regional Foothold & Operations ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(23,68,120,0.05)]">
            
            <div>
              {/* Pillar Category Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Full-Spectrum Agency Infrastructure
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                Custom Web Engineering, Advanced SEO & Data-Backed Paid Media
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Whether deploying search engine optimization to capture dominant keyword intent, scaling hyper-targeted Google & Meta ads, or building lightning-fast web applications, our playbooks are tailored to your unit economics and local consumer behavior.
              </p>

              {/* Regional Footprint Dashboard */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>Deep Delhi NCR Market Footprint & Pan-India Scale</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#174478] bg-blue-50 px-2 py-0.5 rounded-full">
                    8 Primary Zones
                  </span>
                </div>

                {/* Local Hubs 4-col compact grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                  {LOCAL_HUBS.map((hub) => (
                    <div
                      key={hub.name}
                      className="p-2 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                    >
                      <p className="text-xs font-bold text-slate-800 truncate">{hub.name}</p>
                      <span className="text-[9px] text-slate-400 font-medium block truncate">{hub.focus}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  From commercial hubs in Pitampura, Rohini, Moti Nagar, and Patel Nagar to business districts across Rajouri Garden, Janakpuri, Laxmi Nagar, and South Delhi — we deliver targeted local dominance backed by nationwide scaling capabilities.
                </p>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href="#consultation"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#174478] via-blue-600 to-[#16a34a] hover:from-[#10325a] hover:to-[#137d39] shadow-md shadow-blue-900/15 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white/90 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">Claim Your Strategy Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <span className="text-[11px] font-bold text-slate-400 text-center sm:text-right">
                100% Free • No Obligation
              </span>
            </div>

          </div>

          {/* ================= RIGHT: Interactive Advantage Deck ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3">
            
            <div className="space-y-3">
              {ADVANTAGES.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border-blue-200 shadow-[0_12px_30px_rgba(23,68,120,0.08)] -translate-y-0.5'
                        : 'border-slate-200/80 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-11 h-11 rounded-2xl ${item.lightBg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-xs`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight group-hover:text-[#174478] transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`mt-3 h-[2px] rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-8 opacity-30 group-hover:w-16'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Value Commitment Card */}
            <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-[#174478] via-[#0284c7] to-[#16a34a] text-white shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block mb-0.5">
                    Our Working Standard
                  </span>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    We treat your marketing budget like our own capital. Every campaign is engineered with full accountability, radical reporting transparency, and long-term equity creation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}