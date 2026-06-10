import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";

const pillars = [
  {
    color: "border-sky-taf bg-sky-taf/6",
    title: "Empower Youth",
    desc: "Equipping young people with skills, mentorship, sports, and opportunity to chart their own futures away from crime and substance abuse.",
  },
  {
    color: "border-gold-taf bg-gold-taf/6",
    title: "Educate the Community",
    desc: "From our community library serving 120+ students across 5 schools, to tutoring and academic support — knowledge is our most powerful tool.",
  },
  {
    color: "border-maroon bg-maroon/5",
    title: "Elevate Kayole",
    desc: "Through outreach, clean-ups, feeding programs, women's empowerment, and tree planting — we lift the entire neighbourhood together.",
  },
];

export function MissionSection() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32" aria-labelledby="mission-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: copy */}
          <FadeUp>
            <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-4">
              Who We Are
            </p>
            <h2 id="mission-heading" className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-[1.06] text-balance mb-6">
              Rooted in Kayole.<br />
              <span className="text-sky-dark">Built for the Community.</span>
            </h2>
            <p className="text-maroon-deep/65 text-[1.05rem] leading-relaxed max-w-xl mb-10">
              Since our founding, Tumaini African Foundation has been a beacon of hope in
              Kayole Soweto — one of Nairobi&apos;s most resilient neighbourhoods.
              <strong className="text-maroon-deep font-semibold"> Tumaini</strong> means hope in Kiswahili,
              and hope is what we build every single day.
            </p>

            <div className="flex flex-col gap-4" role="list" aria-label="Our three pillars">
              {pillars.map(({ color, title, desc }) => (
                <div
                  key={title}
                  role="listitem"
                  className={`flex gap-5 p-5 rounded-xl border-l-4 ${color} hover:shadow-md transition-shadow duration-200`}
                >
                  <div>
                    <h3 className="font-display font-bold text-maroon-deep text-lg mb-1.5">{title}</h3>
                    <p className="text-maroon-deep/65 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right: photo + quote card */}
          <FadeUp delay={140}>
            <div className="relative">
              {/* Main photo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/community-hall-talk.png"
                  alt="Community gathering at the TAF centre"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/50 to-transparent" />
              </div>

              {/* Floating quote card */}
              <div className="mt-5 bg-maroon-deep rounded-xl p-7 relative overflow-hidden">
                <span className="absolute top-2 left-5 font-display text-8xl leading-none text-gold-taf/10 select-none pointer-events-none" aria-hidden>&ldquo;</span>
                <blockquote className="relative z-10">
                  <p className="font-display font-bold italic text-white text-xl leading-relaxed mb-5">
                    &ldquo;The transformation TAF has made in Kayole is tremendous. Children who
                    would not have gone to school have now joined college and are
                    self-sufficient.&rdquo;
                  </p>
                  <footer>
                    <cite className="text-sky-taf text-xs font-bold tracking-wider uppercase not-italic">
                      Louise Githire &mdash; UDP Programme Manager
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
