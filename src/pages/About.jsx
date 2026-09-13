import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

export default function About() {
  const focusAreas = [
    {
      number: "01",
      title: "Furniture",
      desc: "Creating durable, thoughtfully designed living room and interior furnishings suited for day-to-day use and timeless appeal."
    },
    {
      number: "02",
      title: "Sofa Design",
      desc: "Customizing sofa forms, frame structures, and cushioning depth to match the distinct dimensions and style of your home."
    },
    {
      number: "03",
      title: "Home Interior",
      desc: "Helping homeowners coordinate seating, balance room scale, and create cohesive visual flow across living spaces."
    },
    {
      number: "04",
      title: "Finishing & Styling",
      desc: "Attending to precision textile tension, welt cords, button tufting, and fine upholstery detailing that completes each piece."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Section with Overlapping Information Panel */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28">
        
        {/* Editorial Headings */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-deepRose font-bold block mb-2">
            Furniture Manufacturer • Ichhra Lahore
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal tracking-tight leading-tight">
            About BABER POSHISH MAKER
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-brand-deepRose font-normal italic mt-2">
            SOFA & HOME INTERIOR
          </p>
        </div>

        {/* Overlapping Image & Information Panel Composition */}
        <div className="relative">
          {/* Main Large Furniture Image */}
          <div className="rounded-3xl overflow-hidden shadow-lift border-4 border-white aspect-[16/9] lg:aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
              alt="Editorial furniture and interior showcase at Baber Poshish Maker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />
          </div>

          {/* Overlapping Information Panel */}
          <div className="lg:absolute lg:-bottom-12 lg:left-12 lg:right-12 z-20 mt-8 lg:mt-0 bg-brand-warmCream p-8 sm:p-10 rounded-2xl shadow-lift border border-brand-pink">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-darkRose">
                  Our Philosophy
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal">
                  Dedicated to Living Room Comfort & Interior Aesthetics
                </h2>
                <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-light">
                  At <strong className="text-brand-charcoal font-semibold">BABER POSHISH MAKER SOFA & HOME INTERIOR</strong>, we believe every piece of furniture should combine sound internal craftsmanship with tactile aesthetic pleasure. Based in the heart of Ichhra Furniture Market, Lahore, our work revolves around creating seating and interior furniture solutions tailored to the practical needs of modern homes.
                </p>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-brand-charcoal/10 lg:pl-8 flex flex-col justify-center space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-mutedGray block">
                    Location
                  </span>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    Moon Optical, Ichhra Furniture Market, Lahore
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-brand-mutedGray block">
                    Specialty
                  </span>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    Sofa Manufacturing & Bespoke Upholstery
                  </p>
                </div>
                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-darkRose hover:text-brand-deepRose transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-deepRose" />
                  <span>Call +92 324 4892121</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* "What We Focus On" Section */}
      <section className="py-16 sm:py-24 bg-brand-offWhite border-y border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
              Core Capabilities
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight mt-1">
              What We Focus On
            </h2>
            <p className="text-sm text-brand-mutedGray mt-3">
              Clear, disciplined furniture specializations developed around realistic craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area) => (
              <div
                key={area.number}
                className="bg-brand-warmCream/60 p-8 rounded-2xl border border-brand-pink/50 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="font-editorial text-3xl font-bold text-brand-deepRose mb-4 pb-2 border-b border-brand-pink">
                    {area.number}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-brand-charcoal mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-brand-mutedGray leading-relaxed font-light">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Editorial Split Section: Sofas & Interior Aesthetics */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
              Interior Harmony
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight leading-tight">
              A Thoughtful Balance of Form and Comfort
            </h2>
            <p className="text-base text-brand-mutedGray leading-relaxed font-light">
              We approach each sofa and interior furniture project with a genuine respect for how spaces are used. Whether crafting a spacious family sectional, an elegant Chesterfield-inspired sofa, or coordinating occasional lounge seating, our emphasis remains on proportion, resilient upholstery materials, and quiet aesthetic beauty.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-sm text-brand-charcoal">
                <CheckCircle2 className="w-5 h-5 text-brand-deepRose shrink-0 mt-0.5" />
                <span>Custom dimension considerations to suit diverse room shapes and entryways.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-charcoal">
                <CheckCircle2 className="w-5 h-5 text-brand-deepRose shrink-0 mt-0.5" />
                <span>Broad selection of high-grade upholstery textiles, velvets, and textured fabrics.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-charcoal">
                <CheckCircle2 className="w-5 h-5 text-brand-deepRose shrink-0 mt-0.5" />
                <span>Dedicated attention to internal springing, resilient foam layering, and stitching tension.</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/sofa-collection"
                className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow"
              >
                <span>View Sofa Collection</span>
                <ArrowRight className="w-4 h-4 text-brand-pink" />
              </Link>
              <Link
                to="/contact"
                className="text-xs font-semibold uppercase tracking-wider text-brand-darkRose hover:text-brand-deepRose underline underline-offset-4"
              >
                Contact Our Workshop
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
                alt="Sofa workshop detail"
                className="rounded-2xl object-cover aspect-[4/5] shadow-soft"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
                alt="Fabric detail"
                className="rounded-2xl object-cover aspect-square shadow-soft"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80"
                alt="Armchair design"
                className="rounded-2xl object-cover aspect-square shadow-soft"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                alt="Living room interior"
                className="rounded-2xl object-cover aspect-[4/5] shadow-soft"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
