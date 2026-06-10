import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";

const pillars = [
  {
    icon: "Wrench",
    title: "Skills Training",
    desc: "Practical, marketable skills including tailoring, food processing, hair and beauty, and digital literacy — equipping women to generate sustainable income.",
  },
  {
    icon: "Briefcase",
    title: "Entrepreneurship Support",
    desc: "Business basics, financial planning, savings group formation, and access to micro-enterprise networks to help women launch and grow their own businesses.",
  },
  {
    icon: "Handshake",
    title: "Community Network",
    desc: "A strong, supportive peer network of women in Kayole who hold each other accountable, share opportunities, and celebrate each other's milestones together.",
  },
  {
    icon: "Trophy",
    title: "Women's Football Team",
    desc: "The TAF women's football team — playing in their distinctive yellow and white kits — competes, trains, and inspires girls across Kayole to embrace sport.",
  },
  {
    icon: "Megaphone",
    title: "Advocacy & Awareness",
    desc: "Community talks, health awareness sessions, and advocacy for women's rights — because empowerment must be both practical and structural.",
  },
  {
    icon: "Users",
    title: "Savings Circles",
    desc: "Facilitated savings groups (chamas) that pool resources, build financial discipline, and have already helped multiple families in Kayole start small businesses.",
  },
];

export function ProgramWomen() {
  return (
    <section
      id="women"
      className="bg-white py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="women-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-14">
            <SectionHeader
              id="women-heading"
              eyebrow="Women's Empowerment"
              title="When Women Rise,"
              titleEm="Kayole Rises"
              subtitle="Empowered women transform entire families and communities. TAF's women's program builds skills, networks, and confidence that create a ripple effect of change across Kayole Soweto."
            />
            <blockquote className="bg-cream border-l-4 border-gold-taf rounded-r-2xl p-8">
              <p className="font-display font-bold italic text-maroon-deep text-xl leading-relaxed mb-4">
                "The women's empowerment program gave us more than skills — it gave
                us each other. We now run a savings circle that has helped five
                families start small businesses."
              </p>
              <footer>
                <cite className="text-sky-dark text-xs font-semibold tracking-widest uppercase not-italic">
                  — Fatuma Chebet, Women's Program Member
                </cite>
              </footer>
            </blockquote>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 70}>
              <article className="bg-cream border border-cream-dark rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                <span className="text-3xl mb-4 block" aria-hidden><IconRenderer name={icon} size={32} /></span>
                <h3 className="font-display font-bold text-maroon-deep text-lg mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-light flex-1">{desc}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={150}>
          <div className="mt-12 bg-maroon-deep rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-3">Women's Football</p>
              <h3 className="font-display font-bold text-white text-2xl mb-3">
                The TAF Women's Team
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Our women&apos;s football team in their distinctive yellow and white kits
                is more than a sports squad — it is a statement. It tells every girl in
                Kayole Soweto that the pitch belongs to them too. The team trains regularly,
                competes in local tournaments, and represents the community with pride.
              </p>
            </div>
            <div className="flex-shrink-0 text-center">
              <div className="w-24 h-24 bg-gold-taf/20 border-2 border-gold-taf/40 rounded-2xl flex items-center justify-center text-5xl mb-3" aria-hidden>
              </div>
              <p className="text-white/50 text-xs">Yellow & White Kits</p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="mt-6 text-center">
            <Button href="/contact" variant="gold">Join the Women's Program</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
