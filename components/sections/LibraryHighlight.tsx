import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight } from "lucide-react";

const libStats = [
  { value: 1500, suffix: "+", label: "Books" },
  { value: 120,  suffix: "+", label: "Students" },
  { value: 5,    suffix: "",  label: "Schools" },
];

export function LibraryHighlight() {
  return (
    <section className="bg-sky-dark py-24 lg:py-32 relative overflow-hidden" aria-labelledby="library-heading">

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Text — left */}
          <FadeUp>
            <p className="text-gold-taf text-[11px] font-bold tracking-[0.12em] uppercase mb-5">
              Community Library
            </p>
            <h2 id="library-heading" className="font-display font-black text-white text-4xl sm:text-5xl leading-[1.06] text-balance mb-6">
              Knowledge Is Our<br />
              <span className="text-gold-taf">Most Powerful Tool</span>
            </h2>
            <p className="text-white/70 text-[1.02rem] leading-relaxed mb-10">
              In February 2024, the Provost of All Saints&apos; Cathedral handed over
              1,500 books donated by Just Be A Child to our Kayole library. Library
              Manager Naomi Maingi and the team have built a genuine Centre of
              Excellence that changes lives every day.
            </p>

            <dl className="flex gap-10 mb-10 flex-wrap" aria-label="Library statistics">
              {libStats.map(({ value, suffix, label }) => (
                <div key={label}>
                  <dd className="font-display font-black text-white leading-none">
                    <span className="text-5xl"><AnimatedCounter target={value} /></span>
                    <span className="text-gold-taf text-3xl">{suffix}</span>
                  </dd>
                  <dt className="text-white/55 text-xs tracking-wider font-bold uppercase mt-2">{label}</dt>
                </div>
              ))}
            </dl>

            <Link
              href="/programs#education"
              className="inline-flex items-center gap-2 bg-gold-taf text-maroon-deep text-sm font-bold tracking-wide uppercase px-6 py-3.5 rounded-lg hover:bg-gold-dark hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2 focus-visible:ring-offset-sky-dark"
            >
              Visit the Library
              <ArrowRight size={14} aria-hidden />
            </Link>
          </FadeUp>

          {/* Photo grid — right */}
          <FadeUp delay={140}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl col-span-1 row-span-2">
                <Image src="/images/gallery/library-childrens-books.png" alt="Children's books at the TAF library" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/gallery/library-bookshelf.png" alt="TAF library bookshelf" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/gallery/education-tutoring-session.png" alt="Students in a tutoring session" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
