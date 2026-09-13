import { useState } from "react";
import { Maximize2, Sparkles, Filter } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/galleryData";
import LightboxModal from "../components/LightboxModal";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-softPink border border-brand-pink text-brand-darkRose text-xs tracking-widest uppercase font-semibold mb-4">
          Visual Catalog
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-charcoal tracking-tight">
          Showroom Gallery
        </h1>
        <p className="text-base sm:text-xl text-brand-mutedGray max-w-2xl mx-auto mt-4 font-light leading-relaxed">
          A visual curation of modern and classic sofas, furniture pieces, coordinated interiors, and intricate upholstery details.
        </p>
        
        {/* Editorial note: strict compliance with no-fake-project rule */}
        <p className="text-xs text-brand-mutedGray/80 mt-3 max-w-lg mx-auto italic">
          (Visual studies and design inspirations showcasing the styles, forms, and finishing crafted at BABER POSHISH MAKER.)
        </p>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id);
                setCurrentIdx(0);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-brand-charcoal text-brand-offWhite shadow-sm"
                  : "bg-brand-warmCream text-brand-charcoal hover:bg-brand-softPink hover:text-brand-darkRose border border-brand-charcoal/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Diverse Aspect Ratio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredItems.map((item, index) => {
            // Give specific items varied spans for organic masonry look
            let spanClass = "col-span-1 row-span-1";
            if (item.category === "sofas" && index % 3 === 0) {
              spanClass = "col-span-1 sm:col-span-2 row-span-2";
            } else if (item.category === "interiors") {
              spanClass = "col-span-1 sm:col-span-2 row-span-1";
            } else if (item.category === "furniture" && index % 2 === 1) {
              spanClass = "col-span-1 row-span-2";
            }

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-lift transition-all duration-300 cursor-pointer bg-brand-warmCream ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10 bg-brand-offWhite/90 backdrop-blur-sm text-brand-darkRose text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {item.categoryLabel}
                </div>

                {/* Hover zoom indicator */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-pink text-brand-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Title on hover */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-brand-offWhite transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-offWhite/70 mt-1 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentIdx}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      
    </div>
  );
}
