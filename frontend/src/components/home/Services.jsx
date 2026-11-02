import  { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Share2,
  Search,
  MapPin,
  Palette,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Layers
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'web-services',
    title: 'Web Services',
    path: '/services/web-services',
    shortDesc: 'Custom high-performance websites, portals & full-stack web applications engineered for speed, engagement, and conversion.',
    icon: Code2,
    gradient: 'from-[#174478] to-[#0ea5e9]',
    glowColor: 'rgba(14, 165, 233, 0.25)',
    iconBg: 'bg-blue-50 text-[#174478] group-hover:bg-[#174478] group-hover:text-white',
    badge: 'High Performance',
    deliverables: ['Custom Web Development', 'Fast Load Architecture', 'API Integrations']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    path: '/services/social-media-marketing',
    shortDesc: 'Data-driven paid ads, brand storytelling, and viral content campaigns that scale engagement and generate verified buyer leads.',
    icon: Share2,
    gradient: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
    badge: 'High ROI',
    deliverables: ['Targeted Lead Campaigns', 'Creative Brand Strategy', 'Multi-Platform Ad Scaling']
  },
  {
    id: 'seo',
    title: 'SEO & Organic Growth',
    path: '/services/seo',
    shortDesc: 'Dominant search rankings with algorithmic on-page optimization, quality backlink architecture, and technical search audits.',
    icon: Search,
    gradient: 'from-emerald-600 to-teal-500',
    glowColor: 'rgba(22, 163, 74, 0.25)',
    iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    badge: 'Top Rankings',
    deliverables: ['Technical SEO Audits', 'Keyword Strategy', 'High-Authority Backlinks']
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile',
    path: '/services/google-business-profile',
    shortDesc: 'Capture high-intent local buyers by ranking at the top of Google Maps Pack and boosting local discovery and inquiries.',
    icon: MapPin,
    gradient: 'from-sky-600 to-indigo-600',
    glowColor: 'rgba(2, 132, 199, 0.25)',
    iconBg: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    badge: 'Local Footfall',
    deliverables: ['Map Pack Domination', 'Review Management', 'Local Citation Building']
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    path: '/services/graphic-designing',
    shortDesc: 'Memorable brand identity systems, high-converting digital ad graphics, and UI design assets that command audience attention.',
    icon: Palette,
    gradient: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    iconBg: 'bg-orange-50 text-orange-600 group-hover:bg-orange-500 group-hover:text-white',
    badge: 'Brand Identity',
    deliverables: ['Corporate Branding', 'Social Ad Creatives', 'Marketing Collateral']
  }
];

// Single 3D Parallax Card Component
function ServiceCard({ service }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setCoords({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  const IconComponent = service.icon;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative [perspective:1000px] h-full"
    >
      <div
        style={{
          transform: `rotateX(${coords.x}deg) rotateY(${coords.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_10px_30px_rgba(23,68,120,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(23,68,120,0.18)] transition-all duration-200 ease-out flex flex-col justify-between overflow-hidden"
      >
        {/* Dynamic Hover Spotlight Glow */}
        <div
          className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at 50% 10%, ${service.glowColor}, transparent 70%)`,
          }}
        />

        {/* Top Section */}
        <div className="relative z-10 [transform:translateZ(20px)]">
          {/* Header Row: Icon & Tag */}
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105 group-hover:shadow-md`}
            >
              <IconComponent className="w-6 h-6 transition-transform duration-300" />
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-full group-hover:border-slate-300 transition-colors">
              <Sparkles className="w-3 h-3 text-amber-500" />
              {service.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#174478] transition-colors duration-200">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {service.shortDesc}
          </p>

          {/* Deliverables Checklist */}
          <div className="mt-4 pt-3 border-t border-slate-100/90 space-y-1.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Link */}
        <div className="relative z-10 mt-5 pt-3.5 border-t border-slate-100/80 flex items-center justify-between [transform:translateZ(15px)]">
          <Link
            to={service.path}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#174478] group-hover:text-blue-600 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div
            className={`h-1 w-8 rounded-full bg-gradient-to-r ${service.gradient} group-hover:w-16 transition-all duration-300`}
          />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    /* Reduced padding: py-6 sm:py-8 lg:py-10 */
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/20">
      {/* Background Volumetric Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px]" />
        
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#174478 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with tighter bottom margin (mb-8 sm:mb-10) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-xs mb-3">
            <Layers className="w-3.5 h-3.5 text-[#174478]" />
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-[#174478]">
              Our Digital Capabilities
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Comprehensive Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#174478] via-amber-500 to-[#16a34a]">
              Endless Growth
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            From performant engineering to algorithm-dominating organic reach and targeted ad scaling, we build strategic assets tailored for quantifiable bottom-line results.
          </p>
        </div>

        {/* 3D Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* 6th Card: Consultation CTA */}
          <div className="relative [perspective:1000px] h-full">
            <div className="relative h-full bg-gradient-to-br from-[#174478] via-blue-700 to-[#16a34a] rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 shadow-xs">
                  <Zap className="w-6 h-6 text-amber-300" />
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-amber-200 bg-white/10 px-2.5 py-0.5 rounded-full mb-2.5">
                  Tailored Strategy
                </span>

                <h3 className="text-lg font-black tracking-tight text-white">
                  Looking for a Custom Growth Solution?
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                  Every business model has distinct challenges. Let’s construct an omnichannel digital roadmap tailored to your exact industry targets.
                </p>
              </div>

              <div className="relative z-10 mt-5 pt-3.5 border-t border-white/20 flex items-center justify-between">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#174478] font-extrabold text-xs hover:bg-amber-400 hover:text-slate-900 transition-all shadow-md active:scale-95"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <TrendingUp className="w-5 h-5 text-emerald-300" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}