"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ChevronDown, Heart, ArrowRight } from "lucide-react";

const heroStats = [
  { value: 2500, suffix: "+", label: "Youth Served" },
  { value: 10,   suffix: "",  label: "Active Programs" },
  { value: 120,  suffix: "+", label: "Library Users" },
  { value: 6,    suffix: "",  label: "Partner Orgs" },
];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll<HTMLElement>("[data-anim]");
    nodes.forEach((n, i) => {
      n.style.opacity = "0";
      n.style.transform = "translateY(22px)";
      n.style.transition = `opacity 0.65s ease ${i * 130 + 80}ms, transform 0.65s ease ${i * 130 + 80}ms`;
      requestAnimationFrame(() => { n.style.opacity = "1"; n.style.transform = "translateY(0)"; });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[68px]" aria-label="Hero">

      {/* Full-bleed photo */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/gallery/outreach-feeding-program.png"
          alt=""
          fill
          priority
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
        />
        {/* Layered overlays — darker at left where text lives, lighter to reveal photo on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/90 via-maroon-deep/72 to-maroon-deep/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-maroon-deep/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28" ref={ref}>
        <div className="max-w-2xl">

          {/* Trust badge */}
          <div data-anim>
            <span className="inline-flex items-center gap-2 bg-white/8 border border-white/18 text-white/80 text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-taf flex-shrink-0" aria-hidden />
              Registered CBO &middot; Government of Kenya &middot; Kayole, Nairobi
            </span>
          </div>

          {/* Headline */}
          <div data-anim className="mt-7">
            <h1 className="font-display font-black leading-[1.02] text-balance">
              <span className="block text-white text-5xl sm:text-6xl lg:text-[5rem]">Transforming</span>
              <span className="block text-sky-taf text-5xl sm:text-6xl lg:text-[5rem]">Lives in</span>
              <span className="block text-gold-taf text-5xl sm:text-6xl lg:text-[5rem]">Kayole.</span>
            </h1>
          </div>

          {/* Tagline */}
          <div data-anim className="mt-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-gold-taf rounded-full" aria-hidden />
              <p className="text-gold-taf/90 text-xs font-bold tracking-[0.18em] uppercase">
                We Empower to Empower
              </p>
            </div>
          </div>

          {/* Descriptor */}
          <div data-anim>
            <p className="mt-6 text-white/78 text-[1.05rem] leading-[1.75] max-w-xl">
              A community-led organisation serving Kayole Soweto since our founding —
              through youth sports, education, women&apos;s empowerment, and hands-on
              community outreach every single day.
            </p>
          </div>

          {/* CTAs */}
          <div data-anim className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-gold-taf text-maroon-deep text-sm font-bold tracking-wide uppercase px-6 py-3.5 rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-gold-taf/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2"
            >
              <Heart size={15} aria-hidden />
              Support Our Work
            </Link>
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold tracking-wide uppercase px-6 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Programs
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          {/* Stats strip */}
          <div
            data-anim
            className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
            aria-label="Key statistics"
          >
            {heroStats.map(({ value, suffix, label }) => (
              <div key={label} className="text-center">
                <p className="font-display font-black text-white text-2xl sm:text-3xl leading-none">
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <p className="text-white/50 text-[10px] tracking-wider uppercase font-semibold mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf rounded"
        aria-label="Scroll down"
      >
        <span className="text-[9px] tracking-[0.15em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
