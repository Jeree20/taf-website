import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const departments = [
  {
    icon: "Trophy",
    name: "Football Academy",
    contact: "Antony Njoroge",
    role: "Director",
    desc: "Registration, trials, match schedules, kit sponsorship, and all Football Academy enquiries.",
    topics: ["Player registration", "Trial dates", "Coaching positions", "Kit sponsorship"],
    accentColor: "border-t-maroon",
    badgeColor: "bg-maroon/8 text-maroon",
  },
  {
    icon: "BookOpen",
    name: "Library & Education",
    contact: "Naomi Maingi",
    role: "Library Manager",
    desc: "Book donations, library access, tutoring program enrolment, and Centre of Excellence enquiries.",
    topics: ["Book donations", "Student registration", "Tutor volunteering", "School partnerships"],
    accentColor: "border-t-sky-taf",
    badgeColor: "bg-sky-taf/8 text-sky-dark",
  },
  {
    icon: "Users",
    name: "Women's Empowerment",
    contact: "TAF Women's Team",
    role: "Program Coordinators",
    desc: "Skills training registration, savings circle formation, women's football team, and advocacy.",
    topics: ["Skills training", "Savings circles", "Women's football", "Mentorship sessions"],
    accentColor: "border-t-purple-500",
    badgeColor: "bg-purple-50 text-purple-700",
  },
  {
    icon: "Globe",
    name: "Community Outreach",
    contact: "TAF Outreach Team",
    role: "Outreach Coordinators",
    desc: "Feeding program referrals, volunteer sign-up for drives, event partnerships, and relief support.",
    topics: ["Feeding program", "Clean-up drives", "Relief distribution", "Event partnerships"],
    accentColor: "border-t-green-500",
    badgeColor: "bg-green-50 text-green-700",
  },
  {
    icon: "Heart",
    name: "Donations & Partnerships",
    contact: "Antony Njoroge",
    role: "Director",
    desc: "Major gifts, corporate CSR, grant discussions, M-Pesa setup, and international funding.",
    topics: ["Major donations", "Corporate CSR", "Grant funding", "Diaspora giving"],
    accentColor: "border-t-gold-taf",
    badgeColor: "bg-gold-taf/10 text-gold-dark",
  },
  {
    icon: "Smartphone",
    name: "Media & Communications",
    contact: "TAF Comms Team",
    role: "Communications",
    desc: "Press interviews, photography requests, partnership stories, and social media collaborations.",
    topics: ["Press & media", "Photography", "Story features", "Social media"],
    accentColor: "border-t-neutral-400",
    badgeColor: "bg-neutral-100 text-neutral-600",
  },
];

export function ContactDepartments() {
  return (
    <section
      className="bg-cream py-20 lg:py-24"
      aria-labelledby="departments-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="departments-heading"
            eyebrow="Contact by Department"
            title="Reach the Right"
            titleEm="Team Directly"
            subtitle="Know which part of TAF you need? Here's a guide to our departments — mention the relevant area in your message for the fastest response."
          />
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map(({ icon, name, contact, role, desc, topics, accentColor, badgeColor }, i) => (
            <FadeUp key={name} delay={i * 60}>
              <article className={`bg-white border border-cream-dark rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col border-t-4 ${accentColor}`}>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl flex-shrink-0" aria-hidden><IconRenderer name={icon} size={32} /></span>
                    <div>
                      <h3 className="font-display font-bold text-maroon-deep text-lg leading-tight">{name}</h3>
                      <p className="text-neutral-500 text-xs mt-0.5">
                        Contact: <span className="font-medium text-neutral-700">{contact}</span>
                        {" · "}{role}
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed font-light flex-1 mb-4">{desc}</p>

                  <div className="mb-4">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-2">Common topics</p>
                    <ul className="flex flex-wrap gap-1.5" role="list">
                      {topics.map((t) => (
                        <li key={t}>
                          <span className={`text-[10px] font-medium rounded-full px-2.5 py-1 ${badgeColor}`}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#message"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon hover:text-maroon-dark uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:underline group mt-auto"
                    aria-label={`Send a message to the ${name} team`}
                  >
                    Send a Message
                    <ArrowRight size={12} aria-hidden className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
