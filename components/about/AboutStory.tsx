import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight } from "lucide-react";

export function AboutStory() {
  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section 1: Story + photo */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20 lg:mb-28">
          <FadeUp>
            <p className="text-sky-dark text-[11px] font-bold tracking-[0.12em] uppercase mb-5">Our Story</p>
            <h2 id="story-heading" className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-[1.06] text-balance mb-8">
              How Tumaini<br />
              <span className="text-sky-dark">Began</span>
            </h2>
            <div className="space-y-5 text-maroon-deep/65 text-[1.02rem] leading-relaxed">
              <p>
                Tumaini African Foundation was born from a simple conviction: every young person
                in Kayole Soweto deserves a fair chance. In one of Nairobi&apos;s most vibrant yet
                challenging informal settlements, our founders saw untapped potential everywhere —
                in children sitting on street corners, mothers working without networks, and young
                men looking for purpose.
              </p>
              <p>
                The name <strong className="text-maroon-deep font-semibold">Tumaini</strong> — Kiswahili for <em>hope</em> — was chosen deliberately.
                Hope is not passive. It is the active belief that things can be better, paired
                with the commitment to do something about it.
              </p>
              <p>
                Today, TAF runs ten active programs spanning sports, education, mentorship,
                women&apos;s empowerment, and community outreach — with international partnerships
                stretching to Belfast, Ireland, and beyond.
              </p>
              <p>
                Our venue, the <strong className="text-maroon-deep font-semibold">#HomeOfTransformation</strong>, is more than a building.
                It is where Kayole&apos;s young people come to study, train, eat, dream, and grow.
                Where women meet to build skills and businesses. Where community gathers.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 bg-gold-taf/8 border border-gold-taf/25 rounded-xl px-6 py-4">
              <div className="w-1 h-10 rounded-full bg-gold-taf flex-shrink-0" aria-hidden />
              <div>
                <p className="text-maroon-deep/50 text-xs font-semibold uppercase tracking-wider mb-0.5">Our tagline</p>
                <p className="text-maroon-deep font-display font-bold text-lg italic">&ldquo;We Empower to Empower&rdquo;</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={140} className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/gallery/outreach-children-street.png" alt="Children in Kayole Soweto during a TAF community event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/30 to-transparent" />
            </div>

            {/* Registration card */}
            <div className="bg-maroon-deep rounded-xl p-7">
              <h3 className="font-display font-bold text-white text-lg mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-gold-taf/15 border border-gold-taf/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-taf text-sm">✓</span>
                </span>
                Official Registration
              </h3>
              <dl className="grid grid-cols-2 gap-3">
                {[
                  { label: "Type", value: "Community Based Organisation" },
                  { label: "Registered in", value: "Republic of Kenya" },
                  { label: "Location", value: "Kayole Soweto, Nairobi" },
                  { label: "Contact", value: "0733 441 983" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 border border-white/8 rounded-lg p-3">
                    <dt className="text-white/35 text-[10px] tracking-widest uppercase mb-1">{label}</dt>
                    <dd className="text-white text-sm font-medium leading-snug">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeUp>
        </div>

        {/* Section 2: Mission/Vision + photo grid (alternating layout) */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeUp delay={100}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/gallery/women-community-kitchen.png" alt="Women gather for a cooking session" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl flex-1">
                  <Image src="/images/gallery/community-hall-talk.png" alt="Community talk at the TAF hall" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl flex-1">
                  <Image src="/images/gallery/outreach-community-cleanup.png" alt="Volunteers in community clean-up" fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="flex flex-col gap-5">
              <div className="bg-sky-taf/8 border border-sky-taf/20 rounded-xl p-6">
                <h3 className="font-display font-bold text-maroon-deep text-xl mb-3">Our Mission</h3>
                <p className="text-maroon-deep/65 text-[1.02rem] leading-relaxed">
                  To positively transform our society by empowering youth, families, and
                  communities in Kayole Soweto through sport, education, and outreach.
                </p>
              </div>
              <div className="bg-gold-taf/8 border border-gold-taf/20 rounded-xl p-6">
                <h3 className="font-display font-bold text-maroon-deep text-xl mb-3">Our Vision</h3>
                <p className="text-maroon-deep/65 text-[1.02rem] leading-relaxed">
                  A Kayole Soweto where every young person has the opportunity to discover
                  and fulfil their God-given potential.
                </p>
              </div>
              <div className="bg-cream border border-cream-dark rounded-xl p-6">
                <h3 className="font-display font-bold text-maroon-deep text-base mb-2">20-Year International Partnership</h3>
                <p className="text-maroon-deep/60 text-sm leading-relaxed mb-4">
                  A 20-year friendship with St Mark&apos;s Dundela (Belfast, Northern Ireland)
                  and the Urban Development Programme, facilitated through CMS Ireland — built on
                  mutual trust, prayer, and exchange visits.
                </p>
                <Link href="/about" className="inline-flex items-center gap-1.5 text-sky-dark text-xs font-bold tracking-wide uppercase hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:underline">
                  Learn about our partners <ArrowRight size={12} aria-hidden />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
