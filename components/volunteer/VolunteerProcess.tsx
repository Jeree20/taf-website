import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const steps = [
  {
    num: "01",
    icon: "ClipboardList",
    title: "Browse & Apply",
    desc: "Look through the open roles and choose one that matches your skills and availability. Complete the application form on this page — it takes under 5 minutes.",
    duration: "Day 1",
  },
  {
    num: "02",
    icon: "Phone",
    title: "Introductory Call",
    desc: "Director Antony Njoroge or a program coordinator will contact you within 3 business days for a brief introductory call — to learn more about you and answer any questions.",
    duration: "Within 3 days",
  },
  {
    num: "03",
    icon: "FileText",
    title: "Onboarding & Orientation",
    desc: "You'll receive a welcome pack, safeguarding guidelines, and a brief orientation to TAF's programs, values, and the Kayole Soweto community context before you begin.",
    duration: "Week 1",
  },
  {
    num: "04",
    icon: "Rocket",
    title: "Begin Volunteering",
    desc: "Start your placement! Whether on-site in Kayole or remotely, you'll have a named point of contact at TAF for support, check-ins, and feedback throughout.",
    duration: "Ongoing",
  },
  {
    num: "05",
    icon: "Award",
    title: "Certificate & Reference",
    desc: "On completing your minimum placement, you receive a signed TAF volunteer certificate and a detailed reference letter from Director Antony Njoroge.",
    duration: "On completion",
  },
];

export function VolunteerProcess() {
  return (
    <section
      className="bg-maroon-deep py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" aria-hidden />
      <p className="absolute bottom-0 right-0 font-display font-black text-[16vw] text-white/[0.025] select-none pointer-events-none leading-none" aria-hidden>
        PROCESS
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="process-heading"
            eyebrow="How It Works"
            title="From Application"
            titleEm="to Impact"
            subtitle="A clear, simple five-step journey from expressing interest to making a real difference in Kayole Soweto."
            centered
            light
          />
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
          {steps.map(({ num, icon, title, desc, duration }, i) => (
            <FadeUp key={num} delay={i * 80}>
              <div className="relative flex flex-col items-center text-center">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-gradient-to-r from-gold-taf/40 to-transparent"
                    aria-hidden
                  />
                )}

                {/* Step circle */}
                <div className="relative w-20 h-20 rounded-full bg-white/5 border-2 border-gold-taf/30 flex items-center justify-center mb-4 flex-shrink-0 z-10">
                  <span className="text-3xl" aria-hidden><IconRenderer name={icon} size={32} /></span>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-taf flex items-center justify-center font-display font-black text-maroon-deep text-[10px]"
                    aria-hidden
                  >
                    {num.replace("0", "")}
                  </span>
                </div>

                <div className="mb-2">
                  <p className="text-gold-taf text-[10px] font-semibold tracking-widest uppercase mb-1">{duration}</p>
                  <h3 className="font-display font-bold text-white text-base">{title}</h3>
                </div>
                <p className="text-white/55 text-xs leading-relaxed font-light max-w-[180px]">{desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Policies strip */}
        <FadeUp delay={200}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "Shield",
                title: "Child Safeguarding",
                desc: "All volunteers working with minors complete TAF's safeguarding induction and sign our child protection policy before starting.",
              },
              {
                icon: "ClipboardList",
                title: "Code of Conduct",
                desc: "Every volunteer agrees to TAF's code of conduct, which outlines behaviour expectations, confidentiality, and our community-first values.",
              },
              {
                icon: "Users",
                title: "ID & References",
                desc: "We may request identification and a personal reference for roles involving direct work with children or vulnerable community members.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={24} /></span>
                <div>
                  <h4 className="font-display font-bold text-white text-sm mb-1.5">{title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
