import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeUp } from "@/components/ui/FadeUp";

const stats = [
  { value: 2500, suffix: "+", label: "Youth Served",     sub: "since founding" },
  { value: 10,   suffix: "",  label: "Active Programs",  sub: "running year-round" },
  { value: 5,    suffix: "",  label: "Schools Supported",sub: "in Kayole Soweto" },
  { value: 1500, suffix: "+", label: "Library Books",    sub: "donated 2024" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-maroon-deep" aria-labelledby="stats-heading">

      {/* Background photo with strong overlay */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/gallery/football-team-lineup.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-maroon-deep/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <FadeUp className="text-center mb-14">
          <p className="text-gold-taf text-[11px] font-bold tracking-[0.12em] uppercase mb-4">Our Impact in Numbers</p>
          <h2 id="stats-heading" className="font-display font-black text-white text-4xl sm:text-5xl leading-tight text-balance">
            Real Change,<br />
            <span className="text-sky-taf">Real People, Real Kayole</span>
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10" aria-label="TAF impact statistics">
            {stats.map(({ value, suffix, label, sub }) => (
              <div key={label} className="bg-maroon-deep/60 backdrop-blur text-center py-12 px-6 hover:bg-white/5 transition-colors duration-200">
                <dd className="font-display font-black text-white leading-none mb-3">
                  <span className="text-4xl sm:text-5xl lg:text-6xl">
                    <AnimatedCounter target={value} suffix="" />
                  </span>
                  <span className="text-gold-taf text-3xl sm:text-4xl">{suffix}</span>
                </dd>
                <dt className="text-white/75 text-sm font-semibold mb-1">{label}</dt>
                <p className="text-white/35 text-[11px] tracking-wide">{sub}</p>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
