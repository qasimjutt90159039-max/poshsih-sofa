import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { furnitureCategories, furnitureItems } from "../data/furnitureData";
import { businessInfo } from "../data/businessInfo";

export default function Furniture() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? furnitureItems
      : furnitureItems.filter((item) => item.categoryId === activeCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink text-brand-darkRose text-xs tracking-widest uppercase font-semibold mb-4">
          Showroom & Catalog
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal tracking-tight">
          Furniture for Modern Living
        </h1>
        <p className="text-base sm:text-lg text-brand-mutedGray max-w-2xl mx-auto mt-4 font-light leading-relaxed">
          Explore our range of living room furniture, sofa suites, accent chairs, and coordinated interior furnishings designed and manufactured in Ichhra Lahore.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
          {furnitureCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-charcoal text-brand-offWhite shadow-sm"
                  : "bg-brand-warmCream text-brand-charcoal hover:bg-brand-softPink hover:text-brand-darkRose border border-brand-charcoal/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-brand-offWhite rounded-3xl overflow-hidden border border-brand-charcoal/5 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-charcoal/80 backdrop-blur-sm text-brand-offWhite text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              {/* Information */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal group-hover:text-brand-darkRose transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-mutedGray mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-charcoal/5 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wider text-brand-deepRose font-semibold">
                    Custom Built to Specification
                  </span>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-darkRose transition-colors group-hover:translate-x-1"
                  >
                    <span>Inquire About Piece</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-deepRose" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-warmCream border border-brand-pink flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-darkRose font-bold block mb-1">
              Have a Custom Concept?
            </span>
            <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal">
              We manufacture furniture tailored to your exact living room space
            </h4>
            <p className="text-sm text-brand-mutedGray mt-2 max-w-xl">
              Bring your room dimensions, color swatches, or reference ideas to our Ichhra workshop.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="bg-brand-charcoal hover:bg-brand-darkRose text-brand-offWhite px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow"
            >
              Discuss Requirements
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="bg-brand-softPink hover:bg-brand-pink text-brand-darkRose px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-brand-deepRose/20 transition-colors"
            >
              Call +92 324 4892121
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
