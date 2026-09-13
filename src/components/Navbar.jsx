import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import TikTokIcon from "./TikTokIcon";
import { businessInfo } from "../data/businessInfo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Furniture", path: "/furniture" },
  { name: "Sofa Collection", path: "/sofa-collection" },
  { name: "Home Interior", path: "/home-interior" },
  { name: "Craftsmanship", path: "/craftsmanship" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-offWhite/95 backdrop-blur-md shadow-soft border-b border-brand-charcoal/5 py-2.5 sm:py-3"
            : "bg-brand-offWhite/90 backdrop-blur-sm border-b border-brand-charcoal/5 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Brand Logo */}
            <Link
              to="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepRose rounded min-w-0"
              aria-label="BABER POSHISH MAKER - Home"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-pink border border-brand-deepRose/40 group-hover:scale-125 transition-transform shrink-0" />
                <span className="font-editorial text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-brand-charcoal uppercase leading-tight truncate">
                  {businessInfo.shortName}
                </span>
              </div>
              <span className="text-[8px] sm:text-[9.5px] tracking-[0.22em] uppercase text-brand-deepRose font-semibold mt-0.5 pl-3.5 sm:pl-4.5 truncate">
                {businessInfo.tagline}
              </span>
            </Link>

            {/* Desktop Navigation Links - High-end Editorial Showroom Look */}
            <nav
              className="hidden xl:flex items-center space-x-1 2xl:space-x-1.5"
              aria-label="Main Navigation"
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[12px] 2xl:text-[13px] uppercase tracking-[0.14em] font-medium transition-all duration-200 rounded-lg relative group ${
                      isActive
                        ? "text-brand-darkRose font-semibold bg-brand-softPink/60"
                        : "text-brand-charcoal/85 hover:text-brand-darkRose hover:bg-brand-softPink/40"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative z-10 flex flex-col items-center">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-brand-deepRose rounded-full animate-fade-in" />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action CTAs: Call & TikTok */}
            <div className="hidden xl:flex items-center gap-3">
              {/* TikTok verified link */}
              <a
                href={businessInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-brand-charcoal/75 hover:text-brand-darkRose hover:bg-brand-softPink rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepRose border border-brand-charcoal/10"
                aria-label="Visit our TikTok page (opens in new tab)"
                title="Visit BABER POSHISH MAKER on TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              {/* Call Button */}
              <a
                href={businessInfo.phoneHref}
                className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 border border-brand-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
                aria-label="Call Baber Poshish Maker at +92 324 4892121"
              >
                <Phone className="w-3.5 h-3.5 text-brand-pink animate-pulse" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Mobile Actions: Direct Call & Hamburger Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden shrink-0">
              <a
                href={businessInfo.phoneHref}
                className="p-2 sm:p-2.5 text-brand-darkRose hover:bg-brand-softPink rounded-full transition-colors border border-brand-charcoal/10"
                aria-label="Call +92 324 4892121"
                title="Call us directly"
              >
                <Phone className="w-4 h-4 text-brand-deepRose" />
              </a>
              
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 sm:p-2.5 rounded-lg text-brand-charcoal hover:text-brand-darkRose hover:bg-brand-softPink transition-colors border border-brand-charcoal/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-deepRose"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main navigation" : "Open main navigation"}
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* MOBILE DRAWER & BACKDROP (OUTSIDE HEADER TO PREVENT CLIPPING) */}
      {/* ============================================================ */}

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-brand-charcoal/70 backdrop-blur-sm z-50 xl:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Full-Height Mobile Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-[360px] h-full bg-brand-warmCream border-l border-brand-charcoal/15 shadow-2xl z-50 xl:hidden transform transition-transform duration-300 ease-out flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header (Fixed at top) */}
        <div className="p-4 sm:p-5 border-b border-brand-charcoal/10 flex items-center justify-between bg-brand-offWhite shrink-0">
          <div>
            <span className="font-editorial text-lg font-bold text-brand-charcoal block leading-tight">
              {businessInfo.shortName}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-brand-deepRose font-semibold">
              {businessInfo.tagline}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-brand-charcoal hover:text-brand-darkRose hover:bg-brand-softPink transition-colors border border-brand-charcoal/10 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Links Container - GUARANTEED to display all 8 links without cut-off */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-1.5 overscroll-contain">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-brand-deepRose font-bold">
              All Showroom Pages ({navLinks.length})
            </span>
            <span className="text-[10px] text-brand-mutedGray">Scroll to view</span>
          </div>

          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? "bg-brand-pink text-brand-darkRose shadow-sm border-l-4 border-brand-deepRose"
                      : "bg-brand-offWhite text-brand-charcoal hover:bg-brand-softPink hover:text-brand-darkRose border border-brand-charcoal/5"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-sm font-bold text-brand-deepRose/70 w-5">
                    0{index + 1}
                  </span>
                  <span>{item.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Footer Actions (Fixed at bottom) */}
        <div className="p-4 bg-brand-offWhite border-t border-brand-charcoal/10 space-y-2 shrink-0">
          <a
            href={businessInfo.phoneHref}
            className="w-full flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shadow"
          >
            <Phone className="w-4 h-4 text-brand-pink" />
            <span>Call +92 324 4892121</span>
          </a>

          <a
            href={businessInfo.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand-softPink hover:bg-brand-pink text-brand-darkRose py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-brand-deepRose/20"
          >
            <TikTokIcon className="w-4 h-4 text-brand-darkRose" />
            <span>Official TikTok Page</span>
          </a>

          <p className="text-[10px] text-center text-brand-mutedGray pt-0.5 leading-tight">
            Moon Optical, Ichhra Furniture Market, Lahore
          </p>
        </div>

      </div>
    </>
  );
}
