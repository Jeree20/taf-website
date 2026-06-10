import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const activities = [
  {
    icon: "UtensilsCrossed",
    title: "Children's Feeding Program",
    tag: "Ongoing",
    tagColor: "bg-orange-100 text-orange-700",
    desc: "Free nutritious meals for 350+ children at Tujisaidie Community Centre School — ensuring that hunger never stands between a child and their education. Many beneficiaries come from marginalised families facing high levels of food insecurity.",
    impact: "350+ children fed",
    impactColor: "text-orange-600",
  },
  {
    icon: "Trash2",
    title: "Community Clean-up Drives",
    tag: "Regular",
    tagColor: "bg-sky-pale text-sky-dark",
    desc: "Volunteer-led clean-up drives mobilise youth and community members to tackle blocked drains, littered streets, and environmental degradation in Kayole Soweto — building collective pride and environmental responsibility.",
    impact: "Multiple events per year",
    impactColor: "text-sky-dark",
  },
  {
    icon: "Sprout",
    title: "Tree Planting & Environment",
    tag: "Seasonal",
    tagColor: "bg-green-100 text-green-700",
    desc: "Youth-led tree planting campaigns that combine environmental action with community mobilisation. Young people plant seedlings, learn about environmental stewardship, and take ownership of greening their neighbourhood.",
    impact: "Youth-led initiative",
    impactColor: "text-green-600",
  },
  {
    icon: "Package",
    title: "Relief & Supply Distribution",
    tag: "As Needed",
    tagColor: "bg-purple-100 text-purple-700",
    desc: "During crises — including the COVID-19 pandemic — TAF distributed food packages, hygiene kits, and essential supplies to vulnerable families in Kayole. We mobilise quickly to serve those who need help most.",
    impact: "Hundreds of families reached",
    impactColor: "text-purple-600",
  },
  {
    icon: "Megaphone",
    title: "Community Events & Praise Gatherings",
    tag: "Regular",
    tagColor: "bg-amber-100 text-amber-700",
    desc: "From the weekly Praise Tuesday at the #HomeOfTransformation to community dialogues, health talks, and awareness campaigns — TAF uses events to build community cohesion, share information, and celebrate Kayole Soweto.",
    impact: "#HomeOfTransformation",
    impactColor: "text-amber-600",
  },
  {
    icon: "UtensilsCrossed",
    title: "Community Kitchen & Food Prep",
    tag: "Ongoing",
    tagColor: "bg-rose-100 text-rose-700",
    desc: "Community members — particularly women — gather to prepare meals for vulnerable families and for children in the feeding program. The kitchen is a place of service, fellowship, and practical love for Kayole Soweto.",
    impact: "Volunteer-powered",
    impactColor: "text-rose-600",
  },
];

export function ProgramOutreach() {
  return (
    <section
      id="outreach"
      className="bg-cream py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="outreach-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <SectionHeader
              id="outreach-heading"
              eyebrow="Community Outreach"
              title="Present Wherever"
              titleEm="Kayole Needs Us"
              subtitle="TAF's outreach work extends far beyond the walls of the #HomeOfTransformation — into the streets, schools, and homes of Kayole Soweto."
            />
            <div className="flex gap-4 flex-shrink-0">
              <div className="bg-maroon-deep rounded-xl px-5 py-4 text-center">
                <p className="font-display font-black text-gold-taf text-3xl">350<span className="text-xl">+</span></p>
                <p className="text-white/50 text-[10px] tracking-widest uppercase mt-1">Children Fed</p>
              </div>
              <div className="bg-white border border-cream-dark rounded-xl px-5 py-4 text-center">
                <p className="font-display font-black text-maroon text-3xl">6</p>
                <p className="text-neutral-400 text-[10px] tracking-widest uppercase mt-1">Outreach Types</p>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(({ icon, title, tag, tagColor, desc, impact, impactColor }, i) => (
            <FadeUp key={title} delay={i * 70}>
              <article className="bg-white border border-cream-dark rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4 gap-3">
                  <span className="text-3xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={32} /></span>
                  <span className={`text-[10px] font-semibold tracking-widest uppercase rounded-full px-3 py-1 flex-shrink-0 ${tagColor}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-maroon-deep text-lg mb-3">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-light flex-1 mb-4">{desc}</p>
                <div className="border-t border-cream-dark pt-3 mt-auto">
                  <p className={`text-xs font-semibold ${impactColor}`}>📊 {impact}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
