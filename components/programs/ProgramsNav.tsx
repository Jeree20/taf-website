"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "football-academy", label: "Football Academy", tag: "Flagship" },
  { id: "sports", label: "Other Sports", tag: "" },
  { id: "education", label: "Education & Library", tag: "" },
  { id: "mentorship", label: "Mentorship", tag: "" },
  { id: "women", label: "Women's Empowerment", tag: "" },
  { id: "outreach", label: "Community Outreach", tag: "" },
];

export function ProgramsNav() {
  const [active, setActive] = useState("football-academy");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 130;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      ref={navRef}
      className="sticky top-[70px] z-40 bg-white border-b border-cream-dark shadow-sm"
      role="navigation"
      aria-label="Jump to program section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3">
          {sections.map(({ id, label, tag }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-current={active === id ? "true" : undefined}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-taf whitespace-nowrap ${
                active === id
                  ? "bg-maroon text-white shadow-sm"
                  : "text-neutral-500 hover:text-maroon-deep hover:bg-cream"
              }`}
            >
              {label}
              {tag && (
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded ${
                    active === id ? "bg-gold-taf text-maroon-deep" : "bg-gold-taf/20 text-gold-dark"
                  }`}
                >
                  {tag}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
