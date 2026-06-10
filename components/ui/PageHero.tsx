import { type ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  variant?: "maroon" | "sky" | "gold";
}

const variantClasses: Record<string, string> = {
  maroon: "bg-maroon-deep",
  sky: "bg-sky-dark",
  gold: "bg-gold-dark",
};

export function PageHero({
  eyebrow,
  title,
  titleEm,
  subtitle,
  breadcrumbs,
  children,
  variant = "maroon",
}: PageHeroProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden pt-[70px]",
        variantClasses[variant]
      )}
      aria-label="Page header"
    >
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" aria-hidden />
      <div
        className="absolute top-0 right-0 bottom-0 w-2/5 opacity-30 clip-diagonal pointer-events-none"
        style={{ background: "rgba(255,255,255,0.04)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-1.5 text-xs text-white/40 font-medium uppercase tracking-wider">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={12} aria-hidden className="text-white/25" />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-taf" aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-4">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance max-w-3xl">
          {title}
          {titleEm && (
            <>
              {" "}
              <em className="not-italic text-sky-taf">{titleEm}</em>
            </>
          )}
        </h1>

        {subtitle && (
          <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
