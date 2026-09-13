import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-brand-offWhite/10 hover:bg-brand-pink text-brand-offWhite hover:text-brand-charcoal transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-offWhite/10 hover:bg-brand-pink text-brand-offWhite hover:text-brand-charcoal transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-offWhite/10 hover:bg-brand-pink text-brand-offWhite hover:text-brand-charcoal transition-colors z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center">
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-brand-offWhite/10 max-h-[72vh]">
          <img
            src={currentItem.image}
            alt={currentItem.title || "Gallery Showcase Item"}
            className="max-h-[72vh] w-auto object-contain rounded-xl select-none"
          />
        </div>
        
        {/* Caption */}
        <div className="mt-4 text-brand-offWhite max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[10px] tracking-widest uppercase text-brand-pink font-semibold bg-brand-darkRose/80 px-2.5 py-0.5 rounded">
              {currentItem.categoryLabel || currentItem.category}
            </span>
            <span className="text-xs text-brand-offWhite/40">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
          <h4 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight">
            {currentItem.title}
          </h4>
          {currentItem.caption && (
            <p className="text-xs sm:text-sm text-brand-offWhite/70 mt-1 font-light">
              {currentItem.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
