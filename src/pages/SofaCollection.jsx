import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Phone, CheckCircle, Sparkles } from "lucide-react";
import { sofaStyles } from "../data/sofaData";
import { businessInfo } from "../data/businessInfo";

export default function SofaCollection() {
  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink text-brand-darkRose text-xs tracking-widest uppercase font-semibold mb-4">
          Master Sofa Manufacturing
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-charcoal tracking-tight">
          Sofas That Define the Room
        </h1>
        <p className="text-base sm:text-xl text-brand-mutedGray max-w-2xl mx-auto mt-4 font-light leading-relaxed">
          From tailored modern straight-line silhouettes to deep-tufted classic suites, discover sofas engineered with craftsmanship, proportional balance, and enduring comfort.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <span>Discuss Your Sofa Requirements</span>
            <ArrowRight className="w-4 h-4 text-brand-pink group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-softPink hover:bg-brand-pink text-brand-darkRose px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold border border-brand-deepRose/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-brand-deepRose" />
            <span>Call +92 324 4892121</span>
          </a>
        </div>
      </section>

      {/* Asymmetric Sofa Styles Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {sofaStyles.map((style, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={style.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Visual Presentation (7 columns) */}
              <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative group overflow-hidden rounded-3xl shadow-soft border-4 border-white aspect-[16/10]">
                  <img
                    src={style.heroImage}
                    alt={style.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 bg-brand-warmCream/95 backdrop-blur-sm text-brand-darkRose font-editorial text-lg font-bold px-4 py-1.5 rounded-full shadow">
                    Style {style.number}
                  </div>

                  {/* Floating Action Arrow */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-pink text-brand-charcoal flex items-center justify-center shadow-lg transform translate-y-2 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-6 left-6 text-brand-offWhite max-w-sm">
                    <span className="text-[11px] uppercase tracking-wider text-brand-pink font-semibold">
                      Featured Archetype
                    </span>
                    <h3 className="font-editorial text-2xl font-bold">
                      {style.title}
                    </h3>
                  </div>
                </div>

                {/* Sub-gallery thumbnail preview */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {style.gallery.map((gItem, gIdx) => (
                    <div key={gIdx} className="bg-brand-offWhite p-3 rounded-2xl border border-brand-charcoal/5 shadow-sm flex items-center gap-3">
                      <img
                        src={gItem.image}
                        alt={gItem.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-brand-pink/50"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-brand-charcoal truncate block">
                          {gItem.title}
                        </span>
                        <span className="text-[11px] text-brand-mutedGray block leading-tight">
                          {gItem.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text & Feature Details (5 columns) */}
              <div className={`lg:col-span-5 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <div className="inline-block text-xs uppercase tracking-widest text-brand-deepRose font-bold pb-1 border-b-2 border-brand-pink">
                  {style.tagline}
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal leading-tight">
                  {style.title}
                </h2>

                <p className="text-sm sm:text-base text-brand-mutedGray leading-relaxed font-light">
                  {style.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase tracking-wider text-brand-charcoal font-semibold block">
                    Design & Construction Highlights:
                  </span>
                  {style.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-brand-charcoal/90">
                      <CheckCircle className="w-4 h-4 text-brand-deepRose shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    <span>Discuss Your Sofa Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-pink" />
                  </Link>
                </div>

              </div>

            </div>
          );
        })}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-charcoal text-brand-offWhite p-10 sm:p-14 rounded-3xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-deepRose/20 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs uppercase tracking-[0.25em] text-brand-pink font-semibold block">
            Bespoke Sofa Manufacturing
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Build Your Custom Sofa?
          </h3>
          <p className="text-sm sm:text-base text-brand-offWhite/70 max-w-xl mx-auto font-light leading-relaxed">
            Whether you need a specific seat depth, exact length for your wall, or a specific shade of velvet, we craft each piece directly in Ichhra Lahore.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-pink hover:bg-white text-brand-charcoal px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-200 shadow"
            >
              Discuss Your Sofa Requirements
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="bg-brand-offWhite/10 hover:bg-brand-offWhite/20 text-brand-offWhite px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold border border-brand-offWhite/20 transition-colors"
            >
              Call Us: +92 324 4892121
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
