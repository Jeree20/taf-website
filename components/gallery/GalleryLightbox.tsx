"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { type GalleryItem } from "@/lib/galleryData";

interface LightboxProps {
  item: GalleryItem;
  total: number;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  item,
  total,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${item.title}`}
      className="fixed inset-0 z-[200] bg-maroon-deep/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
      >
        <X size={20} aria-hidden />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
      >
        <ChevronLeft size={24} aria-hidden />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
      >
        <ChevronRight size={24} aria-hidden />
      </button>

      {/* Content */}
      <div
        className="relative w-full max-w-4xl flex flex-col items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Real image */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-maroon"
          style={{ maxHeight: "65vh", minHeight: "320px" }}
        >
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>

        {/* Meta */}
        <div className="w-full bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex-1 min-w-0">
              <p className="text-gold-taf text-[10px] font-semibold tracking-widest uppercase mb-1">
                {item.program}
              </p>
              <h2 className="font-display font-bold text-white text-xl mb-2 text-balance">
                {item.title}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {item.caption}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-white/30 text-xs">
                {currentIndex + 1} / {total}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 text-xs hidden md:block">
        ← → arrow keys to navigate · Esc to close
      </p>
    </div>
  );
}
