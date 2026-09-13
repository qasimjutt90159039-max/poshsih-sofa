import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

export default function Craftsmanship() {
  const processSteps = [
    {
      step: "01",
      title: "Concept",
      subtitle: "Proportion & Intent",
      description: "Every sofa or furniture piece starts with understanding functional requirements—analyzing seating dimensions, back angles, and style intent before assembly begins.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "02",
      title: "Form",
      subtitle: "Structure & Framework",
      description: "Building the underlying structural foundation, ensuring sturdy joinery, balanced weight distribution, and durable suspension support for enduring resilience.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "03",
      title: "Upholstery",
      subtitle: "Layering & Textile Fitting",
      description: "Precision foam shaping, web tensioning, and careful placement of high-grade upholstery fabrics. Every curve and fold is smoothed to maintain uniform surface tension.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: "04",
      title: "Finishing",
      subtitle: "Stitching & Final Detailing",
      description: "The culminating stage—attending to welt cords, border piping, deep button tufting, and thorough visual inspection before delivery.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const detailStudies = [
    {
      title: "Tactile Fabric Weaves",
      category: "Textile Selection",
      image: "https://images.unsplash.com/photo-1580481077194-469b008d59fb?auto=format&fit=crop&w=800&q=80",
      caption: "Rich textured upholstery weaves offering depth of hand and visual warmth."
    },
    {
      title: "Precision Piping & Seams",
      category: "Stitching Alignment",
      image: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&w=800&q=80",
      caption: "Consistent seam borders and corner tensioning along contoured silhouettes."
    },
    {
      title: "Diamond Button Tufting",
      category: "Classic Craft",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      caption: "Hand-pleated diamond creases folded with disciplined depth and alignment."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink text-brand-darkRose text-xs tracking-widest uppercase font-semibold mb-4">
          Furniture Artistry & Upholstery
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-charcoal tracking-tight">
          Where Furniture Meets Detail
        </h1>
        <p className="text-base sm:text-xl text-brand-mutedGray max-w-2xl mx-auto mt-4 font-light leading-relaxed">
          Explore the meticulous upholstery, stitching, and finishing processes behind every sofa and furniture piece created at BABER POSHISH MAKER.
        </p>
      </section>

      {/* Visual Process: 01 Concept, 02 Form, 03 Upholstery, 04 Finishing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-deepRose font-bold block mb-1">
            Manufacturing Journey
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-brand-charcoal">
            The 4 Stages of Creation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-brand-offWhite rounded-3xl overflow-hidden border border-brand-charcoal/5 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-charcoal/90 text-brand-offWhite font-editorial text-lg font-bold px-3 py-1 rounded-lg">
                  {step.step}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-brand-deepRose font-bold block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-brand-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-mutedGray mt-2.5 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Close-Up Texture & Detail Studies */}
      <section className="py-20 bg-brand-warmCream/60 border-y border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
              Material Intimacy
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight mt-1">
              Close-Up Detail Studies
            </h2>
            <p className="text-sm sm:text-base text-brand-mutedGray mt-3 font-light">
              A sofa's true quality reveals itself in the seams, folds, and tactile texture of its upholstery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {detailStudies.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-offWhite rounded-3xl overflow-hidden border border-brand-charcoal/5 shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-brand-offWhite/90 backdrop-blur-sm text-brand-darkRose text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-editorial text-2xl font-bold text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-mutedGray mt-2 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Workshop Invitation CTA */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-brand-charcoal text-brand-offWhite max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-pink font-semibold">
            Visit Our Workshop
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl font-bold">
            Experience Fabrics & Finishes in Person
          </h3>
          <p className="text-sm text-brand-offWhite/70 max-w-xl mx-auto font-light leading-relaxed">
            Stop by Moon Optical in Ichhra Furniture Market, Lahore to view upholstery fabric swatches, inspect foam firmness, and discuss your furniture design.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-pink hover:bg-white text-brand-charcoal px-7 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-colors"
            >
              Contact Workshop
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="bg-brand-offWhite/10 hover:bg-brand-offWhite/20 text-brand-offWhite px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold border border-brand-offWhite/20 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-pink" />
              <span>Call +92 324 4892121</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
