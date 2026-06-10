import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function GalleryCTA() {
  return (
    <section
      className="bg-gold-taf py-16 lg:py-20 relative overflow-hidden"
      aria-label="Gallery next steps"
    >
      <div className="absolute inset-0 bg-dot-pattern-light pointer-events-none" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-maroon-deep/60 text-xs font-semibold tracking-widest uppercase mb-3">
          What You&apos;ve Seen Is Real
        </p>
        <h2 className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight mb-4 text-balance">
          Every Photo Is a Life Transformed.
        </h2>
        <p className="text-maroon-deep/70 text-base font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Behind every image in this gallery is a young person who chose discipline over the
          street, a woman who built a business from nothing, a child who ate because someone
          cared. Your support makes these moments possible.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/donate" variant="dark">
            Donate Now
          </Button>
          <Button href="/volunteer" variant="outline-dark">
            Volunteer With Us
          </Button>
          <Button href="/programs" variant="outline-dark">
            Explore Programs <ArrowRight size={14} aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
