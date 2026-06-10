import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Breadcrumb { label: string; href?: string; }

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleEm?: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
}

export function PageHero({ eyebrow, title, titleEm, subtitle, breadcrumbs, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative bg-maroon-deep pt-[68px] overflow-hidden" aria-label="Page header">

      {backgroundImage && (
        <div className="absolute inset-0" aria-hidden>
          <Image src={backgroundImage} alt="" fill className="object-cover object-center" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/92 via-maroon-deep/80 to-maroon-deep/60" />
        </div>
      )}

      {/* Subtle dot texture */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-20" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-16 lg:pt-20 lg:pb-20">

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-[11px] text-white/35 flex-wrap" role="list">
            <li>
              <Link href="/" className="hover:text-white/65 transition-colors focus-visible:outline-none focus-visible:underline">Home</Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight size={11} aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white/65 transition-colors focus-visible:outline-none focus-visible:underline">{crumb.label}</Link>
                ) : (
                  <span className="text-gold-taf/80 font-medium" aria-current={i === breadcrumbs.length - 1 ? "page" : undefined}>{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="text-gold-taf text-[11px] font-bold tracking-[0.12em] uppercase mb-5">{eyebrow}</p>

          <h1 className="font-display font-black text-white leading-[1.04] text-balance text-4xl sm:text-5xl lg:text-6xl mb-6">
            {title}
            {titleEm && <><br /><em className="text-sky-taf not-italic">{titleEm}</em></>}
          </h1>

          <p className="text-white/68 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative z-10 h-10 overflow-hidden" aria-hidden>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 40L60 33C120 27 240 13 360 10C480 7 600 13 720 17C840 20 960 20 1080 17C1200 13 1320 7 1380 3L1440 0V40H0Z" fill="#FAF7F2" />
        </svg>
      </div>
    </section>
  );
}
