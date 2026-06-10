import { FadeUp } from "@/components/ui/FadeUp";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { SectionHeader } from "@/components/ui/SectionHeader";

const sports = [
  {
    icon: "Brain",
    name: "Chess",
    tagline: "The Game of Kings — for Kayole's Future Leaders",
    description:
      "Chess at TAF is much more than a board game. Every match demands critical thinking, long-range planning, patience under pressure, and the humility to learn from defeat. These are exactly the qualities we want to grow in Kayole's young people. TAF chess sessions build sharp, disciplined minds that carry their strategic thinking into school, work, and life.",
    skills: ["Critical Thinking", "Strategic Planning", "Patience", "Concentration", "Problem Solving"],
    suitable: "Ages 8 and above",
    color: "border-l-sky-taf",
    bg: "bg-sky-pale",
    iconBg: "bg-sky-taf/10",
  },
  {
    icon: "Target",
    name: "Table Tennis",
    tagline: "Speed, Focus & Healthy Competition",
    description:
      "Table tennis is one of the fastest reflex sports in the world — and one of the most accessible. TAF table tennis sessions give youth an outlet for competitive energy in a structured, supportive environment. Players develop hand-eye coordination, quick decision-making under time pressure, and the ability to read opponents — skills that translate directly beyond the table.",
    skills: ["Reflexes & Coordination", "Focus", "Quick Decision-Making", "Sportsmanship", "Persistence"],
    suitable: "All ages welcome",
    color: "border-l-green-500",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    icon: "Crosshair",
    name: "Darts",
    tagline: "Precision, Calm & Consistency",
    description:
      "Darts may look simple, but mastering it requires a rare combination of precision, breathing control, mental calm, and consistent technique. TAF darts sessions teach youth how to perform under pressure, set personal goals, track incremental improvement, and remain composed when results don't go their way — lessons far more valuable than any score on a scoreboard.",
    skills: ["Precision & Control", "Mental Composure", "Goal-Setting", "Consistency", "Self-Discipline"],
    suitable: "Ages 10 and above",
    color: "border-l-amber-500",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
];

export function ProgramSportsDept() {
  return (
    <section
      id="sports"
      className="bg-cream py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="sports-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex items-start gap-6 mb-14 flex-wrap">
            <div className="flex-1 min-w-[260px]">
              <SectionHeader
                id="sports-heading"
                eyebrow="Sports Department"
                title="Beyond Football —"
                titleEm="A Full Sports Culture"
                subtitle="TAF's Sports Department runs three additional programs that each cultivate distinct mental and physical disciplines. Together with the Football Academy, they give Kayole's youth a diverse, healthy, and structured sporting culture."
              />
            </div>
            <div className="flex-shrink-0 bg-maroon-deep rounded-xl px-6 py-5 text-center min-w-[160px]">
              <p className="text-gold-taf font-display font-black text-4xl">4</p>
              <p className="text-white/60 text-xs tracking-widest uppercase mt-1">Sports Programs</p>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-8">
          {sports.map(({ icon, name, tagline, description, skills, suitable, color, bg, iconBg }, i) => (
            <FadeUp key={name} delay={i * 100}>
              <article
                className={`bg-white border border-cream-dark rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`grid lg:grid-cols-3 gap-0`}>
                  {/* Icon panel */}
                  <div className={`${bg} flex flex-col items-center justify-center p-10 border-r border-cream-dark lg:border-r`}>
                    <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center text-5xl mb-4`} aria-hidden>
                      <IconRenderer name={icon} size={80} />
                    </div>
                    <h3 className="font-display font-black text-maroon-deep text-2xl mb-1 text-center">{name}</h3>
                    <p className="text-neutral-500 text-xs text-center leading-relaxed">{tagline}</p>
                    <div className="mt-4 bg-white/70 rounded-lg px-4 py-2 text-center">
                      <p className="text-[10px] text-neutral-400 tracking-widest uppercase mb-0.5">Suitable for</p>
                      <p className="text-sm font-semibold text-maroon-deep">{suitable}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-2 p-8 border-l-4 ${color}`}>
                    <p className="text-neutral-600 text-base leading-relaxed font-light mb-6">
                      {description}
                    </p>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                        Skills Developed
                      </p>
                      <ul className="flex flex-wrap gap-2" role="list" aria-label={`Skills from ${name}`}>
                        {skills.map((skill) => (
                          <li key={skill}>
                            <span className="inline-block bg-cream border border-cream-dark rounded-full px-3 py-1 text-xs font-medium text-neutral-600">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
