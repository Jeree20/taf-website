import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote: "The Football Academy gave my son a reason to come home early, train hard, and dream big. He used to be on the streets — now he wears the TAF jersey with pride every single week.",
    author: "Mary Njoki",
    role: "Parent, Kayole Soweto",
    image: "/images/gallery/football-ngao-squad.png",
  },
  {
    quote: "The women's empowerment program gave us more than skills — it gave us each other. We now run a savings circle that has helped five families start small businesses.",
    author: "Fatuma Chebet",
    role: "Women's Program Member",
    image: "/images/gallery/women-community-kitchen.png",
  },
  {
    quote: "Children who would not have gone to school have now joined college and are self-sufficient. The transformation TAF has made in Kayole is tremendous.",
    author: "Louise Githire",
    role: "UDP Programme Manager",
    image: "/images/gallery/education-tutoring-session.png",
  },
];

export function TestimonialsSection() {
  const [main, ...rest] = testimonials;
  return (
    <section className="bg-cream py-24 lg:py-32" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeUp className="text-center mb-14">
          <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-4">Stories from Kayole</p>
          <h2 id="testimonials-heading" className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight text-balance">
            Impact Told by the<br />
            <span className="text-sky-dark">People Who Live It</span>
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured large card */}
          <FadeUp className="lg:col-span-2">
            <figure className="bg-maroon-deep rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="relative h-56 flex-shrink-0 overflow-hidden">
                <Image src={main.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/30 to-transparent" />
              </div>
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between relative">
                <span className="absolute top-4 right-8 font-display text-8xl leading-none text-gold-taf/10 select-none" aria-hidden>&rdquo;</span>
                <blockquote className="relative z-10">
                  <p className="font-display font-bold italic text-white text-xl sm:text-2xl leading-relaxed mb-8">
                    &ldquo;{main.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-maroon flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-black text-white text-base">
                      {main.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-base">{main.author}</p>
                    <p className="text-white/50 text-sm">{main.role}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          </FadeUp>

          {/* Two smaller cards */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <FadeUp key={t.author} delay={(i + 1) * 90} className="flex-1">
                <figure className="bg-white border border-cream-dark rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-36 flex-shrink-0 overflow-hidden">
                    <Image src={t.image} alt="" fill className="object-cover" sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <blockquote>
                      <p className="text-maroon-deep/80 text-sm leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-taf/15 flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-black text-sky-dark text-xs">
                          {t.author.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-maroon-deep text-sm">{t.author}</p>
                        <p className="text-maroon-deep/45 text-xs">{t.role}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
