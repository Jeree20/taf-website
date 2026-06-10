import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 2500, suffix: "+", label: "Youth Served", icon: "Users", color: "border-t-maroon" },
  { value: 10, suffix: "", label: "Active Programs", icon: "ListTodo", color: "border-t-sky-taf" },
  { value: 1500, suffix: "+", label: "Library Books", icon: "BookOpen", color: "border-t-gold-taf" },
  { value: 350, suffix: "+", label: "Children Fed", icon: "UtensilsCrossed", color: "border-t-green-500" },
  { value: 5, suffix: "", label: "Schools Supported", icon: "Building2", color: "border-t-purple-500" },
  { value: 4, suffix: "", label: "Football Squads", icon: "Trophy", color: "border-t-amber-500" },
  { value: 6, suffix: "", label: "Partner Organisations", icon: "Handshake", color: "border-t-rose-500" },
  { value: 20, suffix: "+", label: "Years of Partnership", icon: "Globe", color: "border-t-teal-500" },
];

export function ProgramsImpact() {
  return (
    <section
      className="bg-maroon py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="impact-heading"
    >
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[16vw] text-white/[0.03] select-none pointer-events-none whitespace-nowrap"
        aria-hidden
      >
        IMPACT
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="impact-heading"
            eyebrow="Programs Impact"
            title="Numbers That"
            titleEm="Tell a Story"
            subtitle="Every statistic represents a real person whose life has been touched by a TAF program in Kayole Soweto."
            centered
            light
          />
        </FadeUp>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden" aria-label="TAF program impact statistics">
          {stats.map(({ value, suffix, label, icon, color }, i) => (
            <FadeUp key={label} delay={i * 60}>
              <div className={`bg-maroon border-t-4 ${color} text-center px-6 py-8 hover:bg-maroon-light transition-colors`}>
                <span className="text-3xl block mb-3" aria-hidden><IconRenderer name={icon} size={32} /></span>
                <dt className="text-white/45 text-[10px] tracking-widest uppercase mt-2 order-2">{label}</dt>
                <dd className="font-display font-black text-white leading-none order-1">
                  <span className="text-4xl">
                    <AnimatedCounter target={value} />
                  </span>
                  <span className="text-gold-taf text-2xl">{suffix}</span>
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}
