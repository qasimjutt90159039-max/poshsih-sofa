import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { interiorTimeline, interiorDisciplines } from "../data/interiorData";
import { businessInfo } from "../data/businessInfo";

export default function HomeInterior() {
  return (
    <div className="pt-24 pb-20">
      
      {/* Editorial Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink text-brand-darkRose text-xs tracking-widest uppercase font-semibold mb-4">
          Spatial Harmony & Styling
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-charcoal tracking-tight">
          Home Interior Coordination
        </h1>
        <p className="text-base sm:text-xl text-brand-mutedGray max-w-2xl mx-auto mt-4 font-light leading-relaxed">
          Transforming living spaces with thoughtful furniture arrangement, bespoke sofa proportions, and coordinated interior aesthetics.
        </p>
      </section>

      {/* Vertical Editorial Timeline: 01 to 04 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-deepRose font-bold block mb-1">
            Our Interior Process
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-brand-charcoal">
            A Step-by-Step Approach to Harmonious Spaces
          </h2>
        </div>

        {/* Timeline Container with vertical connecting center line */}
        <div className="relative">
          {/* Vertical line visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-brand-pink -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {interiorTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  
                  {/* Visual block (5 cols) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2 lg:col-start-7"
                    }`}
                  >
                    <div className="relative group overflow-hidden rounded-3xl shadow-soft border-4 border-white aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-brand-charcoal/80 text-brand-offWhite text-xs px-3 py-1 rounded font-mono">
                        Phase {item.step}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Node Marker (Absolute on center line) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-offWhite border-2 border-brand-deepRose items-center justify-center font-editorial text-sm font-bold text-brand-darkRose shadow-md z-10">
                    {item.step}
                  </div>

                  {/* Text Details Block (5 cols) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-2 lg:col-start-7" : "lg:order-1 lg:col-start-1"
                    } space-y-4`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-editorial text-3xl font-bold text-brand-deepRose lg:hidden">
                        {item.step}
                      </span>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-brand-mutedGray font-semibold block">
                          {item.subtitle}
                        </span>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-brand-mutedGray leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {item.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-charcoal/90">
                          <CheckCircle2 className="w-4 h-4 text-brand-deepRose shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 4 Dedicated Sections: Living Room Styling, Furniture Coordination, Sofa & Seating, Interior Aesthetics */}
      <section className="py-20 bg-brand-warmCream/60 border-t border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-deepRose font-semibold">
              Interior Disciplines
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight mt-1">
              Cohesive Living Spaces
            </h2>
            <p className="text-sm text-brand-mutedGray mt-3">
              Explore how we approach every aspect of living room styling and interior furniture unity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {interiorDisciplines.map((disc) => (
              <div
                key={disc.id}
                className="bg-brand-offWhite rounded-3xl overflow-hidden border border-brand-charcoal/5 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={disc.image}
                    alt={disc.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-editorial text-2xl font-bold text-brand-offWhite">
                    {disc.title}
                  </h3>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-brand-darkRose">
                      {disc.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-mutedGray leading-relaxed font-light">
                      {disc.details}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-charcoal/5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-brand-charcoal/70 font-semibold">
                      Consult with Workshop
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-deepRose hover:text-brand-darkRose transition-colors"
                    >
                      <span>Get In Touch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-offWhite border border-brand-pink shadow-soft max-w-3xl mx-auto space-y-4">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal">
            Planning Your Home Interior Seating?
          </h3>
          <p className="text-sm text-brand-mutedGray max-w-lg mx-auto font-light">
            Contact BABER POSHISH MAKER to discuss sofa dimensions, matching chairs, and fabric selections tailored to your space.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="bg-brand-softPink hover:bg-brand-pink text-brand-darkRose px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-deepRose/20 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-brand-deepRose" />
              <span>Call +92 324 4892121</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
