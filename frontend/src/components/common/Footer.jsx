// import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blogs & Insights", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const SERVICES_LINKS = [
  {
    name: "Website Development",
    path: "/services/web-services",
  },
  {
    name: "Social Media Marketing",
    path: "/services/social-media-marketing",
  },
  {
    name: "Search Engine Optimization",
    path: "/services/seo",
  },
  {
    name: "Google Business Profile",
    path: "/services/google-business-profile",
  },
  {
    name: "Graphic Designing",
    path: "/services/graphic-designing",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07111f] text-slate-300 shrink-0 w-full">

      {/* Background Effects */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Top CTA */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between lg:py-16">

          <div className="max-w-2xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
              Let's work together
            </span>

            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Have a project in mind?{" "}
              <span className="block text-blue-400">
                Let's make it happen.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Let's discuss your ideas and find the right digital
              solutions to help your business grow.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">

            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Endless Solution Home"
            >
              <img
                src="/images/logo/logo.webp"
                alt="Endless Solution"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              We help businesses build a strong digital presence
              through website development, digital marketing,
              SEO and creative digital solutions.
            </p>

            {/* Email */}
            <a
              href="mailto:info@endlesssol.com"
              className="mt-6 inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-blue-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                <Mail className="h-4 w-4" />
              </span>

              info@endlesssol.com
            </a>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-blue-500 opacity-0 transition group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Services */}
          <div className="lg:col-span-3">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>

            <ul className="space-y-4">
              {SERVICES_LINKS.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-400 opacity-0 transition group-hover:opacity-100" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Location */}
          <div className="lg:col-span-3">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Find Us
            </h3>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <MapPin className="h-5 w-5" />
              </div>

              <h4 className="font-semibold text-white">
                Endless Solution
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Moti Nagar,
                <br />
                New Delhi, India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Moti+Nagar+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4" />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} Endless Solution. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 sm:text-sm">

            <Link
              to="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}