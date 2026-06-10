import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { FadeUp } from "@/components/ui/FadeUp";

const alternativeWays = [
  {
    icon: "Heart",
    title: "Donate Instead",
    desc: "Can't give time? Give financially. Even KES 500 feeds a child for a week.",
    href: "/donate",
    cta: "Donate Now",
  },
  {
    icon: "Handshake",
    title: "Partner With TAF",
    desc: "Bring your organisation, church, or company into a meaningful partnership.",
    href: "/contact",
    cta: "Get in Touch",
  },
  {
    icon: "Megaphone",
    title: "Spread the Word",
    desc: "Share TAF with your network. Every connection helps Kayole Soweto grow stronger.",
    href: "https://facebook.com/TumainiAfricanFoundation",
    cta: "Follow Us",
    external: true,
  },
];

export function VolunteerCTA() {
  return (
    <section
      className="bg-gold-taf py-20 lg:py-24 relative overflow-hidden"
      aria-label="Get involved with TAF"
    >
      <div className="absolute inset-0 bg-dot-pattern-light pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-maroon-deep/50 text-xs font-semibold tracking-widest uppercase mb-3">
              Not Ready to Apply Yet?
            </p>
            <h2 className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight mb-4 text-balance">
              There Are Other Ways<br />to Support Kayole.
            </h2>
            <p className="text-maroon-deep/65 text-base font-light max-w-xl mx-auto">
              Volunteering is just one way to be part of the TAF community. Here are three more.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {alternativeWays.map(({ icon, title, desc, href, cta, external }, i) => (
            <FadeUp key={title} delay={i * 80}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group block bg-white/70 hover:bg-white border border-white/50 hover:border-white rounded-2xl p-7 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon-deep/30"
              >
                <span className="text-3xl block mb-4" aria-hidden><IconRenderer name={icon} size={32} /></span>
                <h3 className="font-display font-bold text-maroon-deep text-xl mb-2">{title}</h3>
                <p className="text-maroon-deep/60 text-sm leading-relaxed font-light mb-5">{desc}</p>
                <span className="inline-flex items-center gap-2 text-maroon font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                  {cta} →
                </span>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <div className="text-center">
            <p className="text-maroon-deep/55 text-sm mb-4">
              Questions about volunteering? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href="tel:+254733441983" variant="dark" aria-label="Call TAF on 0733 441 983">
                0733 441 983
              </Button>
              <Button href="https://wa.me/254733441983" variant="outline-dark" external aria-label="WhatsApp TAF">
                WhatsApp Us
              </Button>
              <Button href="/contact" variant="outline-dark">
                Send a Message
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
