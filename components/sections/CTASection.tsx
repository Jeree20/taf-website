import Image from "next/image";
import Link from "next/link";
import { Heart, Users } from "lucide-react";

export function CTASection() {
  return (
    <section id="donate" className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">

      {/* Background photo */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/gallery/outreach-children-street.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-maroon-deep/82" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-gold-taf text-[11px] font-bold tracking-[0.12em] uppercase mb-5">
          Make a Difference Today
        </p>
        <h2 id="cta-heading" className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-balance mb-7">
          Join the <span className="text-gold-taf">Transformation</span><br />
          in Kayole Soweto
        </h2>
        <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Every contribution — however large or small — goes directly into programs
          that transform youth, strengthen families, and build a stronger Kayole.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-gold-taf text-maroon-deep text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-gold-taf/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2"
          >
            <Heart size={16} aria-hidden />
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="inline-flex items-center gap-2 border-2 border-white/35 text-white text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/55 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Users size={16} aria-hidden />
            Volunteer
          </Link>
        </div>

        {/* M-Pesa strip */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/8 border border-white/15 backdrop-blur-sm rounded-xl px-7 py-4">
          <p className="text-white/55 text-xs font-bold tracking-widest uppercase">M-Pesa Paybill</p>
          <div className="hidden sm:block w-px h-4 bg-white/20" aria-hidden />
          <p className="text-white text-sm font-semibold">
            Paybill: <span className="text-gold-taf font-bold">123456</span>
            <span className="text-white/40 mx-2">&middot;</span>
            Account: <span className="text-gold-taf font-bold">TAF-DONATE</span>
          </p>
        </div>
      </div>
    </section>
  );
}
