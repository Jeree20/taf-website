import { FadeUp } from "@/components/ui/FadeUp";

const partners = [
  { name: "St Mark's Dundela, Belfast",   note: "20-year partner" },
  { name: "Just Be A Child",              note: "Library donor" },
  { name: "CMS Ireland (CMSI)",           note: "Mission partner" },
  { name: "Urban Development Programme", note: "Community partner" },
  { name: "All Saints' Cathedral Nairobi",note: "Local partner" },
  { name: "Greene King IPA",              note: "Kit sponsor" },
];

export function PartnersSection() {
  return (
    <section className="bg-white py-16 border-t border-cream-dark" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeUp>
          <p id="partners-heading" className="text-center text-[11px] font-bold tracking-[0.12em] uppercase text-maroon/45 mb-10">
            Trusted by Partners Across Kenya &amp; Beyond
          </p>
          <ul className="flex flex-wrap items-stretch justify-center gap-3" role="list" aria-label="Our partners">
            {partners.map(({ name, note }) => (
              <li key={name}>
                <div className="bg-cream border border-cream-dark rounded-xl px-5 py-3.5 text-center hover:border-sky-taf/50 hover:shadow-sm transition-all duration-200 cursor-default">
                  <p className="text-sm font-semibold text-maroon-deep leading-snug">{name}</p>
                  <p className="text-[11px] text-maroon-deep/40 mt-0.5">{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
