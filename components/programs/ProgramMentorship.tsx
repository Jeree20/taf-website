import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

const tracks = [
  {
    icon: "Users",
    title: "Girl Mentorship Program",
    highlight: true,
    desc: "A dedicated mentorship track for girls in Kayole Soweto — one of TAF Director Antony Njoroge's personal passions. Young women are paired with experienced female mentors who guide them in navigating education, relationships, personal identity, and future aspirations in a safe, affirming environment.",
    outcomes: ["Increased self-confidence", "Improved school retention", "Career awareness", "Healthy relationships"],
  },
  {
    icon: "User",
    title: "Youth Mentorship",
    highlight: false,
    desc: "Male youth in Kayole are mentored by positive role models who provide guidance on discipline, responsibility, purpose, and career pathways. Sessions cover life skills, financial literacy basics, conflict resolution, and building a future beyond the informal settlement.",
    outcomes: ["Life skills development", "Financial literacy", "Conflict resolution", "Career pathways"],
  },
  {
    icon: "Building2",
    title: "Professional Mentorship",
    highlight: false,
    desc: "TAF connects ambitious young people with business leaders, educators, and professionals who volunteer their time and experience. This track bridges the gap between Kayole and Nairobi's wider economy, opening doors that would otherwise remain firmly shut.",
    outcomes: ["Industry exposure", "Networking skills", "Internship pathways", "Entrepreneurship mindset"],
  },
  {
    icon: "Heart",
    title: "Spiritual & Character Mentorship",
    highlight: false,
    desc: "Grounded in TAF's founding faith, this track nurtures character, values, and a sense of purpose that goes beyond career. Youth are guided to build integrity, contribute to their community, and anchor their identity in something greater than their circumstances.",
    outcomes: ["Character development", "Community commitment", "Integrity & values", "Purpose & identity"],
  },
];

export function ProgramMentorship() {
  return (
    <section
      id="mentorship"
      className="bg-cream py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="mentorship-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <FadeUp className="lg:col-span-1">
            <SectionHeader
              id="mentorship-heading"
              eyebrow="Mentorship & Leadership"
              title="Guiding the"
              titleEm="Next Generation"
              subtitle="Mentorship is not a one-off event at TAF — it is an ongoing relationship built on trust, consistency, and genuine investment in a young person's future."
            />

            <div className="mt-8 bg-maroon-deep rounded-2xl p-7 text-center">
              <span className="text-5xl block mb-4" aria-hidden>🧭</span>
              <p className="font-display font-bold text-white text-xl mb-3">
                Become a Mentor
              </p>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                Do you have skills, experience, or wisdom to share? TAF is always
                looking for committed mentors — local and international — who want
                to invest in Kayole&apos;s youth.
              </p>
              <Button href="/volunteer" variant="gold" className="w-full justify-center">
                Apply to Mentor
              </Button>
            </div>
          </FadeUp>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {tracks.map(({ icon, title, highlight, desc, outcomes }, i) => (
                <FadeUp key={title} delay={i * 80}>
                  <article
                    className={`rounded-2xl p-7 border ${
                      highlight
                        ? "bg-maroon-deep border-gold-taf/30"
                        : "bg-white border-cream-dark hover:shadow-md"
                    } transition-shadow duration-200`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={32} /></span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className={`font-display font-bold text-xl ${highlight ? "text-white" : "text-maroon-deep"}`}>
                            {title}
                          </h3>
                          {highlight && (
                            <span className="bg-gold-taf text-maroon-deep text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
                              Priority Focus
                            </span>
                          )}
                        </div>
                        <p className={`text-sm leading-relaxed font-light ${highlight ? "text-white/65" : "text-neutral-600"}`}>
                          {desc}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${highlight ? "text-gold-taf/70" : "text-neutral-400"}`}>
                        Key Outcomes
                      </p>
                      <ul className="flex flex-wrap gap-2" role="list">
                        {outcomes.map((outcome) => (
                          <li key={outcome}>
                            <span className={`inline-block text-xs rounded-full px-3 py-1 font-medium ${
                              highlight
                                ? "bg-white/10 text-white/70 border border-white/15"
                                : "bg-cream border border-cream-dark text-neutral-600"
                            }`}>
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
