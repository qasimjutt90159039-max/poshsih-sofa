import { Link } from "react-router-dom";
import { Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import TikTokIcon from "./TikTokIcon";
import { businessInfo } from "../data/businessInfo";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Furniture", path: "/furniture" },
  { name: "Sofa Collection", path: "/sofa-collection" },
  { name: "Home Interior", path: "/home-interior" },
  { name: "Craftsmanship", path: "/craftsmanship" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-offWhite/80 pt-16 pb-12 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-brand-offWhite/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-pink" />
              <h2 className="font-editorial text-2xl sm:text-3xl text-brand-offWhite font-bold tracking-tight uppercase">
                {businessInfo.shortName}
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-pink font-semibold">
              {businessInfo.tagline}
            </p>
            <div className="inline-block px-3 py-1 bg-brand-darkRose/60 rounded text-[11px] uppercase tracking-wider text-brand-offWhite/90 border border-brand-deepRose/30">
              {businessInfo.category}
            </div>
            <p className="text-sm text-brand-offWhite/70 max-w-md leading-relaxed pt-2">
              Dedicated to bespoke sofa manufacturing, thoughtful living room furniture, and tailored upholstery craftsmanship for contemporary and classic interior spaces in Lahore.
            </p>
            
            {/* Social presence: ONLY TikTok */}
            <div className="pt-3">
              <span className="text-xs uppercase tracking-widest text-brand-offWhite/50 block mb-2 font-medium">
                Connect on Social Media
              </span>
              <a
                href={businessInfo.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-brand-offWhite/5 hover:bg-brand-pink/20 hover:text-brand-pink text-brand-offWhite text-xs font-semibold tracking-wide uppercase transition-all duration-200 border border-brand-offWhite/10 group"
                aria-label="Official TikTok Profile"
              >
                <TikTokIcon className="w-4 h-4 text-brand-pink group-hover:scale-110 transition-transform" />
                <span>Follow on TikTok</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-semibold border-b border-brand-offWhite/10 pb-2">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-brand-pink transition-colors inline-flex items-center gap-1.5 text-brand-offWhite/80"
                  >
                    <span className="text-[10px] text-brand-deepRose">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-brand-pink font-semibold border-b border-brand-offWhite/10 pb-2">
              Contact & Location
            </h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-pink mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-brand-offWhite/50 uppercase tracking-wider block">
                    Direct Telephone
                  </span>
                  <a
                    href={businessInfo.phoneHref}
                    className="text-brand-offWhite hover:text-brand-pink font-medium transition-colors text-base"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-pink mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-brand-offWhite/50 uppercase tracking-wider block">
                    Workshop & Showroom
                  </span>
                  <p className="text-brand-offWhite/90 leading-relaxed">
                    Moon Optical, Ichhra Furniture Market,
                    <br />
                    Ichhra Lahore, 54000, Pakistan
                  </p>
                  <a
                    href={businessInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-pink hover:text-brand-offWhite mt-2 underline underline-offset-4 transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-offWhite/50">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <p className="text-brand-offWhite/40">
            Furniture Manufacturer & Interior Upholstery • Ichhra Lahore, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
