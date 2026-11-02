import { useState, useEffect, useRef } from 'react';
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Business Owner',
    company: 'Retail & Commerce',
    category: 'Website Development',
    initials: 'RS',
    avatarBg: 'from-blue-600 to-sky-500',
    rating: 5,
    highlight: 'Fast, Mobile-Friendly & Professional',
    text: 'I got my business website designed by Endless Solution and it looks amazing. The website is fast, mobile-friendly, and professionally designed. Highly recommend their website development services.',
    verifiedSource: 'Google Review'
  },
  {
    id: 2,
    name: 'Simran Passi',
    role: 'Founder',
    company: 'Digital Brand',
    category: 'SEO & Growth',
    initials: 'SP',
    avatarBg: 'from-amber-500 to-orange-500',
    rating: 5,
    highlight: 'Ranked Higher & Quality Leads',
    text: "One of the best digital marketing agencies I've worked with. Their SEO services helped my website rank higher on Google, and I started getting quality leads within a few months. Highly recommended!",
    verifiedSource: 'Google Review'
  },
  {
    id: 3,
    name: 'Arjun Singh',
    role: 'Managing Director',
    company: 'Enterprise Client',
    category: 'Digital Marketing',
    initials: 'AS',
    avatarBg: 'from-emerald-600 to-teal-500',
    rating: 5,
    highlight: 'Delivered Excellent Results',
    text: 'Thank you for boosting my brand on Google. The team was supportive throughout the process and delivered excellent results. Highly recommended!',
    verifiedSource: 'Google Review'
  },
  {
    id: 4,
    name: 'MAHAVEER',
    role: 'Verified Client',
    company: 'Commercial Services',
    category: 'Digital Marketing',
    initials: 'M',
    avatarBg: 'from-[#174478] to-blue-700',
    rating: 5,
    highlight: 'Delivered Exactly What Was Promised',
    text: 'Great service. The team was responsive, professional, and delivered exactly what was promised. Highly satisfied with the overall experience.',
    verifiedSource: 'Google Review'
  },
  {
    id: 5,
    name: 'AKSHAY RAMDAS KARDAK',
    role: 'Operations Head',
    company: 'Delhi NCR Business',
    category: 'SEO & Growth',
    initials: 'AK',
    avatarBg: 'from-sky-600 to-indigo-600',
    rating: 5,
    highlight: 'Organic Traffic Increased Significantly',
    text: "I had a great experience with Endless Solution. They are one of the best SEO service providers in Delhi. Their team is professional, responsive, and knowledgeable. They helped improve my website's Google rankings and increased organic traffic significantly.",
    verifiedSource: 'Google Review'
  },
  {
    id: 6,
    name: 'Dhruv Singhal',
    role: 'Director',
    company: 'E-Commerce & Tech',
    category: 'Full-Service',
    initials: 'DS',
    avatarBg: 'from-orange-500 to-amber-500',
    rating: 5,
    highlight: 'Executed with Precision & Expertise',
    text: 'Working with this digital marketing company has been an excellent experience. Their team is highly professional, transparent, and committed to delivering quality work on time. From website development to SEO and Google Ads, every service was executed with precision and expertise.',
    verifiedSource: 'Google Review'
  },
  {
    id: 7,
    name: 'PSPL GLOBAL',
    role: 'Corporate Partner',
    company: 'Global Export & Logistics',
    category: 'SEO & Growth',
    initials: 'PG',
    avatarBg: 'from-teal-600 to-emerald-500',
    rating: 5,
    highlight: 'Ranked For Important Google Keywords',
    text: 'One of the most trusted digital marketing agencies. Their SEO strategy helped our business rank for important keywords on Google. We are extremely happy with the results.',
    verifiedSource: 'Google Review'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Detect viewport size: 1 card on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  // Auto-slide every 3 seconds (pauses when user hovers or touches)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Touch Swipe Handlers for mobile & trackpad
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext(); // Swiped left -> next slide
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> prev slide
    }
    setIsPaused(false);
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-18 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background Volumetric Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[110px]" />
        
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#174478 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/90 shadow-xs mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#174478]" />
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.14em] text-[#174478]">
              Client Endorsements & Proof
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Trusted by Growing Brands for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#174478] via-amber-500 to-[#16a34a]">
              Measurable Results
            </span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Real feedback from verified clients across Delhi NCR and India who scaled their rankings, traffic, and revenue with Endless Solution.
          </p>

          {/* Google Live Trust Bar */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black text-slate-900">5.0</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <span className="w-1 h-3 bg-slate-200 hidden sm:block" />
            <span className="text-xs font-bold text-slate-700">
              100% Verified Google Reviews
            </span>
            <span className="w-1 h-3 bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Partner</span>
            </div>
          </div>
        </div>

        {/* Carousel Outer Wrapper */}
        <div
          className="relative px-0 sm:px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Window */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {TESTIMONIALS.map((review) => (
                <div
                  key={review.id}
                  style={{
                    flex: `0 0 ${100 / visibleCount}%`,
                  }}
                  className="px-2.5 sm:px-3 box-border"
                >
                  <div className="group relative h-full rounded-3xl p-5 sm:p-6 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(23,68,120,0.14)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between select-none">
                    
                    {/* Glow Highlight */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-400/15 transition-colors duration-300" />

                    <div>
                      {/* Rating & Google Pill */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200/70 text-[10px] font-bold text-slate-600">
                          <svg className="w-3 h-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z"/>
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.25v3.15C3.26 21.36 7.35 24 12 24z"/>
                            <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.25C.45 8.22 0 10.06 0 12s.45 3.78 1.25 5.39l4.02-3.15z"/>
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.61l4.02 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
                          </svg>
                          <span>{review.verifiedSource}</span>
                        </div>
                      </div>

                      {/* Headline */}
                      <h4 className="text-sm font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#174478] transition-colors line-clamp-1">
                        "{review.highlight}"
                      </h4>

                      {/* Content */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal min-h-[72px] line-clamp-4">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Author Bottom Section */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${review.avatarBg} text-white flex items-center justify-center font-black text-xs shadow-xs`}>
                          {review.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-black text-slate-900 tracking-tight">
                              {review.name}
                            </span>
                            <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                        {review.category}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Arrows and Indicators */}
          <div className="flex items-center justify-between mt-6 px-2">
            
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:text-[#174478] hover:border-blue-200 shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#174478]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:text-[#174478] hover:border-blue-200 shadow-xs active:scale-95 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3.5 p-3.5 sm:px-6 sm:py-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <span className="text-xs sm:text-sm font-bold text-slate-700">
              Ready to achieve measurable growth for your business?
            </span>
            <a
              href="#consultation"
              className="inline-flex items-center gap-1.5 text-xs font-black text-white bg-[#174478] hover:bg-blue-700 px-5 py-2.5 rounded-full transition-all shadow-xs active:scale-95"
            >
              <span>Get Free Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}