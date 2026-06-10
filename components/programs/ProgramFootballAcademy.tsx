import Link from "next/link";
import { ArrowRight, Trophy, Shield, Users, Heart } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

const squads = [
  {
    name: "Senior Squad",
    kit: "White & Blue — Adidas",
    sponsor: "Greene King IPA",
    desc: "Our flagship men's team, competing in local leagues and tournaments representing Kayole Soweto with pride.",
    icon: "Shirt",
  },
  {
    name: "Women's Team",
    kit: "Yellow & White",
    sponsor: "TAF Community",
    desc: "A powerhouse women's squad proving that football belongs to everyone — inspiring girls across Kayole to dream big.",
    icon: "Users2",
  },
  {
    name: "NGAO Youth Squad",
    kit: "Light Blue",
    sponsor: "TAF Community",
    desc: "Our youth development squad for the next generation — NGAO (shield) protects and develops Kayole's emerging talent.",
    icon: "Shield",
  },
  {
    name: "Junior Academy",
    kit: "Mixed Training Kits",
    sponsor: "TAF Community",
    desc: "The youngest players in the TAF family — children learning the fundamentals of football, teamwork, and discipline.",
    icon: "Sparkles",
  },
];

const benefits = [
  {
    icon: <Shield size={22} />,
    title: "Away From Crime & Drugs",
    desc: "Structured training sessions and a strong team culture give young people a meaningful, positive alternative to the risks on Kayole's streets.",
  },
  {
    icon: <Trophy size={22} />,
    title: "Talent Development",
    desc: "Regular coaching, competitive fixtures, and exposure to scouts and tournaments create genuine pathways for talented players to advance.",
  },
  {
    icon: <Users size={22} />,
    title: "Discipline & Teamwork",
    desc: "The values absorbed on the pitch — punctuality, respect, resilience, and collaboration — translate directly into character for life.",
  },
  {
    icon: <Heart size={22} />,
    title: "Community Pride & Identity",
    desc: "Match days unite the whole neighbourhood. When the Academy plays, Kayole Soweto shows up — and wins together.",
  },
];

export function ProgramFootballAcademy() {
  return (
    <section
      id="football-academy"
      className="bg-maroon-deep py-20 lg:py-28 relative overflow-hidden scroll-mt-20"
      aria-labelledby="football-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky-taf/8 pointer-events-none" aria-hidden />
      <p className="absolute bottom-0 right-0 font-display font-black text-[22vw] text-white/[0.03] leading-none select-none pointer-events-none" aria-hidden>
        GOAL
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <FadeUp>
          <div className="inline-flex items-center gap-3 bg-gold-taf text-maroon-deep text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            Flagship Program
          </div>
        </FadeUp>

        {/* Hero grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <FadeUp>
            <SectionHeader
              id="football-heading"
              eyebrow=""
              title="TAF Football Academy"
              titleEm="The Pride of Kayole"
              light
            />
            <p className="mt-5 text-white/65 text-base leading-relaxed font-light mb-4">
              The TAF Football Academy is the heartbeat of Kayole Soweto and the
              organisation&apos;s most successful initiative. More than a sports
              program, it is a deliberate intervention in the lives of young people
              who might otherwise find themselves on the wrong path.
            </p>
            <p className="text-white/65 text-base leading-relaxed font-light mb-8">
              We field four squads — spanning men, women, and youth — giving
              talented players of every age and background the coaching, structure,
              and competitive opportunity they deserve. On match days, the whole
              of Kayole gathers. This academy does not just develop footballers; it
              builds future leaders.
            </p>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 mb-8">
              <span className="text-xl" aria-hidden>👕</span>
              <div>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5">Kit Sponsor</p>
                <p className="text-gold-taf font-semibold text-sm">Greene King IPA — White & Blue Adidas Kit</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="gold">Join the Academy</Button>
              <Button href="/donate" variant="outline-sky">Support the Academy</Button>
            </div>
          </FadeUp>

          {/* Benefits */}
          <FadeUp delay={150}>
            <ul className="flex flex-col gap-4" role="list" aria-label="Football Academy impact">
              {benefits.map(({ icon, title, desc }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 p-5 bg-white/[0.04] border-l-[3px] border-sky-taf rounded-xl hover:bg-white/[0.07] transition-colors"
                >
                  <span className="text-sky-taf flex-shrink-0 mt-0.5" aria-hidden>{icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-white text-base mb-1.5">{title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        {/* Squads */}
        <FadeUp>
          <h3 className="font-display font-bold text-white text-2xl mb-6">
            Our Squads
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {squads.map(({ name, kit, sponsor, desc, icon }, i) => (
              <FadeUp key={name} delay={i * 70}>
                <article className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:border-gold-taf/30 transition-all duration-200 h-full flex flex-col">
                  <span className="text-3xl mb-4 block" aria-hidden><IconRenderer name={icon} size={32} /></span>
                  <h4 className="font-display font-bold text-white text-lg mb-1">{name}</h4>
                  <p className="text-gold-taf text-xs font-medium mb-1">{kit}</p>
                  <p className="text-white/35 text-[10px] tracking-widest uppercase mb-3">Sponsor: {sponsor}</p>
                  <p className="text-white/55 text-sm leading-relaxed font-light flex-1">{desc}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
