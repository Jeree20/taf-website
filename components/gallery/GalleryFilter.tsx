"use client";

import clsx from "clsx";
import { type GalleryCategory, GALLERY_CATEGORIES } from "@/lib/galleryData";

interface GalleryFilterProps {
  active: GalleryCategory;
  counts: Record<GalleryCategory, number>;
  onChange: (cat: GalleryCategory) => void;
}

export function GalleryFilter({ active, counts, onChange }: GalleryFilterProps) {
  return (
    <nav aria-label="Filter gallery by category">
      <ul
        className="flex flex-wrap gap-2 justify-center"
        role="list"
      >
        {GALLERY_CATEGORIES.map(({ value, label }) => {
          const isActive = active === value;
          const count = counts[value] ?? 0;
          return (
            <li key={value}>
              <button
                onClick={() => onChange(value)}
                aria-pressed={isActive}
                aria-label={`Filter by ${label} — ${count} photo${count !== 1 ? "s" : ""}`}
                className={clsx(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2",
                  isActive
                    ? "bg-maroon text-white shadow-lg shadow-maroon/25 -translate-y-0.5"
                    : "bg-white border border-cream-dark text-neutral-600 hover:border-maroon/30 hover:text-maroon hover:shadow-sm"
                )}
              >
                <span>{label}</span>
                <span
                  className={clsx(
                    "text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none",
                    isActive ? "bg-white/20 text-white" : "bg-cream-dark text-neutral-500"
                  )}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
