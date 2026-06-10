import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const sports = [
  { title: "Chess",        desc: "Strategic thinking and mental discipline — building sharp minds in Kayole.", href: "/programs/chess" },
  { title: "Table Tennis", desc: "Fast reflexes, focus, and healthy competition for youth of all ages.",       href: "/programs/table-tennis" },
  { title: "Darts",        desc: "Precision and calm under pressure — lessons that extend beyond the board.",  href: "/programs/darts" },
];

const programs = [
  {
    tag: "Education",
    title: "Education Support & Library",
    desc: "Our library serves 120+ students across 5 schools with 1,500+ books. Tutoring, school fees support, and a Centre of Excellence.",
    href: "/programs#education",
    image: "/images/gallery/library-childrens-books.png",
  },
  {
    tag: "Mentorship",
    title: "Mentorship & Leadership",
    desc: "Connecting youth with experienced mentors — including a dedicated girl mentorship program — for personal, professional, and spiritual growth.",
    href: "/programs#mentorship",
    image: "/images/gallery/education-tutoring-session.png",
  },
  {
    tag: "Women",
    title: "Women's Empowerment",
    desc: "Skills training, entrepreneurship, a women's football team, and a strong network — empowered women transform entire families.",
    href: "/programs#women",
    image: "/images/gallery/women-community-kitchen.png",
  },
  {
    tag: "Outreach",
    title: "Community Outreach",
    desc: "Street clean-ups, tree planting, food distribution, and community events — TAF is present wherever Kayole needs us most.",
    href: "/programs#outreach",
    image: "/images/gallery/outreach-volunteers-serving.png",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-cream py-24 lg:py-32" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <FadeUp className="mb-14">
          <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-4">What We Do</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <h2 id="programs-heading" className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-[1.06] text-balance max-w-lg">
              Seven Pillars of<br />
              <span className="text-sky-dark">Community Transformation</span>
            </h2>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sky-dark text-sm font-bold tracking-wide hover:gap-3 transition-all flex-shrink-0 focus-visible:outline-none focus-visible:underline"
            >
              All Programs <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Football flagship — full height left column */}
          <FadeUp className="lg:row-span-2">
            <Link
              href="/football-academy"
              className="group relative rounded-2xl overflow-hidden flex flex-col justify-end h-full min-h-[420px] lg:min-h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold-taf focus-visible:ring-offset-2"
            >
              <Image
                src="/images/gallery/football-senior-squad.png"
                alt="TAF Football Academy senior squad"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/50 to-transparent" />
              <div className="relative z-10 p-7 sm:p-8">
                <span className="inline-block bg-gold-taf text-maroon-deep text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md mb-4">
                  Flagship Program
                </span>
                <h3 className="font-display font-black text-white text-2xl sm:text-3xl leading-tight mb-4">
                  TAF Football Academy
                </h3>
                <p className="text-white/72 text-sm leading-relaxed mb-6">
                  Multiple squads including seniors, youth NGAO squad, and women&apos;s team.
                  Football as a vehicle for discipline, opportunity, and community pride.
                </p>
                <span className="inline-flex items-center gap-2 text-gold-taf text-xs font-bold tracking-wider uppercase group-hover:gap-3 transition-all">
                  Explore the Academy <ArrowRight size={13} aria-hidden />
                </span>
              </div>
            </Link>
          </FadeUp>

          {/* Sports mini-cards */}
          <FadeUp delay={80} className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
              {sports.map(({ title, desc, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="flex flex-col bg-maroon-deep rounded-xl p-5 hover:bg-maroon hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
                >
                  <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold-taf text-xs font-semibold mt-4">
                    Learn more <ArrowRight size={11} aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </FadeUp>

          {/* Program photo cards — 2×2 right side */}
          {programs.map(({ tag, title, desc, href, image }, i) => (
            <FadeUp key={title} delay={(i + 1) * 70}>
              <Link
                href={href}
                className="group flex flex-col bg-white border border-cream-dark rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-taf focus-visible:ring-offset-2"
              >
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 bg-white/90 text-maroon-deep text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-maroon-deep text-lg leading-snug mb-2.5">{title}</h3>
                  <p className="text-maroon-deep/60 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sky-dark text-xs font-bold tracking-wide uppercase group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
