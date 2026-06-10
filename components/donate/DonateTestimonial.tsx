import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote:
      "I started giving KES 1,500 a month after seeing TAF's football academy play. Knowing that amount feeds a child for a month makes every payment feel personal.",
    author: "David Waweru",
    role: "Monthly Donor, Nairobi",
    initials: "DW",
    avatarColor: "bg-maroon",
  },
  {
    quote:
      "As part of the Kenyan diaspora in the UK, finding TAF meant I could finally invest in a community back home that I trust completely. The transparency is everything.",
    author: "Grace Omondi",
    role: "Diaspora Donor, London",
    initials: "GO",
    avatarColor: "bg-sky-dark",
  },
  {
    quote:
      "We ran a staff giving campaign at our company and chose TAF. Antony sent us a full impact report within two weeks. That accountability is rare and deeply appreciated.",
    author: "Michael Kariuki",
    role: "Corporate Donor, Nairobi",
    initials: "MK",
    avatarColor: "bg-green-700",
  },
];

export function DonateTestimonial() {
  return (
    <section
      className="bg-maroon py-16 lg:py-20"
      aria-labelledby="donor-voices-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <p className="text-gold-taf text-[11px] font-semibold tracking-widest uppercase text-center mb-10">
            Donor Voices
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, author, role, initials, avatarColor }, i) => (
            <FadeUp key={author} delay={i * 80}>
              <figure className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors h-full flex flex-col">
                <span
                  className="font-display text-7xl leading-none text-gold-taf/15 select-none mb-2"
                  aria-hidden
                >
                  "
                </span>
                <blockquote className="flex-1 mb-6">
                  <p className="text-white/70 text-sm leading-relaxed font-light italic">
                    {quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-white/8 pt-5">
                  <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center flex-shrink-0`} aria-hidden>
                    <span className="font-display font-black text-white text-sm">{initials}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">{author}</p>
                    <p className="text-white/40 text-xs">{role}</p>
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
