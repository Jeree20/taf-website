import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { IconRenderer } from "@/components/ui/IconRenderer";

const links = [
  {
    icon: "Trophy",
    title: "Explore Our Programs",
    desc: "See all ten TAF programs — from the Football Academy to our community library.",
    href: "/programs",
    cta: "View Programs",
  },
  {
    icon: "Heart",
    title: "Make a Donation",
    desc: "Support TAF financially via M-Pesa, bank transfer, or international card payment.",
    href: "/donate",
    cta: "Donate Now",
  },
  {
    icon: "Users2",
    title: "Volunteer With Us",
    desc: "Bring your skills to Kayole — whether you're local or international, we need you.",
    href: "/volunteer",
    cta: "Get Involved",
  },
];

export function AboutCTA() {
  return (
    <section
      className="bg-gold-taf py-20 lg:py-24 relative overflow-hidden"
      aria-label="Take action with Tumaini African Foundation"
    >
      <div
        className="absolute inset-0 bg-dot-pattern-light pointer-events-none"
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight mb-4">
            Now You Know Our Story.
          </h2>
          <p className="text-maroon-deep/70 text-base font-light max-w-xl mx-auto">
            The question is: what will you do with it? Here are three ways to
            become part of the Tumaini African Foundation community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {links.map(({ icon, title, desc, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group bg-white/70 hover:bg-white border border-white/50 hover:border-white rounded-xl p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon-deep/30"
            >
              <span className="text-3xl mb-4 block" aria-hidden><IconRenderer name={icon} size={32} /></span>
              <h3 className="font-display font-bold text-maroon-deep text-xl mb-2">
                {title}
              </h3>
              <p className="text-maroon-deep/65 text-sm leading-relaxed font-light mb-5">
                {desc}
              </p>
              <span className="inline-flex items-center gap-2 text-maroon font-semibold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                {cta} <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-maroon-deep/60 text-sm mb-2">Have questions? Reach us directly.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="tel:+254733441983" variant="dark" aria-label="Call TAF on 0733 441 983">
              0733 441 983
            </Button>
            <Button href="/contact" variant="outline-dark">
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
