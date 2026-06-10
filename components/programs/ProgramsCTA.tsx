import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";

const actions = [
  {
    icon: "Heart",
    title: "Donate to a Program",
    desc: "Choose a specific program to support — from the Football Academy to the library — or give to the general TAF fund.",
    href: "/donate",
    cta: "Donate Now",
  },
  {
    icon: "Users2",
    title: "Volunteer Your Skills",
    desc: "Coach football, tutor students, mentor youth, manage social media — there is a place for every skill at TAF.",
    href: "/volunteer",
    cta: "Volunteer",
  },
  {
    icon: "Handshake",
    title: "Partner With TAF",
    desc: "Bring your organisation, business, or church into a meaningful partnership with one of Nairobi's most impactful CBOs.",
    href: "/contact",
    cta: "Get in Touch",
  },
];

export function ProgramsCTA() {
  return (
    <section
      className="bg-gold-taf py-20 lg:py-24 relative overflow-hidden"
      aria-label="Get involved with TAF programs"
    >
      <div className="absolute inset-0 bg-dot-pattern-light pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight mb-4">
            Now Get Involved.
          </h2>
          <p className="text-maroon-deep/70 text-base font-light max-w-xl mx-auto">
            Every one of our programs runs because people like you choose to care about Kayole Soweto.
            Here is how you can make a difference today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {actions.map(({ icon, title, desc, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group bg-white/70 hover:bg-white border border-white/50 hover:border-white rounded-2xl p-7 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon-deep/30"
            >
              <span className="text-3xl block mb-4" aria-hidden><IconRenderer name={icon} size={32} /></span>
              <h3 className="font-display font-bold text-maroon-deep text-xl mb-2">{title}</h3>
              <p className="text-maroon-deep/60 text-sm leading-relaxed font-light mb-5">{desc}</p>
              <span className="inline-flex items-center gap-2 text-maroon font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                {cta} <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-maroon-deep/55 text-sm mb-3">Questions about a specific program?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="tel:+254733441983" variant="dark">0733 441 983</Button>
            <Button href="/contact" variant="outline-dark">Send a Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
