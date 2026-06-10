import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";
import { IconRenderer } from "@/components/ui/IconRenderer";

const reasons = [
  { icon: "Building2",   title: "Registered & Accountable",    desc: "A duly registered CBO with the Government of Kenya. We operate with full financial transparency and publish annual impact reports." },
  { icon: "MapPin",      title: "100% Community-Directed",     desc: "Every shilling goes directly into programs in Kayole Soweto. No distant headquarters or large administrative overhead — just direct impact." },
  { icon: "TrendingUp",  title: "Proven Track Record",         desc: "Over a decade of demonstrated impact — 2,500+ youth served, 10 active programs, 5 schools supported, and a 20-year international partnership." },
  { icon: "Handshake",   title: "Internationally Trusted",     desc: "Endorsed by St Mark's Dundela (Belfast), CMS Ireland, the Urban Development Programme, Just Be A Child, and All Saints' Cathedral Nairobi." },
];

const impactPhotos = [
  { src: "/images/gallery/outreach-feeding-program.png",   alt: "Children receiving meals at the TAF feeding program",   caption: "350+ children fed weekly" },
  { src: "/images/gallery/library-childrens-books.png",    alt: "Children's books at the TAF community library",         caption: "1,500+ books donated" },
  { src: "/images/gallery/football-ngao-squad.png",        alt: "NGAO youth squad — next generation of talent",          caption: "Youth kept off the streets" },
  { src: "/images/gallery/women-community-kitchen.png",    alt: "Women empowered through community programs",            caption: "Women's livelihoods built" },
];

export function DonateWhy() {
  return (
    <section className="bg-white py-20 border-b border-cream-dark" aria-labelledby="why-donate-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Impact photo strip */}
        <FadeUp className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {impactPhotos.map(({ src, alt, caption }) => (
              <div key={caption} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md">
                <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/75 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-snug">{caption}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="text-center mb-12">
          <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-4">Why Give to TAF</p>
          <h2 id="why-donate-heading" className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-[1.06] text-balance">
            Your Donation Works<br />
            <span className="text-sky-dark">Right Here in Kayole</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon, title, desc }, i) => (
            <FadeUp key={title} delay={i * 65}>
              <article className="bg-cream border border-cream-dark rounded-2xl p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sky-taf/12 flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-sky-dark" aria-hidden><IconRenderer name={icon} size={24} /></span>
                </div>
                <h3 className="font-display font-bold text-maroon-deep text-lg mb-3">{title}</h3>
                <p className="text-maroon-deep/60 text-sm leading-relaxed">{desc}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
