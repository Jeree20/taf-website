import { FadeUp } from "@/components/ui/FadeUp";
import { IconRenderer } from "@/components/ui/IconRenderer";

const sports = [
  {
    id: "chess",
    icon: "Brain",
    title: "Chess",
    tagline: "Sharp minds. Strategic thinking.",
    color: "border-t-purple-500",
    bg: "from-purple-50 to-purple-100/50",
    description:
      "Chess at TAF is more than a board game — it is a structured mental development program. Young people learn to think ahead, manage emotions under pressure, and approach problems with logic and patience. These skills transfer directly to academic performance, decision-making, and leadership.",
    outcomes: [
      "Cognitive development and concentration",
      "Patience and emotional regulation",
      "Problem-solving and strategic thinking",
      "A safe, screen-free activity for youth",
    ],
  },
  {
    id: "table-tennis",
    icon: "Target",
    title: "Table Tennis",
    tagline: "Speed, focus, and healthy competition.",
    color: "border-t-sky-taf",
    bg: "from-sky-pale to-sky-taf/20",
    description:
      "Table tennis gives youth in Kayole access to fast, fun, competitive sport that requires no large field or expensive equipment. The game builds hand-eye coordination, reflexes, and focus — while the competitive structure teaches grace in winning and resilience in defeat.",
    outcomes: [
      "Hand-eye coordination and reflexes",
      "Mental focus and concentration",
      "Healthy competitive spirit",
      "Accessible sport for all body types",
    ],
  },
  {
    id: "darts",
    icon: "Crosshair",
    title: "Darts",
    tagline: "Precision, calm, and composure.",
    color: "border-t-amber-500",
    bg: "from-amber-50 to-amber-100/50",
    description:
      "Darts may be understated, but it demands something many youth programs undervalue: stillness. Players must calm themselves, visualise, and execute with precision. At TAF, darts teaches composure under pressure, numerical literacy, and the discipline of mastering a fine motor skill.",
    outcomes: [
      "Fine motor skill development",
      "Numerical literacy (scorekeeping)",
      "Composure and self-regulation",
      "Inclusive — no physical fitness barrier",
    ],
  },
];

export function SportsSection() {
  return (
    <section
      id="sports"
      className="scroll-mt-[130px] bg-cream py-20 lg:py-28"
      aria-labelledby="sports-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-maroon mb-3">
              Sports Department
            </p>
            <h2
              id="sports-heading"
              className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight"
            >
              Other Sports Programs
            </h2>
            <p className="mt-4 text-neutral-600 text-base font-light leading-relaxed max-w-2xl">
              Alongside the Football Academy, TAF's sports department runs three
              additional programs that develop different skills, serve different
              youth, and build a broader culture of disciplined play across Kayole.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sports.map(({ id, icon, title, tagline, color, bg, description, outcomes }, i) => (
            <FadeUp key={id} delay={i * 80}>
              <article
                className={`bg-white border border-cream-dark rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col`}
                aria-labelledby={`sport-${id}-heading`}
              >
                {/* Coloured top accent */}
                <div className={`h-1 w-full ${color.replace("border-t-", "bg-")}`} aria-hidden />

                {/* Icon header */}
                <div className={`h-32 flex items-center justify-center bg-gradient-to-br ${bg}`}>
                  <span className="text-6xl" aria-hidden><IconRenderer name={icon} size={52} /></span>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <h3
                    id={`sport-${id}-heading`}
                    className="font-display font-black text-maroon-deep text-2xl mb-1"
                  >
                    {title}
                  </h3>
                  <p className="text-sky-dark text-sm font-semibold tracking-wide mb-4">
                    {tagline}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light mb-6 flex-1">
                    {description}
                  </p>

                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                      What players gain
                    </p>
                    <ul className="flex flex-col gap-2" aria-label={`${title} outcomes`}>
                      {outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-neutral-600"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-sky-taf flex-shrink-0 mt-1.5"
                            aria-hidden
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <div className="mt-10 bg-white border border-cream-dark rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-3xl flex-shrink-0" aria-hidden>🏅</span>
            <div className="flex-1">
              <h3 className="font-display font-bold text-maroon-deep text-base mb-1">
                All sports programs are free to join
              </h3>
              <p className="text-neutral-600 text-sm font-light">
                No registration fee. No equipment needed to start. Just show up at
                the Home of Transformation in Kayole Soweto and bring your willingness to learn.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
