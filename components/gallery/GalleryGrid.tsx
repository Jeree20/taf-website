"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ZoomIn } from "lucide-react";
import {
  type GalleryCategory,
  type GalleryItem,
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
} from "@/lib/galleryData";
import { GalleryFilter } from "./GalleryFilter";
import { GalleryLightbox } from "./GalleryLightbox";
import { FadeUp } from "@/components/ui/FadeUp";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered = useMemo<GalleryItem[]>(
    () =>
      activeCategory === "all"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const counts = useMemo(() => {
    const map: Record<GalleryCategory, number> = { all: GALLERY_ITEMS.length } as Record<GalleryCategory, number>;
    GALLERY_CATEGORIES.forEach(({ value }) => {
      if (value === "all") return;
      map[value] = GALLERY_ITEMS.filter((i) => i.category === value).length;
    });
    return map;
  }, []);

  const lightboxIndex = useMemo(
    () => filtered.findIndex((i) => i.id === lightboxId),
    [filtered, lightboxId]
  );

  const openLightbox = useCallback((id: string) => setLightboxId(id), []);
  const closeLightbox = useCallback(() => setLightboxId(null), []);
  const prevItem = useCallback(() => {
    setLightboxId(
      filtered[(lightboxIndex - 1 + filtered.length) % filtered.length].id
    );
  }, [filtered, lightboxIndex]);
  const nextItem = useCallback(() => {
    setLightboxId(filtered[(lightboxIndex + 1) % filtered.length].id);
  }, [filtered, lightboxIndex]);

  const handleCategoryChange = (cat: GalleryCategory) => {
    setActiveCategory(cat);
    setLightboxId(null);
  };

  const lightboxItem = lightboxId != null
    ? filtered.find((i) => i.id === lightboxId) ?? null
    : null;

  return (
    <>
      {/* Filter bar */}
      <section className="bg-cream py-8 border-b border-cream-dark sticky top-[70px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <GalleryFilter
            active={activeCategory}
            counts={counts}
            onChange={handleCategoryChange}
          />
        </div>
      </section>

      {/* Grid */}
      <section
        className="bg-cream py-12 lg:py-16 min-h-[60vh]"
        aria-label={`Gallery — ${activeCategory === "all" ? "all photos" : activeCategory}`}
        aria-live="polite"
        aria-atomic="false"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="font-display font-bold text-maroon-deep text-xl mb-2">
                No photos in this category yet
              </p>
              <p className="text-neutral-500 text-sm font-light">
                Check back soon or browse all photos.
              </p>
            </div>
          ) : (
            <>
              <p className="text-neutral-400 text-xs font-medium tracking-widest uppercase mb-6 text-right">
                {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
              </p>

              {/* Masonry-style grid using CSS columns */}
              <div
                className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0"
                role="list"
                aria-label="Photo gallery"
              >
                {filtered.map((item, i) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={i}
                    onOpen={openLightbox}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <GalleryLightbox
          item={lightboxItem}
          total={filtered.length}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </>
  );
}

/* ─── Individual card ─── */

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onOpen: (id: string) => void;
}

function GalleryCard({ item, index, onOpen }: GalleryCardProps) {
  return (
    <div
      role="listitem"
      className="break-inside-avoid mb-4"
    >
      <FadeUp delay={Math.min(index * 40, 320)}>
        <button
          onClick={() => onOpen(item.id)}
          aria-label={`View photo: ${item.title}`}
          className="group w-full block rounded-2xl overflow-hidden bg-white border border-cream-dark hover:shadow-xl hover:border-maroon/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon focus-visible:ring-offset-2"
        >
          {/* Real image */}
          <div
            className={clsx(
              "relative w-full overflow-hidden",
              item.aspect
            )}
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-maroon-deep/0 group-hover:bg-maroon-deep/40 transition-all duration-300 flex items-center justify-center"
              aria-hidden
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <ZoomIn size={22} className="text-white" />
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3" aria-hidden>
              <span className="bg-maroon-deep/70 backdrop-blur-sm text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
                {item.program}
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="p-4 text-left">
            <h3 className="font-display font-bold text-maroon-deep text-sm mb-1 leading-tight">
              {item.title}
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed font-light line-clamp-2">
              {item.caption}
            </p>
          </div>
        </button>
      </FadeUp>
    </div>
  );
}
