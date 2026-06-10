import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { FadeUp } from "@/components/ui/FadeUp";

export function GalleryUploadCTA() {
  return (
    <section
      className="bg-maroon-deep py-16"
      aria-labelledby="gallery-cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gold-taf/15 border border-gold-taf/25 rounded-xl flex items-center justify-center">
                <Camera size={22} className="text-gold-taf" aria-hidden />
              </div>
              <p className="text-gold-taf text-[11px] font-semibold tracking-widest uppercase">
                Help Build Our Gallery
              </p>
            </div>
            <h2
              id="gallery-cta-heading"
              className="font-display font-black text-white text-3xl sm:text-4xl leading-tight mb-4 text-balance"
            >
              Have Photos From a TAF Event or Program?
            </h2>
            <p className="text-white/60 text-base leading-relaxed font-light mb-6">
              If you have attended a TAF football match, community event, or
              outreach drive, we would love to feature your photos in this gallery.
              Send them to us and help document the story of Kayole Soweto&apos;s
              transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="gold">
                <Upload size={15} aria-hidden /> Submit Photos
              </Button>
              <Button
                href="https://wa.me/254733441983"
                variant="outline-sky"
                external
              >
                WhatsApp Us
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "Trophy", label: "Football matches", count: "4 squads" },
                { icon: "Sparkles", label: "Community events", count: "Year-round" },
                { icon: "BookOpen", label: "Library activities", count: "Daily" },
                { icon: "Globe", label: "Outreach drives", count: "Regular" },
              ].map(({ icon, label, count }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 transition-colors"
                >
                  <span className="text-3xl block mb-3" aria-hidden><IconRenderer name={icon} size={32} /></span>
                  <p className="font-display font-bold text-white text-sm mb-1">{label}</p>
                  <p className="text-white/40 text-xs">{count}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
