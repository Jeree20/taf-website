import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote:
      "Coaching the TAF Football Academy was the most fulfilling three months of my life. Watching boys who had nothing to look forward to become disciplined, proud players — that changes you permanently.",
    author: "Samuel Kariuki",
    role: "Football Coach Volunteer, Nairobi",
    initials: "SK",
    avatarColor: "bg-maroon",
    detail: "3 months · Football Academy",
  },
  {
    quote:
      "I volunteered as an academic tutor from Belfast via our church's partnership with TAF. Doing it over video call worked beautifully. The students were hungry to learn in a way that moved me deeply.",
    author: "Claire Donnelly",
    role: "Academic Tutor Volunteer, Belfast",
    initials: "CD",
    avatarColor: "bg-sky-dark",
    detail: "6 months · Remote tutoring",
  },
  {
    quote:
      "I came for two weeks as a photographer and stayed for a month. Kayole Soweto got under my skin. Antony runs something genuinely special here — I've recommended it to every photographer I know.",
    author: "Erik Magnusson",
    role: "Photography Volunteer, Sweden",
    initials: "EM",
    avatarColor: "bg-green-700",
    detail: "4 weeks · Communications",
  },
  {
    quote:
      "Mentoring a girl in the TAF programme was the most direct, impactful thing I have done outside my professional life. The structure TAF provides made it easy — and the impact was immediate.",
    author: "Wangeci Mwangi",
    role: "Girl Mentor Volunteer, Nairobi",
    initials: "WM",
    avatarColor: "bg-purple-700",
    detail: "Ongoing · Girl Mentorship",
  },
];

export function VolunteerTestimonials() {
  return (
    <section
      className="bg-cream py-20 lg:py-24"
      aria-labelledby="volunteer-voices-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <p className="text-maroon text-[11px] font-semibold tracking-widest uppercase text-center mb-3">
            Volunteer Stories
          </p>
          <h2
            id="volunteer-voices-heading"
            className="font-display font-black text-maroon-deep text-center text-3xl sm:text-4xl mb-14"
          >
            Voices from Our Volunteers
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map(({ quote, author, role, initials, avatarColor, detail }, i) => (
            <FadeUp key={author} delay={i * 80}>
              <figure className="bg-white border border-cream-dark rounded-2xl p-8 hover:shadow-md transition-shadow h-full flex flex-col">
                <span className="font-display text-7xl leading-none text-maroon/10 select-none mb-2" aria-hidden>
                  "
                </span>
                <blockquote className="flex-1 mb-6">
                  <p className="text-neutral-600 text-sm leading-relaxed font-light italic">{quote}</p>
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-cream-dark pt-5">
                  <div
                    className={`w-11 h-11 rounded-full ${avatarColor} flex items-center justify-center flex-shrink-0`}
                    aria-hidden
                  >
                    <span className="font-display font-black text-white text-sm">{initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-maroon-deep text-sm">{author}</p>
                    <p className="text-neutral-500 text-xs">{role}</p>
                  </div>
                  <span className="text-[10px] bg-cream border border-cream-dark rounded-full px-3 py-1 text-neutral-500 flex-shrink-0 hidden sm:block">
                    {detail}
                  </span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
