import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const team = [
  {
    name: "Antony Njoroge",
    role: "Founder & Director",
    initials: "AN",
    avatarColor: "bg-maroon",
    bio: "Antony founded Tumaini African Foundation with a vision to transform Kayole Soweto through community-centred development. His areas of expertise include urban informal settlement ministry, leadership training, resource mobilisation, and project management. He is passionate about girl mentorship, community empowerment, and poverty alleviation.",
    focus: ["Urban Ministry", "Leadership Training", "Girl Mentorship", "Resource Mobilisation"],
  },
  {
    name: "Naomi Maingi",
    role: "Library Manager",
    initials: "NM",
    avatarColor: "bg-sky-dark",
    bio: "Naomi manages the TAF Community Library and Centre of Excellence, overseeing a growing collection of over 1,500 books that serves students from five local schools. She is committed to making quality educational resources accessible to every child in Kayole Soweto.",
    focus: ["Library Management", "Education Access", "Child Literacy", "Centre of Excellence"],
  },
  {
    name: "Football Academy Coach",
    role: "Head Coach, Football Academy",
    initials: "FC",
    avatarColor: "bg-green-700",
    bio: "Our Football Academy Head Coach leads training for multiple squads — seniors, youth, and women — developing talent while instilling discipline, teamwork, and the values that shape character both on and off the pitch.",
    focus: ["Youth Coaching", "Talent Development", "Team Discipline", "Women's Football"],
  },
  {
    name: "Join Our Team",
    role: "Volunteer Opportunity",
    initials: "?",
    avatarColor: "bg-gold-dark",
    bio: "Tumaini African Foundation is always looking for committed volunteers and staff who share our vision for Kayole Soweto. If you have skills in education, sports, health, media, or community development, we would love to hear from you.",
    focus: ["Education", "Sports", "Health", "Media & Comms"],
    isVacancy: true,
  },
];

export function AboutTeam() {
  return (
    <section
      className="bg-cream py-20 lg:py-28"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="team-heading"
            eyebrow="The People Behind TAF"
            title="Meet Our Team"
            titleEm=""
            subtitle="Dedicated leaders and volunteers who give their time, skills, and hearts to Kayole Soweto every single day."
            centered
          />
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, initials, avatarColor, bio, focus, isVacancy }, i) => (
            <FadeUp key={name} delay={i * 80}>
              <article
                className={`bg-white border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col ${
                  isVacancy
                    ? "border-gold-taf/40 border-dashed"
                    : "border-cream-dark"
                }`}
              >
                {/* Coloured top bar */}
                <div className={`h-1 w-full ${avatarColor}`} aria-hidden />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full ${avatarColor} flex items-center justify-center mb-5 flex-shrink-0`}
                    aria-hidden
                  >
                    <span className="font-display font-black text-white text-xl">
                      {initials}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-bold text-maroon-deep text-lg leading-tight mb-1">
                      {name}
                    </h3>
                    <p className="text-sky-dark text-xs font-semibold tracking-wide uppercase mb-4">
                      {role}
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed font-light mb-5">
                      {bio}
                    </p>
                  </div>

                  {/* Focus tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto" aria-label={`${name}'s focus areas`}>
                    {focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-cream border border-cream-dark rounded-full px-2.5 py-1 text-neutral-500 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
