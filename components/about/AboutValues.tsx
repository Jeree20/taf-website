import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const values = [
  { icon: "Sprout",    title: "Hope",         accent: "bg-emerald-500/10 text-emerald-600",  desc: "We believe in the transformative power of hope — not as a passive wish, but as an active, daily commitment to a better Kayole. Tumaini is not just our name; it is our operating principle." },
  { icon: "Handshake", title: "Dignity",      accent: "bg-sky-taf/10 text-sky-dark",         desc: "Every person we serve is treated with full dignity and respect. Our programs are designed to build people up, never to create dependency." },
  { icon: "Layers",    title: "Community",    accent: "bg-gold-taf/12 text-gold-dark",       desc: "We believe transformation happens in community, not in isolation. Everything we do is rooted in the relationships and networks that make Kayole Soweto strong." },
  { icon: "Scale",     title: "Integrity",    accent: "bg-maroon/8 text-maroon",             desc: "We operate with full transparency toward our donors, partners, and the community we serve. Trust is the foundation of every program and every partnership." },
  { icon: "Rocket",    title: "Empowerment",  accent: "bg-purple-500/10 text-purple-600",    desc: "Our goal is never to do things for people — it is to equip people to do things for themselves and for others. We empower to empower." },
  { icon: "Heart",     title: "Faith",        accent: "bg-amber-500/10 text-amber-600",      desc: "Our work is grounded in a deep faith that inspires both a vertical relationship with God and a horizontal commitment of love and service to our community." },
];

export function AboutValues() {
  return (
    <section className="bg-cream py-20 lg:py-28" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeUp className="text-center mb-14">
          <SectionHeader
            id="values-heading"
            eyebrow="What We Stand For"
            title="Six Values That"
            titleEm="Guide Everything We Do"
            subtitle="Six principles guiding every program, every decision, and every relationship at Tumaini African Foundation."
            centered
          />
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map(({ icon, title, accent, desc }, i) => (
            <FadeUp key={title} delay={i * 65}>
              <article className="bg-white border border-cream-dark rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 ${accent}`}>
                  <IconRenderer name={icon} size={24} />
                </div>
                <h3 className="font-display font-bold text-maroon-deep text-xl mb-3">{title}</h3>
                <p className="text-maroon-deep/60 text-sm leading-relaxed flex-1">{desc}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
