import  { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Code2,
  Share2,
  Search,
  MapPin,
  Palette,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const SERVICES = [
  {
    title: 'Web Services',
    shortDesc: 'Custom high-performance websites & web applications',
    path: '/services/web-services',
    icon: Code2,
    gradient: 'from-blue-600 to-sky-500',
    lightBg: 'bg-blue-50 text-blue-600',
    tag: 'Core'
  },
  {
    title: 'Social Media Marketing',
    shortDesc: 'Targeted ad campaigns, viral content & brand growth',
    path: '/services/social-media-marketing',
    icon: Share2,
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 text-amber-600',
    tag: 'Trending'
  },
  {
    title: 'SEO & Organic Growth',
    shortDesc: 'Top-tier rank optimization and technical search audits',
    path: '/services/seo',
    icon: Search,
    gradient: 'from-emerald-600 to-teal-500',
    lightBg: 'bg-emerald-50 text-emerald-600',
    tag: 'ROI Driven'
  },
  {
    title: 'Google Business Profile',
    shortDesc: 'Local presence optimization and map pack rankings',
    path: '/services/google-business-profile',
    icon: MapPin,
    gradient: 'from-sky-600 to-indigo-600',
    lightBg: 'bg-sky-50 text-sky-600',
    tag: 'Local'
  },
  {
    title: 'Graphic Designing',
    shortDesc: 'Brand identities, marketing assets & digital visuals',
    path: '/services/graphic-designing',
    icon: Palette,
    gradient: 'from-amber-600 to-yellow-500',
    lightBg: 'bg-orange-50 text-orange-600',
    tag: 'Creative'
  },
];

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', isDropdown: true },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const [activeHoverService, setActiveHoverService] = useState(SERVICES[0]);

  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileAccordionOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const isCurrentServiceActive = SERVICES.some((s) => location.pathname === s.path);

  return (
    <>
      {/* Tight header wrapper with zero excess vertical height */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 sm:h-18 lg:h-20 flex items-center ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 mx-auto">
          <div className="flex items-center justify-between">
            
            {/* Logo: Proper proportional sizing to avoid stretching the header */}
            <Link
              to="/"
              className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg group"
              aria-label="Endless Solution - Home"
            >
              <img
                src="/images/logo/logo.webp"
                alt="Endless Solution"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              {NAV_LINKS.map((link) => {
                if (link.isDropdown) {
                  return (
                    <div
                      key={link.name}
                      ref={dropdownRef}
                      className="relative py-1"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        aria-expanded={dropdownOpen}
                        className={`group relative inline-flex items-center gap-1.5 py-1 text-[15px] font-semibold tracking-tight transition-colors duration-300 focus:outline-none cursor-pointer ${
                          isCurrentServiceActive || dropdownOpen
                            ? 'text-[#174478]'
                            : 'text-slate-700 hover:text-[#174478]'
                        }`}
                      >
                        <span className="leading-none">{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-300 ease-out ${
                            dropdownOpen ? 'rotate-180 text-[#174478]' : 'text-slate-400 group-hover:text-[#174478]'
                          }`}
                        />
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#174478] to-[#16a34a] transition-all duration-300 ease-out ${
                            isCurrentServiceActive || dropdownOpen
                              ? 'w-full'
                              : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[660px] transition-all duration-300 ease-out origin-top ${
                          dropdownOpen
                            ? 'opacity-100 scale-100 visible translate-y-0'
                            : 'opacity-0 scale-95 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-100 p-3.5 ring-1 ring-black/5 grid grid-cols-12 gap-3">
                          <div className="col-span-7 space-y-1">
                            <div className="px-3 py-1 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              <span>Services Portfolio</span>
                              <span className="text-[#174478] font-semibold lowercase">5 services</span>
                            </div>

                            {SERVICES.map((item) => {
                              const IconComponent = item.icon;
                              const isActive = location.pathname === item.path;
                              const isHovered = activeHoverService.title === item.title;

                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onMouseEnter={() => setActiveHoverService(item)}
                                  className={`group flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                                    isActive
                                      ? 'bg-blue-50/80 text-[#174478]'
                                      : isHovered
                                      ? 'bg-slate-50 text-[#174478]'
                                      : 'text-slate-700 hover:bg-slate-50'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${item.lightBg} group-hover:scale-105`}
                                    >
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-semibold tracking-tight">
                                      {item.title}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-medium text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full group-hover:border-blue-200 group-hover:text-[#174478]">
                                      {item.tag}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#174478] transition-all" />
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-xl p-4 flex flex-col justify-between border border-blue-50">
                            <div>
                              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-full mb-2.5">
                                <Sparkles className="w-3 h-3 text-amber-600" /> Highlight
                              </div>
                              <h4 className="text-[15px] font-bold text-[#174478]">
                                {activeHoverService.title}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                {activeHoverService.shortDesc}
                              </p>

                              <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600">
                                <li className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  <span>Scalable development</span>
                                </li>
                                <li className="flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  <span>Conversion-focused results</span>
                                </li>
                              </ul>
                            </div>

                            <Link
                              to={activeHoverService.path}
                              className="inline-flex items-center justify-between w-full p-2.5 mt-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#174478] to-blue-600 hover:from-[#11355e] hover:to-blue-700 transition-all shadow-xs"
                            >
                              <span>Explore Service</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `group relative py-1 text-[15px] font-semibold tracking-tight transition-colors duration-300 focus:outline-none ${
                        isActive
                          ? 'text-[#174478]'
                          : 'text-slate-700 hover:text-[#174478]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="leading-none">{link.name}</span>
                        <span
                          className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#174478] to-[#16a34a] transition-all duration-300 ease-out ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#174478] via-blue-600 to-[#16a34a] hover:from-[#103259] hover:via-blue-700 hover:to-[#13803b] shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5 text-white font-bold tracking-wide">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#174478] hover:bg-slate-100 active:scale-95 transition-all focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <img
            src="/images/logo/logo.webp"
            alt="Endless Solution"
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {NAV_LINKS.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="border-b border-slate-100 py-2">
                  <button
                    type="button"
                    onClick={() => setMobileAccordionOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between py-2 text-[15px] font-semibold text-slate-800"
                  >
                    <span className={isCurrentServiceActive ? 'text-[#174478]' : ''}>
                      {link.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        mobileAccordionOpen ? 'rotate-180 text-[#174478]' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      mobileAccordionOpen ? 'max-h-[500px] mt-1 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-1 pl-2">
                      {SERVICES.map((service) => {
                        const IconComponent = service.icon;
                        const isActive = location.pathname === service.path;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-2 rounded-xl text-sm font-medium transition-colors ${
                              isActive
                                ? 'bg-blue-50 text-[#174478] font-bold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg ${service.lightBg}`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span>{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-2 text-[15px] font-semibold border-b border-slate-100 transition-colors ${
                    isActive ? 'text-[#174478]' : 'text-slate-800 hover:text-[#174478]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        <div className="p-5 border-t border-slate-100 space-y-3">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#174478] via-blue-600 to-[#16a34a] shadow-md shadow-blue-900/15 active:scale-95 transition-all"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-[11px] text-slate-400 font-medium tracking-wide">
            Endless Growth. Real Results[cite: 1]
          </p>
        </div>
      </div>
    </>
  );
}