import { FadeUp } from "@/components/ui/FadeUp";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/lib/galleryData";

export function GalleryStats() {
  const categoryBreakdown = GALLERY_CATEGORIES.filter((c) => c.value !== "all").map(
    ({ value, label }) => ({
      label,
      count: GALLERY_ITEMS.filter((i) => i.category === value).length,
    })
  ).filter((c) => c.count > 0);

  return (
    <section
      className="bg-white py-10 border-b border-cream-dark"
      aria-label="Gallery statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-1">
                Photo Library
              </p>
              <p className="font-display font-black text-maroon-deep text-3xl">
                {GALLERY_ITEMS.length}{" "}
                <span className="text-xl font-semibold text-neutral-400">
                  photos across {categoryBreakdown.length} categories
                </span>
              </p>
            </div>

            <dl className="flex flex-wrap gap-3">
              {categoryBreakdown.map(({ label, count }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-cream border border-cream-dark rounded-xl px-4 py-2.5"
                >
                  <dt className="text-xs text-neutral-500 hidden sm:block">{label}</dt>
                  <dd className="font-display font-bold text-maroon-deep text-sm">{count}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
