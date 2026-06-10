"use client";

import { useState } from "react";
import clsx from "clsx";
import { Clock, MapPin, Users } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

type RoleCategory = "all" | "sports" | "education" | "community" | "skills";

interface Role {
  id: string;
  category: Exclude<RoleCategory, "all">;
  icon: string;
  title: string;
  commitment: string;
  location: string;
  team: string;
  urgency?: "high" | "medium";
  description: string;
  responsibilities: string[];
  idealFor: string;
}

const ROLES: Role[] = [
  {
    id: "football-coach",
    category: "sports",
    icon: "Trophy",
    title: "Football Coach / Assistant",
    commitment: "3+ hrs / week",
    location: "Kayole Soweto (on-site)",
    team: "Football Academy",
    urgency: "high",
    description:
      "Support our head coach in running training sessions for the senior squad, NGAO youth team, or junior academy. Help develop players technically and personally.",
    responsibilities: [
      "Lead or assist weekly training sessions",
      "Provide individual player feedback",
      "Help organise fixtures and tournaments",
      "Be a positive role model on and off the pitch",
    ],
    idealFor: "Qualified or experienced football coaches, PE teachers, or passionate footballers with coaching interest",
  },
  {
    id: "chess-facilitator",
    category: "sports",
    icon: "Brain",
    title: "Chess Facilitator",
    commitment: "2 hrs / week",
    location: "Kayole Soweto (on-site)",
    team: "Sports Department",
    description:
      "Run weekly chess sessions for youth of different age groups. Teach strategy, patience, and analytical thinking through structured game play and mini-tournaments.",
    responsibilities: [
      "Run structured chess sessions",
      "Teach beginners through to intermediate level",
      "Organise inter-school chess events",
      "Track player progression",
    ],
    idealFor: "Chess players of any level, teachers, or patient individuals who enjoy working with young people",
  },
  {
    id: "academic-tutor",
    category: "education",
    icon: "BookOpen",
    title: "Academic Tutor",
    commitment: "3–6 hrs / week",
    location: "Kayole Soweto or Remote",
    team: "Education Program",
    urgency: "high",
    description:
      "Provide one-on-one or small group tutoring to students from local schools who need support in Maths, English, Science, or Kiswahili. Can be done on-site or via video call.",
    responsibilities: [
      "Assess students' learning needs",
      "Deliver structured tutoring sessions",
      "Track academic progress",
      "Communicate with program coordinator",
    ],
    idealFor: "Teachers, university students, professionals with subject expertise, or anyone patient and committed",
  },
  {
    id: "library-assistant",
    category: "education",
    icon: "Book",
    title: "Library Assistant",
    commitment: "2–4 hrs / week",
    location: "Kayole Soweto (on-site)",
    team: "Community Library",
    description:
      "Support Library Manager Naomi Maingi in organising the collection, running reading programs for children, cataloguing new books, and creating a welcoming library environment.",
    responsibilities: [
      "Catalogue and organise books",
      "Run reading sessions for children",
      "Assist with library administration",
      "Help develop the Centre of Excellence",
    ],
    idealFor: "Librarians, teachers, literature students, or anyone who loves books and working with children",
  },
  {
    id: "girl-mentor",
    category: "community",
    icon: "Star",
    title: "Girl Mentor",
    commitment: "2–3 hrs / week",
    location: "Kayole Soweto (on-site)",
    team: "Girl Mentorship Program",
    urgency: "high",
    description:
      "Provide consistent, one-on-one mentorship to a girl in Kayole Soweto. Guide her through education, personal development, career awareness, and navigating the challenges of growing up in an informal settlement.",
    responsibilities: [
      "Build a trusting, consistent mentorship relationship",
      "Guide on education, goals, and life skills",
      "Attend group mentorship sessions",
      "Participate in TAF mentor training",
    ],
    idealFor: "Women with life experience, professionals, teachers — committed to consistency over a minimum 6-month period",
  },
  {
    id: "women-skills",
    category: "community",
    icon: "Users",
    title: "Women's Skills Trainer",
    commitment: "4 hrs / week",
    location: "Kayole Soweto (on-site)",
    team: "Women's Empowerment",
    description:
      "Facilitate practical skills training sessions for women in the TAF empowerment program. Topics include tailoring, digital literacy, financial planning, business basics, and health awareness.",
    responsibilities: [
      "Design and deliver skills training workshops",
      "Support savings circle formation",
      "Provide basic business mentoring",
      "Report on participant outcomes",
    ],
    idealFor: "Business professionals, entrepreneurs, tailors, health workers, or digital skills practitioners",
  },
  {
    id: "social-media",
    category: "skills",
    icon: "Smartphone",
    title: "Social Media & Content Creator",
    commitment: "3–5 hrs / week",
    location: "Remote or Hybrid",
    team: "Communications",
    urgency: "medium",
    description:
      "Help TAF tell its story to the world. Create compelling content for Facebook, Instagram, and WhatsApp — including match-day posts, program updates, donor stories, and impact statistics.",
    responsibilities: [
      "Capture or source content from TAF activities",
      "Write captions and design graphics",
      "Manage posting schedule",
      "Grow TAF's digital audience",
    ],
    idealFor: "Graphic designers, digital marketers, journalists, or social media enthusiasts — any location",
  },
  {
    id: "photographer",
    category: "skills",
    icon: "Camera",
    title: "Photographer / Videographer",
    commitment: "Event-based (flexible)",
    location: "Kayole Soweto (events)",
    team: "Communications",
    description:
      "Document TAF's programs, events, and community life through photography and video. Your work will appear on the website, social media, and in annual reports — telling the TAF story visually.",
    responsibilities: [
      "Photograph football matches and events",
      "Edit and deliver high-quality images",
      "Create short video content",
      "Build TAF's visual archive",
    ],
    idealFor: "Amateur or professional photographers, film students, or anyone with a good eye and camera",
  },
  {
    id: "grant-writer",
    category: "skills",
    icon: "PenTool",
    title: "Grant Writer / Fundraiser",
    commitment: "5–8 hrs / week",
    location: "Remote",
    team: "Development",
    urgency: "medium",
    description:
      "Research funding opportunities and write compelling grant applications on TAF's behalf. Help unlock institutional funding from foundations, government bodies, and international organisations.",
    responsibilities: [
      "Research relevant grant opportunities",
      "Write and submit funding applications",
      "Maintain a funding pipeline tracker",
      "Support funder reporting",
    ],
    idealFor: "Development professionals, charity sector workers, or strong writers with research skills — full remote",
  },
  {
    id: "outreach",
    category: "community",
    icon: "Globe",
    title: "Community Outreach Volunteer",
    commitment: "Flexible (events-based)",
    location: "Kayole Soweto (on-site)",
    team: "Community Outreach",
    description:
      "Join hands-on community drives — clean-ups, feeding programs, relief distribution, tree planting, and awareness campaigns. No specific skills required, just a willing heart and sturdy boots.",
    responsibilities: [
      "Participate in community clean-up drives",
      "Help distribute meals and supplies",
      "Support tree planting and environmental activities",
      "Assist with community awareness events",
    ],
    idealFor: "Anyone and everyone — no specific qualifications needed, just willingness and commitment",
  },
];

const CATEGORIES: { value: RoleCategory; label: string; icon: string }[] = [
  { value: "all",       label: "All Roles",  icon: "Grid" },
  { value: "sports",    label: "Sports",     icon: "Trophy" },
  { value: "education", label: "Education",  icon: "BookOpen" },
  { value: "community", label: "Community",  icon: "Handshake" },
  { value: "skills",    label: "Skills",     icon: "Lightbulb" },
];

const URGENCY_LABELS: Record<string, { label: string; color: string }> = {
  high:   { label: "Urgently Needed", color: "bg-red-100 text-red-700 border-red-200" },
  medium: { label: "Role Open",       color: "bg-amber-100 text-amber-700 border-amber-200" },
};

export function VolunteerRoles() {
  const [active, setActive] = useState<RoleCategory>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === "all" ? ROLES : ROLES.filter((r) => r.category === active);

  return (
    <section
      id="roles"
      className="bg-white py-20 lg:py-28 scroll-mt-[70px]"
      aria-labelledby="roles-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <SectionHeader
              id="roles-heading"
              eyebrow="Open Volunteer Roles"
              title="Find Your"
              titleEm="Place at TAF"
              subtitle="Ten roles across sports, education, community work, and professional skills — something for every background."
            />
            <div className="flex-shrink-0 bg-maroon-deep rounded-xl px-5 py-4 text-center">
              <p className="font-display font-black text-gold-taf text-3xl">{ROLES.length}</p>
              <p className="text-white/50 text-[10px] tracking-widest uppercase mt-1">Open Roles</p>
            </div>
          </div>
        </FadeUp>

        {/* Category filter */}
        <FadeUp delay={80}>
          <nav aria-label="Filter volunteer roles" className="mb-8">
            <ul className="flex flex-wrap gap-2" role="list">
              {CATEGORIES.map(({ value, label, icon }) => (
                <li key={value}>
                  <button
                    onClick={() => { setActive(value); setExpanded(null); }}
                    aria-pressed={active === value}
                    className={clsx(
                      "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2",
                      active === value
                        ? "bg-maroon text-white shadow-md shadow-maroon/20 -translate-y-0.5"
                        : "bg-cream border border-cream-dark text-neutral-600 hover:border-maroon/30 hover:text-maroon"
                    )}
                  >
                    <span aria-hidden><IconRenderer name={icon} size={24} /></span>
                    <span>{label}</span>
                    <span className={clsx(
                      "text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none",
                      active === value ? "bg-white/20 text-white" : "bg-cream-dark text-neutral-500"
                    )}>
                      {value === "all" ? ROLES.length : ROLES.filter((r) => r.category === value).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </FadeUp>

        {/* Roles grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          aria-live="polite"
          aria-label="Volunteer roles"
        >
          {filtered.map((role, i) => {
            const isExpanded = expanded === role.id;
            return (
              <FadeUp key={role.id} delay={i * 50}>
                <article
                  className={clsx(
                    "rounded-2xl border-2 transition-all duration-300 overflow-hidden",
                    isExpanded
                      ? "border-maroon bg-maroon-deep text-white shadow-2xl shadow-maroon/20"
                      : "border-cream-dark bg-cream hover:border-maroon/30 hover:shadow-md"
                  )}
                >
                  {/* Card header — always visible */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : role.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`role-body-${role.id}`}
                    className="w-full text-left p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-taf"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0" aria-hidden><IconRenderer name={role.icon} size={32} /></span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className={clsx(
                            "font-display font-bold text-lg",
                            isExpanded ? "text-white" : "text-maroon-deep"
                          )}>
                            {role.title}
                          </h3>
                          {role.urgency && (
                            <span className={clsx(
                              "text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1 border",
                              isExpanded
                                ? "bg-gold-taf/20 text-gold-taf border-gold-taf/30"
                                : URGENCY_LABELS[role.urgency].color
                            )}>
                              {URGENCY_LABELS[role.urgency].label}
                            </span>
                          )}
                        </div>
                        <p className={clsx("text-xs font-semibold tracking-wide uppercase mb-3", isExpanded ? "text-sky-taf/80" : "text-sky-dark")}>
                          {role.team}
                        </p>
                        <div className="flex flex-wrap gap-x-5 gap-y-1">
                          {[
                            { Icon: Clock, text: role.commitment },
                            { Icon: MapPin, text: role.location },
                          ].map(({ Icon, text }) => (
                            <div key={text} className="flex items-center gap-1.5">
                              <Icon size={12} className={isExpanded ? "text-white/40" : "text-neutral-400"} aria-hidden />
                              <span className={clsx("text-xs", isExpanded ? "text-white/55" : "text-neutral-500")}>{text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={clsx(
                          "w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-1",
                          isExpanded
                            ? "border-gold-taf/40 bg-gold-taf/10 rotate-180"
                            : "border-cream-dark bg-white"
                        )}
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4L6 8L10 4" stroke={isExpanded ? "#F5C518" : "#8B1A1A"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expanded body */}
                  {isExpanded && (
                    <div id={`role-body-${role.id}`} className="px-6 pb-7">
                      <p className="text-white/65 text-sm leading-relaxed font-light mb-6 border-t border-white/10 pt-5">
                        {role.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-5 mb-6">
                        <div>
                          <p className="text-gold-taf/70 text-[10px] font-semibold tracking-widest uppercase mb-3">
                            Responsibilities
                          </p>
                          <ul className="flex flex-col gap-2" role="list">
                            {role.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-2.5 text-sm text-white/60 font-light">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-taf flex-shrink-0 mt-1.5" aria-hidden />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-gold-taf/70 text-[10px] font-semibold tracking-widest uppercase mb-3">
                            Ideal for
                          </p>
                          <p className="text-white/60 text-sm leading-relaxed font-light">
                            {role.idealFor}
                          </p>
                          <div className="mt-4 flex flex-col gap-2 text-xs text-white/40">
                            <div className="flex items-center gap-2">
                              <Clock size={12} aria-hidden />{role.commitment}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={12} aria-hidden />{role.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users size={12} aria-hidden />{role.team}
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#apply"
                        className="inline-flex items-center gap-2 bg-gold-taf text-maroon-deep font-bold text-sm px-6 py-3 rounded-xl hover:bg-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
                      >
                        Apply for This Role →
                      </a>
                    </div>
                  )}
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
