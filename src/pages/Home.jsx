import { Link } from "react-router-dom";
import { Phone, ArrowRight, ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

export default function Home() {
  const categories = [
    {
      number: "01",
      title: "Sofa Collection",
      path: "/sofa-collection",
      description: "Custom-configured modern and classic sofas built for enduring comfort and character.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "02",
      title: "Furniture",
      path: "/furniture",
      description: "Dedicated living room, accent chairs, and interior furniture suites designed to enrich everyday living.",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "03",
      title: "Home Interior",
      path: "/home-interior",
      description: "Thoughtful spatial layout coordination, styling harmony, and seating arrangement advisory.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "04",
      title: "Upholstery & Finishing",
      path: "/craftsmanship",
      description: "Detailed fabric selection, resilient cushion cushioning, and precision border stitching.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const benefits = [
    {
      number: "01",
      title: "Furniture-Focused Approach",
      desc: "Every creation is approached with practical considerations of scale, durability, and daily comfort in actual family living environments."
    },
    {
      number: "02",
      title: "Sofa & Interior Expertise",
      desc: "Combining specialized sofa manufacturing insight with a holistic appreciation for how seating anchors your overall interior."
    },
    {
      number: "03",
      title: "Style-Conscious Designs",
      desc: "Thoughtful alignment between timeless traditional tufting and sleek contemporary aesthetics tailored to your taste."
    },
    {
      number: "04",
      title: "Comfort-Oriented Solutions",
      desc: "Prioritizing ergonomic support, balanced cushion resilience, and tactile upholstery fabrics for long-lasting enjoyment."
    }
  ];

  return (
    <div className="pt-20">
      
      {/* ============================================================ */}
      {/* 8. HERO SECTION: Split Editorial Layout                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-warmCream via-brand-offWhite to-brand-offWhite py-12 lg:py-24 border-b border-brand-charcoal/5">
        
        {/* Subtle decorative geometric background elements using #FFCFD2 */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-10 left-5 w-72 h-72 bg-brand-softPink rounded-full blur-2xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Editorial Typography & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink/80 text-brand-darkRose text-xs tracking-widest uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-deepRose animate-ping" />
                FURNITURE • SOFA • HOME INTERIOR
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal leading-[1.1]">
                Furniture Crafted for <br className="hidden sm:block" />
                <span className="italic font-normal text-brand-darkRose">Beautiful Living</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-mutedGray max-w-xl leading-relaxed font-light">
                Discover elegant sofa and furniture solutions designed to bring comfort, character and style into your living spaces.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/sofa-collection"
                  className="inline-flex items-center gap-2.5 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 text-brand-pink group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={businessInfo.phoneHref}
                  className="inline-flex items-center gap-2 bg-brand-softPink hover:bg-brand-pink text-brand-darkRose px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold border border-brand-deepRose/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-brand-deepRose" />
                  <span>Call Us</span>
                </a>
              </div>

              {/* Minimal Business Micro-badge */}
              <div className="pt-6 border-t border-brand-charcoal/10 flex items-center gap-4 text-xs text-brand-mutedGray">
                <div className="flex -space-x-1 overflow-hidden">
                  <div className="w-6 h-6 rounded-full bg-brand-pink flex items-center justify-center text-[10px] text-brand-darkRose font-bold border border-white">B</div>
                  <div className="w-6 h-6 rounded-full bg-brand-deepRose flex items-center justify-center text-[10px] text-brand-offWhite font-bold border border-white">P</div>
                  <div className="w-6 h-6 rounded-full bg-brand-darkRose flex items-center justify-center text-[10px] text-brand-offWhite font-bold border border-white">M</div>
                </div>
                <span>Ichhra Furniture Market, Ichhra Lahore</span>
              </div>
            </div>

            {/* RIGHT SIDE: Artistic Overlapping Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* #FFCFD2 Accent Graphic Shape */}
                <div className="absolute -top-6 -right-6 w-48 h-48 sm:w-64 sm:h-64 bg-brand-pink rounded-3xl -rotate-6 z-0 opacity-80" />
                
                {/* Large Main Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium living room sofa arrangement by BABER POSHISH MAKER"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent" />
                </div>

                {/* Floating Overlapping Small Card */}
                <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 z-20 bg-brand-offWhite/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lift border border-brand-pink/50 max-w-[240px] sm:max-w-[280px]">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80"
                      alt="Upholstery craftsmanship detail"
                      className="w-14 h-14 rounded-lg object-cover border border-brand-pink shrink-0"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-deepRose font-bold block">
                        Master Craft
                      </span>
                      <p className="text-xs font-semibold text-brand-charcoal leading-snug">
                        Sofa Manufacturing & Home Interior
                      </p>
                    </div>
                  </div>
                </div>

                {/* Minimal Decorative Typography Accent */}
                <div className="hidden sm:block absolute -bottom-6 right-4 z-20 bg-brand-charcoal text-brand-offWhite text-[10px] tracking-[0.3em] uppercase py-1.5 px-3 rounded shadow">
                  STUDIO SHOWROOM • LAHORE
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 9. HOME — INTRODUCTION: Horizontal Editorial Section          */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-brand-offWhite border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            
            {/* Small Section Number & Marker */}
            <div className="lg:col-span-3 flex items-center gap-3">
              <span className="font-editorial text-3xl sm:text-4xl text-brand-deepRose font-bold">
                01
              </span>
              <div className="h-[1px] w-16 bg-brand-pink" />
              <span className="text-xs uppercase tracking-widest text-brand-mutedGray font-semibold">
                Introduction
              </span>
            </div>

            {/* Heading & Realistic Statement */}
            <div className="lg:col-span-9 space-y-4">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight leading-tight">
                Furniture with Character
              </h2>
              <p className="text-base sm:text-xl text-brand-mutedGray leading-relaxed font-light">
                <strong className="text-brand-charcoal font-medium">BABER POSHISH MAKER SOFA & HOME INTERIOR</strong> focuses on sofa, furniture and home-interior solutions for customers looking to improve the look and comfort of their spaces.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 10. HOME — FEATURED CATEGORIES: Image-led Unique Cards       */}
      {/* ============================================================ */}
      <section className="py-20 bg-brand-warmCream/60 border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs tracking-widest uppercase text-brand-deepRose font-semibold">
                Showroom Showcase
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight mt-1">
                Explore Our Furniture World
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-brand-mutedGray max-w-sm">
              From individual statement sofas to cohesive room furnishings, browse our key areas of focus.
            </p>
          </div>

          {/* 4 Large Image-led Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {categories.map((cat) => (
              <Link
                key={cat.number}
                to={cat.path}
                className="group relative bg-brand-offWhite rounded-2xl overflow-hidden border border-brand-charcoal/5 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col"
              >
                {/* Large visual */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent" />
                  
                  {/* Category Number pill */}
                  <div className="absolute top-4 left-4 bg-brand-offWhite/90 backdrop-blur-sm text-brand-darkRose px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {cat.number}
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-pink text-brand-charcoal flex items-center justify-center transform translate-y-1 opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:translate-y-0 transition-all shadow">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal group-hover:text-brand-darkRose transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-brand-mutedGray mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-brand-charcoal/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-deepRose group-hover:text-brand-darkRose">
                    <span>View Category</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 11. HOME — FEATURED VISUAL: Asymmetric Full-width Showcase    */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-brand-offWhite border-b border-brand-charcoal/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
              Spatial Philosophy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight mt-1">
              Designed Around Your Space
            </h2>
          </div>

          {/* Asymmetric composition: 1 very large image + 2 smaller supporting images + floating text block */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Very large image (7 columns) */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-soft min-h-[380px] lg:min-h-[540px] group">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural living room with coordinated sofa and furniture"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-brand-offWhite">
                <span className="text-[10px] tracking-widest uppercase text-brand-pink font-semibold block">
                  Scale & Balance
                </span>
                <p className="font-editorial text-xl sm:text-2xl font-bold">
                  Harmonious Living Room Arrangements
                </p>
              </div>
            </div>

            {/* 2 Smaller supporting images (5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Supporting image 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-[16/10] group">
                <img
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80"
                  alt="Contemporary curved sofa design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-sm text-brand-offWhite text-xs px-3 py-1 rounded">
                  Organic Form Seating
                </div>
              </div>

              {/* Supporting image 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-[16/10] group">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                  alt="Detailed furniture finishing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-sm text-brand-offWhite text-xs px-3 py-1 rounded">
                  Crafted Interior Harmony
                </div>
              </div>

            </div>

            {/* Floating Text Block */}
            <div className="lg:absolute lg:-bottom-6 lg:left-1/3 z-20 bg-brand-warmCream p-6 sm:p-8 rounded-2xl shadow-lift border border-brand-pink max-w-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-deepRose" />
                <span className="text-[11px] uppercase tracking-widest text-brand-darkRose font-bold">
                  Bespoke Consideration
                </span>
              </div>
              <p className="text-sm text-brand-charcoal leading-relaxed">
                Furniture should never feel crowded or out of place. We evaluate proportions and living movements to create sofa and furniture pieces that seamlessly integrate into the architectural rhythm of your room.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 12. HOME — WHY CHOOSE THE BRAND: Clean Horizontal Section    */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-brand-warmCream/40 border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
              Core Principles
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight mt-1">
              Made for Spaces That Feel Like Home
            </h2>
          </div>

          {/* 4 Benefits with 01, 02, 03, 04 numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.number}
                className="bg-brand-offWhite p-8 rounded-2xl border border-brand-charcoal/5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="font-editorial text-3xl font-bold text-brand-deepRose mb-4 pb-3 border-b border-brand-pink/50">
                    {b.number}
                  </div>
                  <h3 className="text-base font-bold text-brand-charcoal tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-sm text-brand-mutedGray mt-3 leading-relaxed font-light">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 13. HOME — FINAL CTA: Large Visual CTA Section                */}
      {/* ============================================================ */}
      <section className="relative py-24 sm:py-32 bg-brand-charcoal overflow-hidden text-brand-offWhite">
        
        {/* Decorative background image overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
            alt="Showroom background texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 to-brand-charcoal/90" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-pink/20 text-brand-pink text-xs uppercase tracking-widest font-semibold border border-brand-pink/30">
            Start Your Furniture Journey
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-offWhite">
            Let's Shape Your Space
          </h2>

          <p className="text-base sm:text-lg text-brand-offWhite/75 max-w-2xl mx-auto leading-relaxed font-light">
            Looking for sofa, furniture or interior solutions? Get in touch with <strong className="text-brand-offWhite font-semibold">{businessInfo.name}</strong>.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-pink hover:bg-white text-brand-charcoal px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center gap-2 bg-brand-offWhite/10 hover:bg-brand-offWhite/20 text-brand-offWhite px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold border border-brand-offWhite/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-brand-pink" />
              <span>Call +92 324 4892121</span>
            </a>
          </div>

          <p className="text-xs text-brand-offWhite/50 pt-4">
            Visit us at Moon Optical, Ichhra Furniture Market, Ichhra Lahore, Pakistan
          </p>
        </div>
      </section>

    </div>
  );
}
