"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "Do I need to be in Nairobi to volunteer?",
    a: "Not at all. Several TAF roles are fully remote — including academic tutoring via video call, social media management, grant writing, and photography editing. On-site roles require presence in Kayole Soweto, but we welcome international and diaspora volunteers who can commit to a defined placement period.",
  },
  {
    q: "What is the minimum time commitment?",
    a: "This varies by role — from 2 hours per week for chess facilitation to 5–8 hours per week for grant writing. For mentorship roles, we ask for a minimum 6-month commitment to ensure consistency for the young people involved. Event-based roles like photography have no fixed weekly minimum.",
  },
  {
    q: "I don't have professional qualifications. Can I still volunteer?",
    a: "Absolutely. Many of our most valuable volunteers are people with a willing heart rather than formal qualifications. Our community outreach role specifically welcomes anyone. For tutoring and coaching, we look for competence and commitment rather than formal certifications.",
  },
  {
    q: "Is there a cost to volunteer?",
    a: "TAF does not charge a placement fee. International volunteers are responsible for their own travel, accommodation, and visa costs. We can help with guidance on affordable accommodation near Kayole and provide letters of support for visa applications where required.",
  },
  {
    q: "Do you accept group or corporate volunteering teams?",
    a: "Yes — we welcome teams from companies, churches, universities, and other organisations looking for a meaningful CSR or community experience. Group volunteering can be arranged around events, clean-up drives, library sessions, or specific project days. Contact us to discuss.",
  },
  {
    q: "Will I receive a reference or certificate?",
    a: "Yes. All volunteers who complete their minimum commitment receive a signed certificate from TAF and a personal reference letter from Director Antony Njoroge. For longer placements, we can provide a detailed impact portfolio documenting your contribution.",
  },
  {
    q: "How do I prepare for an on-site placement in Kayole?",
    a: "TAF provides a full orientation before you begin, covering the Kayole Soweto context, safety guidance, community etiquette, and TAF's programs and values. For international volunteers, we can also connect you with former volunteers who have completed similar placements.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-dark last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-maroon"
      >
        <span className="font-display font-bold text-maroon-deep text-base leading-snug">{q}</span>
        <ChevronDown
          size={20}
          aria-hidden
          className={clsx(
            "text-maroon flex-shrink-0 mt-0.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-neutral-600 text-sm leading-relaxed font-light">{a}</p>
        </div>
      )}
    </div>
  );
}

export function VolunteerFAQ() {
  return (
    <section
      className="bg-white py-20 lg:py-24"
      aria-labelledby="volunteer-faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="volunteer-faq-heading"
            eyebrow="Common Questions"
            title="Volunteer FAQs"
            titleEm=""
            subtitle="Everything you need to know before applying to volunteer at Tumaini African Foundation."
            centered
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-12 bg-cream border border-cream-dark rounded-2xl px-6 sm:px-8">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
