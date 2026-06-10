import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";
import { IconRenderer } from "@/components/ui/IconRenderer";

const benefits = [
  { icon: "Globe",      title: "Real, Visible Impact",       desc: "Volunteer hours translate directly into children fed, youth coached, students tutored, and women empowered. You will see the difference in real time." },
  { icon: "Handshake",  title: "Genuine Community",          desc: "You join a tight-knit family in Kayole Soweto — not a transactional programme. Friendships built here last long after your placement ends." },
  { icon: "TrendingUp", title: "Grow Your Own Skills",       desc: "Whether coaching, teaching, designing, or managing logistics, volunteering at TAF offers rich, meaningful experience that strengthens your skillset." },
  { icon: "Heart",      title: "Purpose-Driven Environment", desc: "TAF is grounded in faith and a commitment to human dignity. A purposeful, values-led environment that gives your service genuine meaning." },
  { icon: "Globe2",     title: "International Exchange",     desc: "Through our 20-year partnership with St Mark's Dundela (Belfast), TAF has a rich tradition of international volunteer exchange and cross-cultural learning." },
  { icon: "Award",      title: "Formal Certification",       desc: "Volunteers who complete a minimum placement receive a signed TAF certificate, a detailed reference from Director Antony Njoroge, and documented impact." },
];

export function VolunteerWhy() {
  return (
    <section className="bg-cream py-24 lg:py-32" aria-labelledby="why-volunteer-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Hero banner */}
        <FadeUp className="mb-16">
          <div className="relative h-[360px] lg:h-[440px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/gallery/outreach-volunteers-serving.png"
              alt="TAF volunteers serving the community in Kayole"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 1280px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/85 via-maroon-deep/50 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-12 pb-10">
              <div className="max-w-lg">
                <p className="text-gold-taf text-[11px] font-bold tracking-[0.12em] uppercase mb-3">Volunteer at TAF</p>
                <h2 id="why-volunteer-heading" className="font-display font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.04] mb-4">
                  Give Your Time.<br />
                  <span className="text-sky-taf">Change a Life.</span>
                </h2>
                <p className="text-white/72 text-base leading-relaxed">
                  Join our community of dedicated volunteers making a daily difference in Kayole Soweto.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="mb-12">
          <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-4">Why Volunteer With Us</p>
          <h3 className="font-display font-black text-maroon-deep text-3xl sm:text-4xl leading-[1.06] text-balance">
            Six Reasons to <span className="text-sky-dark">Join TAF</span>
          </h3>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {benefits.map(({ icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 60}>
              <article className="bg-white border border-cream-dark rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-sky-taf/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-sky-dark" aria-hidden><IconRenderer name={icon} size={22} /></span>
                </div>
                <h4 className="font-display font-bold text-maroon-deep text-lg mb-3">{title}</h4>
                <p className="text-maroon-deep/60 text-sm leading-relaxed flex-1">{desc}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Two action photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { src: "/images/gallery/outreach-community-cleanup.png", alt: "Volunteers in a community clean-up", caption: "Community Clean-ups" },
            { src: "/images/gallery/outreach-tree-planting.png",     alt: "Volunteers planting trees",         caption: "Environmental Stewardship" },
          ].map(({ src, alt, caption }) => (
            <FadeUp key={caption}>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden group shadow-lg">
                <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/65 to-transparent" />
                <p className="absolute bottom-5 left-6 text-white font-display font-bold text-xl">{caption}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
