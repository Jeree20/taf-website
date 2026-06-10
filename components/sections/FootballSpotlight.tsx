import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight } from "lucide-react";

export function FootballSpotlight() {
  return (
    <section className="bg-maroon-deep py-24 lg:py-32 relative overflow-hidden" aria-labelledby="football-heading">

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Photo grid — left */}
          <FadeUp>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2 shadow-2xl">
                <Image src="/images/gallery/football-team-lineup.png" alt="TAF football team lined up before a match" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 to-transparent" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/gallery/football-womens-team.png" alt="TAF women's football team" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/gallery/football-junior-training.png" alt="Junior Academy training session" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </FadeUp>

          {/* Text — right */}
          <FadeUp delay={130}>
            <p className="text-gold-taf text-[11px] font-bold tracking-[0.12em] uppercase mb-5">
              Football Academy — Our Pride
            </p>
            <h2 id="football-heading" className="font-display font-black text-white text-4xl sm:text-5xl leading-[1.06] text-balance mb-6">
              More Than a Game.<br />
              <span className="text-sky-taf">A Life-Changer.</span>
            </h2>
            <p className="text-white/68 text-[1.02rem] leading-relaxed mb-10">
              The TAF Football Academy is the heartbeat of Kayole Soweto. We train
              multiple squads — seniors, youth, and women — giving talented players
              the structure, coaching, and opportunity they deserve. Every match is a
              step away from the streets and toward a future of purpose.
            </p>

            <Link
              href="/football-academy"
              className="inline-flex items-center gap-2 bg-gold-taf text-maroon-deep text-sm font-bold tracking-wide uppercase px-6 py-3.5 rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
            >
              Discover the Academy
              <ArrowRight size={14} aria-hidden />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
