import  { useState } from 'react';
import {
  Search,
  Compass,
  Rocket,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Calendar,
  PhoneCall,
  ShieldCheck,
 
  Layers,
  ChevronRight
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    phase: 'Phase 01',
    title: 'Discovery & Deep Audit',
    tagline: 'Market Intelligence & Technical Baselines',
    description: 'We tear down your existing funnels, reverse-engineer top competitor keywords, and audit technical search infrastructure to reveal your fastest route to revenue.',
    icon: Search,
    color: 'from-[#174478] via-blue-600 to-[#0ea5e9]',
    glow: 'rgba(23, 68, 120, 0.22)',
    badge: '100% Data-Driven',
    deliverables: ['Competitor Benchmark', 'Search Intent Gap Analysis', 'Technical CRO Audit']
  },
  {
    step: '02',
    phase: 'Phase 02',
    title: 'Strategy Development',
    tagline: 'Custom Full-Funnel Architecture',
    description: 'We construct a tailored acquisition roadmap combining high-intent search positioning, hyper-targeted ad scaling, and a validated unit-economics ROAS model.',
    icon: Compass,
    color: 'from-[#0ea5e9] via-sky-500 to-amber-500',
    glow: 'rgba(14, 165, 233, 0.22)',
    badge: 'Targeted Roadmap',
    deliverables: ['Audience Segmentation', 'Funnel Mapping', 'ROAS & Budget Forecasting']
  },
  {
    step: '03',
    phase: 'Phase 03',
    title: 'Precision Implementation',
    tagline: 'High-Impact Execution & Optimization',
    description: 'We launch performant campaigns, high-converting digital assets, and automated tracking telemetry with surgical precision across every target channel.',
    icon: Rocket,
    color: 'from-amber-500 via-orange-500 to-emerald-500',
    glow: 'rgba(245, 158, 11, 0.22)',
    badge: 'Zero Guesswork',
    deliverables: ['Omnichannel Ad Rollout', 'High-Converting Creatives', 'Real-Time Event Tracking']
  },
  {
    step: '04',
    phase: 'Phase 04',
    title: 'Measure & Scale',
    tagline: 'Predictable Revenue Multiplication',
    description: 'We monitor conversion data daily, aggressively optimize underperforming variables, and scale winning campaigns to compound your market authority.',
    icon: BarChart3,
    color: 'from-emerald-600 via-teal-500 to-[#174478]',
    glow: 'rgba(22, 163, 74, 0.22)',
    badge: 'Compounding ROI',
    deliverables: ['Telemetry Reporting', 'A/B Creative Iterations', 'Scalable Capital Allocation']
  }
];

const CTA_PERKS = [
  { label: 'Free Website Audit', sub: 'Comprehensive CRO & SEO audit' },
  { label: 'No Obligation', sub: 'Zero pushy sales talk, pure value' },
  { label: 'Expert Consultation', sub: '1-on-1 with senior growth leads' },
  { label: 'Custom Strategy', sub: 'Tailored roadmap for your exact model' }
];

// Single 3D Process Step Card
function ProcessStepCard({ item, index, hoveredStep, setHoveredStep }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isHovered = hoveredStep === index;
  const IconComponent = item.icon;

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredStep(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredStep(index)}
      onMouseLeave={handleMouseLeave}
      className="group relative [perspective:1000px] h-full"
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full rounded-3xl p-5 sm:p-6 bg-white/95 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
          isHovered
            ? 'border-blue-200 shadow-[0_20px_45px_-10px_rgba(23,68,120,0.14)] -translate-y-1.5'
            : 'border-slate-200/80 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:border-slate-300'
        }`}
      >
        {/* Dynamic Spotlight Glow */}
        <div
          className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(350px circle at 50% 0%, ${item.glow}, transparent 70%)`,
          }}
        />

        {/* Content Area */}
        <div className="relative z-10 [transform:translateZ(15px)]">
          {/* Header Row: Step Number & Phase Badge */}
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-black text-xs shadow-md shadow-slate-900/10 group-hover:scale-110 transition-transform duration-300`}
            >
              <IconComponent className="w-5 h-5" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-full group-hover:border-slate-300 transition-colors">
                {item.badge}
              </span>
              <span className="text-xl font-black text-slate-300 group-hover:text-slate-400 transition-colors">
                {item.step}
              </span>
            </div>
          </div>

          {/* Phase Tagline */}
          <span className="text-[10px] font-black uppercase tracking-wider text-[#174478] block mb-1">
            {item.phase} • {item.tagline}
          </span>

          {/* Title */}
          <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#174478] transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {item.description}
          </p>

          {/* Deliverables Checklist */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
            {item.deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Accent Track */}
        <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
          <span className="text-[11px] font-bold text-slate-400 group-hover:text-[#174478] transition-colors inline-flex items-center gap-1">
            <span>Milestone {item.step}</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <div
            className={`h-1 rounded-full bg-gradient-to-r ${item.color} transition-all duration-300 ${
              isHovered ? 'w-16' : 'w-8'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [ctaTilt, setCtaTilt] = useState({ x: 0, y: 0 });

  const handleCtaMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setCtaTilt({ x: y, y: x });
  };

  const handleCtaMouseLeave = () => {
    setCtaTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-slate-50/40 to-blue-50/20">
      
      {/* Background Volumetric Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/6 left-1/3 -translate-x-1/2 w-[34rem] h-[34rem] bg-blue-500/10 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 right-10 w-[30rem] h-[30rem] bg-amber-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[110px]" />
        
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#174478 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= PART 1: PROCESS ROADMAP ================= */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-xs mb-3">
              <Layers className="w-3.5 h-3.5 text-[#174478]" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-[#174478]">
                Our Execution Framework
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
              How We Drive Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#174478] via-amber-500 to-[#16a34a]">
                Business Success
              </span>
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A four-phase growth engine engineered to eliminate guesswork and turn digital marketing spend into predictable, scalable revenue.
            </p>
          </div>

          {/* 4-Column 3D Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessStepCard
                key={step.step}
                item={step}
                index={idx}
                hoveredStep={hoveredStep}
                setHoveredStep={setHoveredStep}
              />
            ))}
          </div>

          {/* Connected Pipeline Indicator Bar */}
          <div className="hidden lg:flex items-center justify-between mt-8 px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-700">Live Delivery Velocity:</span>
              <span className="text-xs font-medium text-slate-500">Agile sprints with weekly KPI reviews</span>
            </div>
            <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Transparent Dashboards</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Dedicated Growth Lead</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Continuous CRO Iterations</span>
            </div>
          </div>

        </div>

        {/* ================= PART 2: 3D READY TO GROW CTA LAUNCHPAD ================= */}
        <div
          className="relative [perspective:1200px]"
          onMouseMove={handleCtaMouseMove}
          onMouseLeave={handleCtaMouseLeave}
        >
          <div
            style={{
              transform: typeof window !== 'undefined' && window.innerWidth >= 1024
                ? `rotateX(${ctaTilt.x}deg) rotateY(${ctaTilt.y}deg)`
                : 'none',
              transformStyle: 'preserve-3d',
            }}
            className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-[#174478] via-[#0284c7] to-[#16a34a] p-6 sm:p-10 lg:p-12 text-white shadow-[0_25px_60px_-15px_rgba(23,68,120,0.32)] overflow-hidden transition-transform duration-200 ease-out"
          >
            {/* Ambient Internal Sheen Rays */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
            
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#ffffff 1.2px, transparent 1.2px)`,
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center [transform:translateZ(20px)]">
              
              {/* Left Text & Action Area */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Micro Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-xs mb-3.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-white">
                    Unlock Measurable ROI
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-300">
                    Complimentary Session
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                  Ready to Grow Your Business?
                </h2>

                {/* Subtitle */}
                <p className="mt-3 text-xs sm:text-base text-blue-50/90 leading-relaxed font-normal max-w-xl">
                  Get a free digital marketing consultation and discover how we can help you generate more leads, scale your customer acquisition, and increase revenue.
                </p>

                {/* Dual CTA Buttons */}
                <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                  <a
                    href="#consultation"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-black text-[#174478] bg-white hover:bg-amber-400 hover:text-slate-900 shadow-lg shadow-black/10 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <Calendar className="w-4 h-4 text-[#174478] group-hover:scale-110 transition-transform" />
                    <span className="tracking-wide">Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out" />
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <PhoneCall className="w-4 h-4 text-white" />
                    <span>Call Now</span>
                  </a>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-white/70">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Confidential • Instant Scheduling • Zero Obligations</span>
                </div>
              </div>

              {/* Right 4 Frosted 3D Tiles */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full">
                {CTA_PERKS.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3.5 sm:p-4 rounded-2xl bg-white/15 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/35 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 cursor-default [transform:translateZ(15px)]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-emerald-600 transition-all shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 group-hover:text-emerald-600 transition-colors" />
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {item.label}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-blue-100/80 leading-relaxed mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}