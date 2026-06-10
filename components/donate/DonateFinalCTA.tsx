import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";

export function DonateFinalCTA() {
  return (
    <section
      className="bg-gold-taf py-20 lg:py-28 relative overflow-hidden"
      aria-label="Final donation call to action"
    >
      <div className="absolute inset-0 bg-dot-pattern-light pointer-events-none" aria-hidden />

      {/* Large background text */}
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[20vw] text-maroon-deep/5 select-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        GIVE
      </p>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <p className="text-maroon-deep/50 text-xs font-semibold tracking-widest uppercase mb-4">
            Every Shilling Counts
          </p>
          <h2 className="font-display font-black text-maroon-deep text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
            Ready to Transform<br />a Life Today?
          </h2>
          <p className="text-maroon-deep/70 text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto">
            KES 500 feeds a child for a week. KES 1,500 supports a girl&apos;s mentor for a month.
            KES 3,000 kits a footballer for a season. What will your gift do?
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Button href="#mpesa" variant="dark" className="text-base px-8 py-4">
              Give via M-Pesa
            </Button>
            <Button href="#international" variant="outline-dark" className="text-base px-8 py-4">
              Pay by Card
            </Button>
          </div>

          {/* Quick reference panel */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white/50 rounded-2xl px-6 sm:px-8 py-5 border border-white/60">
            <div className="text-center">
              <p className="text-maroon-deep/50 text-[10px] tracking-widest uppercase mb-1">Paybill</p>
              <p className="font-display font-black text-maroon-deep text-2xl">123456</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-maroon-deep/15" aria-hidden />
            <div className="text-center">
              <p className="text-maroon-deep/50 text-[10px] tracking-widest uppercase mb-1">Account</p>
              <p className="font-display font-bold text-maroon-deep text-xl">TAF-DONATE</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-maroon-deep/15" aria-hidden />
            <div className="text-center">
              <p className="text-maroon-deep/50 text-[10px] tracking-widest uppercase mb-1">Call / WhatsApp</p>
              <a
                href="tel:+254733441983"
                className="font-semibold text-maroon-deep text-lg hover:text-maroon transition-colors focus-visible:outline-none focus-visible:underline"
              >
                0733 441 983
              </a>
            </div>
          </div>

          <p className="mt-6 text-maroon-deep/50 text-xs">
            Registered CBO with the Government of Kenya · All gifts used for community programs in Kayole Soweto
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
