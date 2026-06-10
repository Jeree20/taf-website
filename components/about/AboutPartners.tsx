import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const partners = [
  {
    name: "St Mark's Dundela",
    location: "Belfast, Northern Ireland",
    description:
      "A 20-year friendship built on mutual prayer, exchange visits, and a shared commitment to community transformation. Facilitated through CMS Ireland.",
    icon: "Building2",
    type: "Faith Partner",
  },
  {
    name: "Urban Development Programme (UDP)",
    location: "Northern Ireland",
    description:
      "A key partner in the TAF journey — providing programming support, resources, and the bridges that connect Kayole to the wider global community.",
    icon: "Hammer",
    type: "Development Partner",
  },
  {
    name: "CMS Ireland (CMSI)",
    location: "Ireland",
    description:
      "Facilitates the TAF–St Mark's partnership and supports TAF's work through their Urban Development Programme — connecting local communities across continents.",
    icon: "Globe2",
    type: "Programme Facilitator",
  },
  {
    name: "Just Be A Child",
    location: "Kenya",
    description:
      "Donated 1,500+ books to the TAF community library in February 2024 — a transformative contribution handed over via the Provost of All Saints' Cathedral, Nairobi.",
    icon: "BookOpen",
    type: "Education Partner",
  },
  {
    name: "All Saints' Cathedral",
    location: "Nairobi, Kenya",
    description:
      "Supported the TAF library initiative by facilitating the handover of 1,500 books from Just Be A Child in February 2024, strengthening education access in Kayole.",
    icon: "Heart",
    type: "Community Partner",
  },
  {
    name: "Greene King IPA",
    location: "United Kingdom",
    description:
      "Official kit sponsor of the TAF Football Academy — whose white and blue Adidas kits bearing the Greene King IPA brand are worn with pride across Kayole Soweto.",
    icon: "Trophy",
    type: "Sports Sponsor",
  },
];

const typeColors: Record<string, string> = {
  "Faith Partner": "bg-purple-100 text-purple-700",
  "Development Partner": "bg-sky-pale text-sky-dark",
  "Programme Facilitator": "bg-blue-100 text-blue-700",
  "Education Partner": "bg-green-100 text-green-700",
  "Community Partner": "bg-amber-100 text-amber-700",
  "Sports Sponsor": "bg-maroon/10 text-maroon",
};

export function AboutPartners() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="partners-heading"
            eyebrow="Our Supporters"
            title="Partners Who Believe"
            titleEm="in Kayole"
            subtitle="TAF is sustained by a remarkable network of local and international partners who share our belief that community transformation is possible."
          />
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map(({ name, location, description, icon, type }, i) => (
            <FadeUp key={name} delay={i * 70}>
              <article className="bg-cream border border-cream-dark rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={32} /></span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-maroon-deep text-base leading-tight mb-1">
                      {name}
                    </h3>
                    <p className="text-neutral-500 text-xs">{location}</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed font-light flex-1 mb-4">
                  {description}
                </p>
                <span
                  className={`self-start text-[10px] font-semibold tracking-widest uppercase rounded-full px-3 py-1 ${typeColors[type] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {type}
                </span>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <div className="mt-12 text-center bg-sky-pale border border-sky-taf/20 rounded-xl p-8">
            <p className="text-sky-dark font-display font-bold text-lg mb-2">
              Interested in partnering with TAF?
            </p>
            <p className="text-neutral-600 text-sm font-light max-w-xl mx-auto">
              We welcome partnerships from organisations, churches, businesses, and
              individuals who share our vision for a transformed Kayole Soweto. Get in
              touch to explore how we can work together.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
