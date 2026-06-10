"use client";

import { useRef } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { IconRenderer } from "@/components/ui/IconRenderer";

const programs = [
  { id: "football-academy", icon: "Trophy", label: "Football Academy", badge: "Flagship", color: "bg-maroon text-white" },
  { id: "sports",           icon: "Brain", label: "Sports Dept",      badge: "Chess · TT · Darts", color: "bg-sky-taf text-white" },
  { id: "education",        icon: "BookOpen", label: "Education",         badge: "Library & Tuition", color: "bg-sky-dark text-white" },
  { id: "mentorship",       icon: "Handshake", label: "Mentorship",        badge: "Youth & Girls", color: "bg-green-700 text-white" },
  { id: "women",            icon: "Users", label: "Women's Empowerment", badge: "Skills & Enterprise", color: "bg-purple-700 text-white" },
  { id: "outreach",         icon: "Globe", label: "Community Outreach", badge: "Clean-ups & Feeding", color: "bg-amber-600 text-white" },
];

export function ProgramsOverview() {
  return (
    <section className="bg-white py-14 border-b border-cream-dark" aria-label="Programs quick navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-8">
            Jump to a program
          </p>
          <nav aria-label="Programs navigation">
            <ul className="flex flex-wrap gap-3 justify-center" role="list">
              {programs.map(({ id, icon, label, badge, color }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className={`group flex items-center gap-2.5 ${color} rounded-xl px-5 py-3 text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maroon shadow-sm`}
                  >
                    <span aria-hidden><IconRenderer name={icon} size={24} /></span>
                    <span>{label}</span>
                    <span className="hidden sm:inline text-[10px] opacity-70 font-normal border-l border-white/30 pl-2.5">
                      {badge}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FadeUp>
      </div>
    </section>
  );
}
