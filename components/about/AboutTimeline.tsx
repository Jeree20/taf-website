import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const milestones = [
  {
    year: "2004",
    title: "The Seed is Planted",
    description:
      "Antony Njoroge begins community ministry work in Kayole Soweto, building relationships and identifying the most pressing needs of youth and families in the settlement.",
    icon: "Sprout",
    side: "left",
  },
  {
    year: "2008",
    title: "TAF is Founded",
    description:
      "Tumaini African Foundation Community Centre is officially established as a registered Community Based Organisation with the Government of Kenya.",
    icon: "Building2",
    side: "right",
  },
  {
    year: "2010",
    title: "Football Academy Launches",
    description:
      "The TAF Football Academy kicks off as our flagship program — providing youth with discipline, teamwork, and a positive alternative to crime and substance abuse.",
    icon: "Trophy",
    side: "left",
  },
  {
    year: "2014",
    title: "International Partnership",
    description:
      "A formal partnership with St Mark's Dundela (Belfast, Northern Ireland) and the Urban Development Programme is established, bringing international solidarity and exchange visits.",
    icon: "Globe",
    side: "right",
  },
  {
    year: "2018",
    title: "Women's Empowerment Program",
    description:
      "A dedicated women's empowerment program launches, including skills training, entrepreneurship support, and the formation of the TAF women's football team.",
    icon: "Users",
    side: "left",
  },
  {
    year: "2022",
    title: "Community Library Opens",
    description:
      "The TAF community library opens its doors, serving students from 5 local schools. Library Manager Naomi Maingi leads the development of a growing Centre of Excellence.",
    icon: "BookOpen",
    side: "right",
  },
  {
    year: "2024",
    title: "1,500 Books Donated",
    description:
      "The Provost of All Saints' Cathedral hands over 1,500 books donated by Just Be A Child to the TAF library — a landmark moment for education in Kayole Soweto.",
    icon: "Book",
    side: "left",
  },
  {
    year: "Today",
    title: "Growing Every Day",
    description:
      "TAF now runs 10 active programs serving 2,500+ youth, partnering with organisations across Kenya and internationally to continue transforming Kayole Soweto.",
    icon: "Rocket",
    side: "right",
    highlight: true,
  },
];

export function AboutTimeline() {
  return (
    <section
      className="bg-maroon-deep py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      <div
        className="absolute inset-0 bg-dot-pattern pointer-events-none"
        aria-hidden
      />
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[18vw] text-white/[0.025] select-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        JOURNEY
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="timeline-heading"
            eyebrow="Our Journey"
            title="Two Decades of"
            titleEm="Transformation"
            subtitle="From humble beginnings to a thriving community hub — the TAF story told in milestones."
            centered
            light
          />
        </FadeUp>

        <div className="mt-16 relative">
          {/* Centre spine */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-taf/30 to-transparent hidden lg:block"
            aria-hidden
          />

          <ol className="flex flex-col gap-0" role="list" aria-label="TAF history timeline">
            {milestones.map(({ year, title, description, icon, side, highlight }, i) => (
              <li key={year} className="relative">
                <FadeUp delay={i * 60}>
                  <div
                    className={`grid lg:grid-cols-2 gap-6 lg:gap-16 items-center mb-10 ${
                      side === "right" ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`${
                        side === "right"
                          ? "lg:col-start-2 lg:text-left"
                          : "lg:col-start-1 lg:text-right"
                      }`}
                    >
                      <div
                        className={`inline-block bg-${highlight ? "gold-taf text-maroon-deep" : "white/8 text-gold-taf"} 
                          ${highlight ? "bg-gold-taf text-maroon-deep" : "bg-white/8 text-gold-taf"}
                          text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-3`}
                      >
                        {year}
                      </div>
                      <div
                        className={`${
                          highlight
                            ? "bg-gold-taf/10 border border-gold-taf/25"
                            : "bg-white/5 border border-white/10"
                        } rounded-xl p-6`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={28} /></span>
                          <div>
                            <h3 className="font-display font-bold text-white text-xl mb-2">
                              {title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed font-light">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dot on spine (desktop) */}
                    <div
                      className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
                      style={{ top: "50%" }}
                      aria-hidden
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          highlight
                            ? "bg-gold-taf border-gold-taf"
                            : "bg-maroon-deep border-gold-taf/50"
                        }`}
                      />
                    </div>
                  </div>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
