import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";

const offerings = [
  {
    icon: "BookOpen",
    title: "Community Library",
    desc: "A fully stocked library with 1,500+ books spanning children's fiction, academic texts, reference materials, and more — open to students from 5 local schools.",
  },
  {
    icon: "Users",
    title: "Academic Tutoring",
    desc: "Volunteer tutors and facilitators hold structured sessions to help students with their schoolwork, exam preparation, and subject-specific challenges.",
  },
  {
    icon: "DollarSign",
    title: "School Fees Support",
    desc: "TAF assists vulnerable families with school fees for children who would otherwise be forced to drop out due to financial hardship.",
  },
  {
    icon: "Trophy",
    title: "Centre of Excellence",
    desc: "Our vision for the library goes beyond books — developing a Centre of Excellence connecting industry, education, business, church, and civil society.",
  },
];

const libStats = [
  { value: 1500, suffix: "+", label: "Books Available" },
  { value: 120, suffix: "+", label: "Students Served" },
  { value: 5, suffix: "", label: "Schools Supported" },
];

export function ProgramEducation() {
  return (
    <section
      id="education"
      className="bg-white py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <SectionHeader
              id="education-heading"
              eyebrow="Education Support"
              title="Building Minds,"
              titleEm="Opening Doors"
              subtitle="Knowledge is the most durable investment any community can make. TAF's education program ensures that financial hardship is never a barrier to learning in Kayole Soweto."
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offerings.map(({ icon, title, desc }) => (
                <div key={title} className="bg-cream border border-cream-dark rounded-xl p-5 hover:shadow-md transition-shadow">
                  <span className="text-2xl block mb-3" aria-hidden><IconRenderer name={icon} size={28} /></span>
                  <h3 className="font-display font-bold text-maroon-deep text-base mb-2">{title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/contact" variant="gold">Volunteer as a Tutor</Button>
            </div>
          </FadeUp>

          <FadeUp delay={150} className="flex flex-col gap-6">
            {/* Library stats */}
            <div className="bg-sky-taf rounded-2xl p-8">
              <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-6">Library at a Glance</p>
              <dl className="grid grid-cols-3 gap-4">
                {libStats.map(({ value, suffix, label }) => (
                  <div key={label} className="text-center">
                    <dt className="text-white/60 text-[10px] tracking-widest uppercase mt-2 order-2">{label}</dt>
                    <dd className="font-display font-black text-white text-3xl leading-none order-1">
                      <AnimatedCounter target={value} suffix={suffix} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Book donation callout */}
            <div className="bg-cream border border-cream-dark rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 text-gold-taf" aria-hidden>📦</span>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-maroon mb-2">Milestone — February 2024</p>
                  <h3 className="font-display font-bold text-maroon-deep text-xl mb-2">1,500 Books Donated</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">
                    The Provost of All Saints' Cathedral, Nairobi, handed over 1,500
                    books donated by <strong className="text-maroon">Just Be A Child</strong> to the TAF
                    community library — a landmark moment for education access in Kayole Soweto.
                  </p>
                </div>
              </div>
            </div>

            {/* Library manager */}
            <div className="bg-white border border-cream-dark rounded-2xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-sky-dark flex items-center justify-center flex-shrink-0">
                <span className="font-display font-black text-white text-lg">NM</span>
              </div>
              <div>
                <p className="font-display font-bold text-maroon-deep text-base">Naomi Maingi</p>
                <p className="text-sky-dark text-xs font-semibold tracking-wide uppercase mb-1">Library Manager</p>
                <p className="text-neutral-500 text-sm font-light">
                  Overseeing daily operations of the TAF Community Library and the development of our Centre of Excellence.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
