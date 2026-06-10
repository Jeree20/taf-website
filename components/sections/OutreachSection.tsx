import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";

// Library and tutoring removed — they have dedicated sections.
// Kept the two outreach items that are unique to this section.
const outreachItems = [
  {
    title: "Children's Feeding Program",
    desc: "Free meals for 350+ children at Tujisaidie Community Centre School every week.",
    image: "/images/gallery/outreach-feeding-program.png",
    alt: "Children at the TAF feeding program",
  },
  {
    title: "Relief & Supply Drives",
    desc: "Food boxes and essential supplies during crises — no family left behind.",
    image: "/images/gallery/outreach-supply-distribution.png",
    alt: "TAF relief supply distribution",
  },
  {
    title: "Tree Planting & Environment",
    desc: "Youth-led drives that build environmental pride and a greener Kayole.",
    image: "/images/gallery/outreach-tree-planting.png",
    alt: "Youth tree planting in Kayole",
  },
  {
    title: "Women's Community Kitchen",
    desc: "Cooking and nutrition programs bringing women together to share skills and support each other.",
    image: "/images/gallery/women-community-kitchen.png",
    alt: "Women's community kitchen program",
  },
];

export function OutreachSection() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="outreach-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <FadeUp className="mb-14">
          <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-4">Community Outreach</p>
          <h2 id="outreach-heading" className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-[1.06] text-balance">
            Beyond the Centre —<br />
            <span className="text-sky-dark">Serving Kayole Every Day</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outreachItems.map(({ title, desc, image, alt }, i) => (
            <FadeUp key={title} delay={i * 75}>
              <article className="group bg-white border border-cream-dark rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/20 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-maroon-deep text-lg leading-snug mb-2">{title}</h3>
                  <p className="text-maroon-deep/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
