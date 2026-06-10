import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle } from "lucide-react";

const squads = [
  {
    name: "Senior Squad",
    kit: "White & Blue Adidas",
    sponsor: "Greene King IPA",
    icon: "Shirt",
    desc: "Our senior men's team — competitive, disciplined, and proud ambassadors of Kayole Soweto in local league football.",
  },
  {
    name: "Women's Team",
    kit: "Yellow & White Kit",
    sponsor: "TAF Foundation",
    icon: "Shirt",
    desc: "Breaking barriers on and off the pitch. Our women's team proves that football, and everything it teaches, belongs to everyone.",
  },
  {
    name: "NGAO Youth Squad",
    kit: "Light Blue Kit",
    sponsor: "TAF Foundation",
    icon: "Shield",
    desc: "Our youth development squad — nurturing the next generation of talent from within the Kayole community.",
  },
];

const outcomes = [
  "Structured training that occupies youth positively every week",
  "Competitive matches that build confidence and resilience",
  "Coaching that models respect, discipline, and leadership",
  "A direct pathway away from crime and substance abuse",
  "Talent scouting and development for gifted young players",
  "A women's team that champions gender equity in sport",
  "Community pride — every match unites Kayole Soweto",
  "Mentorship relationships formed between coaches and players",
];

const stats = [
  { value: 3, suffix: "", label: "Active Squads" },
  { value: 50, suffix: "+", label: "Players Registered" },
  { value: 1, suffix: "", label: "Kit Sponsor" },
  { value: 100, suffix: "%", label: "Community-Rooted" },
];

export function FootballAcademySection() {
  return (
    <section
      id="football-academy"
      className="scroll-mt-[130px] bg-white py-20 lg:py-28"
      aria-labelledby="football-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-wrap items-start justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block bg-gold-taf text-maroon-deep text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded"
                  aria-label="Flagship program"
                >
                  Flagship Program
                </span>
                <span className="text-neutral-400 text-xs">Est. 2010</span>
              </div>
              <h2
                id="football-heading"
                className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight"
              >
                Football Academy
              </h2>
              <p className="text-sky-dark font-semibold text-base mt-1 tracking-wide">
                The heartbeat of Kayole Soweto
              </p>
            </div>
            <Button href="/football-academy" variant="gold" aria-label="Learn more about the Football Academy">
              Full Academy Page →
            </Button>
          </div>
        </FadeUp>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-14 mb-16">
          <FadeUp>
            <p className="text-neutral-600 text-base leading-relaxed font-light mb-6">
              The TAF Football Academy is more than a sports program — it is the
              most powerful tool we have for community transformation. Every week,
              young people from Kayole Soweto gather to train, compete, and grow
              under the guidance of dedicated coaches who see the full human being,
              not just the athlete.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light mb-8">
              Football creates the structure, the routine, and the belonging that
              many young people in informal settlements desperately need. It is a
              direct, proven pathway away from crime, substance abuse, and
              hopelessness — and toward discipline, teamwork, and purpose. Our
              three squads — senior men, women, and NGAO youth — serve players
              across all ages and genders.
            </p>

            <div className="bg-maroon-deep rounded-xl p-6 mb-6">
              <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-1">
                Kit Sponsor
              </p>
              <p className="text-white font-display font-bold text-xl">
                Greene King IPA
              </p>
              <p className="text-white/55 text-sm mt-1">
                White & Blue Adidas kits — worn with pride across Kayole
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" aria-label="Program outcomes">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <CheckCircle
                    size={16}
                    className="text-sky-taf flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={120}>
            {/* Impact stats */}
            <dl className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="bg-cream border border-cream-dark rounded-xl p-6 text-center"
                >
                  <dd className="font-display font-black text-maroon-deep text-4xl leading-none mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </dd>
                  <dt className="text-neutral-500 text-xs tracking-widest uppercase font-medium">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>

            {/* Squad cards */}
            <div className="flex flex-col gap-4" role="list" aria-label="Football Academy squads">
              {squads.map(({ name, kit, sponsor, icon, desc }) => (
                <article
                  key={name}
                  role="listitem"
                  className="bg-cream border border-cream-dark rounded-xl p-5 flex gap-4 hover:border-sky-taf hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={24} /></span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-display font-bold text-maroon-deep text-base">
                        {name}
                      </h3>
                      <span className="text-[10px] bg-maroon/8 text-maroon font-medium rounded px-2 py-0.5">
                        {kit}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-xs mb-2">
                      Sponsor: <span className="font-medium text-neutral-600">{sponsor}</span>
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed font-light">
                      {desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Quote pull */}
        <FadeUp>
          <blockquote className="bg-maroon-deep rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-dot-pattern pointer-events-none"
              aria-hidden
            />
            <div className="relative z-10">
              <p className="font-display font-bold italic text-white text-xl sm:text-2xl leading-relaxed mb-5 max-w-3xl">
                "The Football Academy gave my son a reason to come home early, train
                hard, and dream big. He used to be on the streets — now he wears the
                TAF jersey with pride every single week."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-taf flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-black text-maroon-deep text-sm" aria-hidden>MN</span>
                </div>
                <cite className="not-italic text-white/60 text-sm">
                  Mary Njoki — Parent, Kayole Soweto
                </cite>
              </footer>
            </div>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  );
}
