import  { useState } from 'react';
import {
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Activity
} from 'lucide-react';

export default function Hero() {
  const [hoveredBarIndex, setHoveredBarIndex] = useState(6);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const chartData = [
    { day: 'Mon', height: 42, label: '3.8k' },
    { day: 'Tue', height: 60, label: '5.4k' },
    { day: 'Wed', height: 52, label: '4.9k' },
    { day: 'Thu', height: 75, label: '7.2k' },
    { day: 'Fri', height: 68, label: '6.5k' },
    { day: 'Sat', height: 88, label: '9.8k' },
    { day: 'Sun', height: 100, label: '12.5k' },
  ];

  // Enable 3D mouse tilt only on desktop viewports (1024px+)
  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f1f5f9] via-[#e0f2fe]/60 to-[#ecfdf5]/80 pt-20 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-16 mb-0">
      
      {/* Background Multi-Hue Glows - Auto scaled for mobile to avoid lag */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[24rem] sm:w-[36rem] lg:w-[42rem] h-[18rem] sm:h-[24rem] bg-gradient-to-b from-[#174478]/15 via-[#0ea5e9]/10 to-transparent rounded-full blur-[70px] sm:blur-[100px]" />
        <div className="absolute top-1/4 -left-16 w-[18rem] sm:w-[28rem] h-[18rem] sm:h-[28rem] bg-gradient-to-tr from-amber-400/20 via-orange-500/10 to-transparent rounded-full blur-[80px] sm:blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-[20rem] sm:w-[32rem] h-[20rem] sm:h-[32rem] bg-gradient-to-tl from-emerald-500/15 via-teal-400/10 to-transparent rounded-full blur-[80px] sm:blur-[120px]" />

        {/* Crisp grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] sm:opacity-[0.045]"
          style={{
            backgroundImage: `radial-gradient(#174478 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ================= LEFT CONTENT AREA (mt-[5px] added) ================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10 mt-[20px]">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_14px_rgba(23,68,120,0.06)] mb-4 sm:mb-5">
              <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.1em] sm:tracking-[0.14em] text-[#174478]">
                Proven ROI-Focused Growth
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-600">
                <Sparkles className="w-3 h-3 text-amber-500" /> Real Results
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[2rem] xs:text-[2.35rem] sm:text-5xl lg:text-[3.75rem] font-black text-slate-900 tracking-tight sm:tracking-[-0.035em] leading-[1.12] sm:leading-[1.08] max-w-xl lg:max-w-none">
              Grow Your Business with{' '}
              <span className="relative inline-block mt-0.5 sm:mt-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#174478] via-amber-500 to-[#16a34a]">
                  Data-Driven
                </span>
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-amber-400/90"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Digital Marketing
            </h1>

            {/* Description Paragraph */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-xl lg:max-w-2xl font-normal">
              We help businesses generate qualified leads, increase sales, and build a powerful online presence through SEO, Paid Advertising, Website Development, and Digital Marketing strategies that deliver measurable results.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#consultation"
                className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#174478] via-[#0ea5e9] via-amber-500 to-[#16a34a] hover:bg-[length:140%_auto] shadow-[0_12px_28px_rgba(23,68,120,0.22)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.28)] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 group-hover:scale-110 transition-transform duration-200" />
                <span className="tracking-wide">Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-in-out" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-300/60 flex flex-wrap justify-center lg:justify-start items-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> Certified Meta & Google Partner
              </span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#174478] shrink-0" /> 100% Transparency & Real Results
              </span>
            </div>
          </div>

          {/* ================= RIGHT ANALYTICS DASHBOARD ================= */}
          <div
            className="lg:col-span-5 relative mt-4 sm:mt-6 lg:mt-0 flex justify-center w-full px-2 sm:px-4 lg:px-0 lg:[perspective:1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                transform: window.innerWidth >= 1024 ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'none',
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[440px] lg:max-w-[460px] transition-transform duration-200 ease-out"
            >
              {/* Card Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/25 via-blue-500/20 to-emerald-400/25 rounded-3xl blur-xl sm:blur-2xl transform scale-95" />

              {/* Main Card Container */}
              <div className="relative bg-white/95 rounded-2xl sm:rounded-3xl border border-white/90 shadow-[0_16px_40px_-10px_rgba(23,68,120,0.18)] sm:shadow-[0_25px_60px_-12px_rgba(23,68,120,0.22)] p-4 sm:p-5 lg:p-6 backdrop-blur-xl">
                
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-extrabold text-slate-800 tracking-tight">Growth Engine Analytics</span>
                  </div>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 shadow-xs">
                    <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 animate-spin" style={{ animationDuration: '3s' }} />
                    Live Sync
                  </span>
                </div>

                {/* Key Metrics: 12.5K Visitors | +340% Growth | ₹8.5x ROAS */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-3.5">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/90 to-amber-50/50 border border-slate-100 flex flex-col justify-between shadow-xs">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Audience</span>
                      <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-black text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">
                        <TrendingUp className="w-2.5 h-2.5" />
                        +340% Growth
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        12.5K Visitors
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/90 to-blue-50/70 border border-blue-100/80 flex flex-col justify-between shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Ad Efficiency</span>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[#174478] text-white flex items-center justify-center shadow-xs">
                        <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xl sm:text-2xl font-black text-[#174478] tracking-tight">
                        ₹8.5x ROAS
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsive Bar Chart Area */}
                <div className="mt-3.5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-[#174478]" />
                      <span className="text-[11px] sm:text-xs font-black text-slate-700">Conversion Momentum</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">7 Days</span>
                  </div>

                  <div className="flex items-end justify-between h-28 sm:h-36 pt-3 sm:pt-4 gap-1 sm:gap-2">
                    {chartData.map((item, index) => {
                      const isHovered = hoveredBarIndex === index;
                      return (
                        <div
                          key={item.day}
                          className="flex-1 flex flex-col items-center gap-1 sm:gap-1.5 h-full justify-end cursor-pointer group"
                          onMouseEnter={() => setHoveredBarIndex(index)}
                        >
                          <div
                            className={`text-[9px] sm:text-[10px] font-black text-white bg-slate-900 px-1 py-0.5 rounded shadow-md transition-all duration-200 ${
                              isHovered ? 'opacity-100 -translate-y-0.5' : 'opacity-0 pointer-events-none'
                            }`}
                          >
                            {item.label}
                          </div>

                          <div className="w-full max-w-[20px] sm:max-w-[26px] bg-slate-200/70 rounded-t-lg overflow-hidden flex flex-col justify-end h-full">
                            <div
                              style={{ height: `${item.height}%` }}
                              className={`w-full rounded-t-lg transition-all duration-300 ${
                                isHovered
                                  ? 'bg-gradient-to-t from-amber-500 to-[#16a34a]'
                                  : index === chartData.length - 1
                                  ? 'bg-gradient-to-t from-[#174478] via-amber-500 to-[#16a34a]'
                                  : 'bg-gradient-to-t from-[#174478] to-[#0ea5e9]'
                              }`}
                            />
                          </div>

                          <span className={`text-[9px] sm:text-[10px] font-bold transition-colors ${
                            isHovered ? 'text-amber-600' : 'text-slate-500'
                          }`}>
                            {item.day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: "+156% Traffic" */}
              <div className="absolute -top-3 sm:-top-4 -right-1 sm:-right-3 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-[0_12px_28px_rgba(22,163,74,0.18)] border border-white flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-xs">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                    +156% Traffic
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-slate-400 font-semibold">Organic Growth</p>
                </div>
              </div>

              {/* Floating Badge 2: "48 Leads Today" */}
              <div className="absolute -bottom-3 sm:-bottom-4 -left-1 sm:-left-3 bg-white/95 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-[0_12px_28px_rgba(245,158,11,0.18)] border border-white flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-xs">
                  <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">
                    48 Leads Today
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-emerald-600 font-bold">Verified Qualified</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}