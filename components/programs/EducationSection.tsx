import { FadeUp } from "@/components/ui/FadeUp";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { IconRenderer } from "@/components/ui/IconRenderer";

const services = [
  {
    icon: "BookOpen",
    title: "Community Library",
    desc: "A well-stocked library with 1,500+ books — from children's picture books to secondary school references — serving students from five local schools.",
  },
  {
    icon: "GraduationCap",
    title: "Academic Tutoring",
    desc: "Volunteer tutors help children with homework, exam preparation, and subject-specific support in a structured and encouraging environment.",
  },
  {
    icon: "DollarSign",
    title: "School Fees Assistance",
    desc: "TAF works with partners to support families who cannot afford school fees — ensuring no child misses school due to financial hardship.",
  },
  {
    icon: "Building2",
    title: "Centre of Excellence",
    desc: "A growing research and learning hub aspiring to bridge education, business, the church, and civil society — bringing opportunities into Kayole.",
  },
  {
    icon: "Package",
    title: "Learning Materials",
    desc: "Exercise books, pens, and basic school supplies distributed to children in need — removing the small but critical barriers to learning.",
  },
  {
    icon: "Handshake",
    title: "School Partnerships",
    desc: "TAF partners with five local schools, embedding library access and educational support directly into the school community.",
  },
];

const libStats = [
  { value: 1500, suffix: "+", label: "Books in Library" },
  { value: 120, suffix: "+", label: "Active Students" },
  { value: 5, suffix: "", label: "Partner Schools" },
  { value: 2024, suffix: "", label: "Latest Donation" },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-[130px] bg-white py-20 lg:py-28"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase text-maroon mb-3">
              Education & Library
            </p>
            <h2
              id="education-heading"
              className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight mb-6"
            >
              Knowledge Is the Most{" "}
              <em className="not-italic text-sky-dark">Lasting Gift</em>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed font-light mb-5">
              In February 2024, the Provost of All Saints' Cathedral handed over
              1,500 books donated by Just Be A Child to the TAF community library in
              Kayole. It was a landmark moment — but it was built on years of quiet,
              determined work by Library Manager{" "}
              <strong className="text-maroon font-semibold">Naomi Maingi</strong> and
              the TAF education team.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light mb-8">
              Access to books, tutoring, and a quiet place to study can be
              transformative for a child growing up in an informal settlement where
              home environments are often crowded and under-resourced. TAF's
              education programs create that space — and fill it with opportunity.
            </p>

            {/* Library milestone */}
            <div className="bg-sky-pale border border-sky-taf/25 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 text-sky-taf" aria-hidden>�</span>
                <div>
                  <p className="font-display font-bold text-maroon-deep text-base mb-1">
                    February 2024 Milestone
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">
                    The Provost of All Saints' Cathedral, Nairobi, officially handed
                    over 1,500 books donated by{" "}
                    <strong className="text-sky-dark">Just Be A Child</strong> to the
                    TAF community library — the largest single donation in the
                    library's history.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            {/* Stats grid */}
            <dl className="grid grid-cols-2 gap-4 mb-8">
              {libStats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="bg-cream border border-cream-dark rounded-xl p-6 text-center"
                >
                  <dd className="font-display font-black text-maroon-deep text-4xl leading-none mb-1">
                    {label === "Latest Donation" ? (
                      <span>Feb&nbsp;<span className="text-3xl">2024</span></span>
                    ) : (
                      <AnimatedCounter target={value} suffix={suffix} />
                    )}
                  </dd>
                  <dt className="text-neutral-500 text-xs tracking-widest uppercase font-medium mt-1">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>

            {/* Naomi Maingi highlight */}
            <div className="bg-maroon-deep rounded-xl p-6 flex gap-4 items-start">
              <div
                className="w-12 h-12 rounded-full bg-sky-taf flex items-center justify-center flex-shrink-0"
                aria-hidden
              >
                <span className="font-display font-black text-white text-base">NM</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-base mb-1">
                  Naomi Maingi
                </p>
                <p className="text-sky-taf text-xs font-semibold tracking-wide uppercase mb-2">
                  Library Manager, TAF
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Naomi leads the library and Centre of Excellence, making quality
                  educational resources accessible to every child in Kayole Soweto.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Services grid */}
        <FadeUp delay={100}>
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6">
            What our education program provides
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-cream border border-cream-dark rounded-xl p-6 hover:border-sky-taf hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl mb-3 block" aria-hidden><IconRenderer name={icon} size={28} /></span>
                <h3 className="font-display font-bold text-maroon-deep text-base mb-2">
                  {title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
