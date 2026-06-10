"use client";

import { useState } from "react";
import clsx from "clsx";
import { Check } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IconRenderer } from "@/components/ui/IconRenderer";

type Frequency = "once" | "monthly";

interface GivingLevel {
  id: string;
  label: string;
  amountKES: number;
  amountUSD: number;
  impact: string;
  impactDetail: string;
  icon: string;
  featured?: boolean;
}

const LEVELS: GivingLevel[] = [
  {
    id: "seed",
    label: "Seed",
    amountKES: 500,
    amountUSD: 4,
    impact: "Provides a week of library access",
    impactDetail: "Covers materials and resources for one student to use the TAF library for a full week.",
    icon: "Sprout",
  },
  {
    id: "supporter",
    label: "Supporter",
    amountKES: 1500,
    amountUSD: 12,
    impact: "Feeds a child for a month",
    impactDetail: "Covers the cost of nutritious daily meals for one child at the TAF feeding program for 30 days.",
    icon: "UtensilsCrossed",
  },
  {
    id: "champion",
    label: "Champion",
    amountKES: 3000,
    amountUSD: 23,
    impact: "Kits a youth footballer",
    impactDetail: "Covers football boots, kit, and training equipment for one Academy player for an entire season.",
    icon: "Trophy",
    featured: true,
  },
  {
    id: "transformer",
    label: "Transformer",
    amountKES: 5000,
    amountUSD: 38,
    impact: "Supports a girl mentor for a month",
    impactDetail: "Funds one month of structured mentorship sessions for a girl in the TAF girl mentorship program.",
    icon: "Star",
  },
  {
    id: "builder",
    label: "Builder",
    amountKES: 10000,
    amountUSD: 77,
    impact: "Stocks the library with 10 books",
    impactDetail: "Purchases 10 quality books for the TAF community library — permanent resources serving 5 schools.",
    icon: "BookOpen",
  },
  {
    id: "pioneer",
    label: "Pioneer",
    amountKES: 25000,
    amountUSD: 192,
    impact: "Sponsors a youth program for a month",
    impactDetail: "Covers the full running costs of one TAF youth program — coaching, materials, and facilitation — for 30 days.",
    icon: "Rocket",
  },
];

export function DonateGivingLevels() {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [selected, setSelected] = useState<string>("champion");

  const multiplier = frequency === "monthly" ? 1 : 1;
  const selectedLevel = LEVELS.find((l) => l.id === selected);

  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="giving-levels-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionHeader
              id="giving-levels-heading"
              eyebrow="Giving Levels"
              title="Choose Your"
              titleEm="Level of Impact"
            />
            {/* Frequency toggle */}
            <div
              className="flex-shrink-0 bg-cream border border-cream-dark rounded-xl p-1 flex"
              role="group"
              aria-label="Donation frequency"
            >
              {(["once", "monthly"] as Frequency[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  aria-pressed={frequency === f}
                  className={clsx(
                    "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon",
                    frequency === f
                      ? "bg-maroon text-white shadow-sm"
                      : "text-neutral-500 hover:text-maroon"
                  )}
                >
                  {f === "once" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEVELS.map(({ id, label, amountKES, amountUSD, impact, impactDetail, icon, featured }, i) => (
            <FadeUp key={id} delay={i * 60}>
              <button
                onClick={() => setSelected(id)}
                aria-pressed={selected === id}
                className={clsx(
                  "w-full text-left rounded-2xl border-2 p-6 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon focus-visible:ring-offset-2 group",
                  selected === id
                    ? "border-maroon bg-maroon-deep text-white shadow-xl shadow-maroon/20 -translate-y-1"
                    : featured
                    ? "border-gold-taf/60 bg-gold-pale hover:border-maroon/40 hover:shadow-md"
                    : "border-cream-dark bg-cream hover:border-maroon/30 hover:shadow-md"
                )}
              >
                {featured && selected !== id && (
                  <div className="inline-block bg-gold-taf text-maroon-deep text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full mb-3">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-3xl" aria-hidden><IconRenderer name={icon} size={32} /></span>
                  {selected === id && (
                    <span className="w-6 h-6 rounded-full bg-gold-taf flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-maroon-deep" aria-hidden />
                    </span>
                  )}
                </div>

                <p className={clsx(
                  "text-[10px] font-semibold tracking-widest uppercase mb-1",
                  selected === id ? "text-gold-taf/70" : "text-neutral-400"
                )}>
                  {label}
                </p>

                <div className="mb-3">
                  <span className={clsx(
                    "font-display font-black text-3xl",
                    selected === id ? "text-white" : "text-maroon-deep"
                  )}>
                    KES {amountKES.toLocaleString()}
                  </span>
                  <span className={clsx(
                    "text-sm ml-2 font-light",
                    selected === id ? "text-white/50" : "text-neutral-400"
                  )}>
                    ≈ USD {amountUSD}
                    {frequency === "monthly" && "/mo"}
                  </span>
                </div>

                <p className={clsx(
                  "text-sm font-semibold mb-2",
                  selected === id ? "text-gold-taf" : "text-maroon"
                )}>
                  {impact}
                </p>
                <p className={clsx(
                  "text-xs leading-relaxed font-light",
                  selected === id ? "text-white/60" : "text-neutral-500"
                )}>
                  {impactDetail}
                </p>
              </button>
            </FadeUp>
          ))}
        </div>

        {selectedLevel && (
          <FadeUp delay={200}>
            <div className="mt-10 bg-maroon-deep rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-2">
                  Your selected gift
                </p>
                <p className="font-display font-black text-white text-2xl">
                  KES {selectedLevel.amountKES.toLocaleString()}
                  {frequency === "monthly" && (
                    <span className="text-base font-normal text-white/60 ml-2">/ month</span>
                  )}
                </p>
                <p className="text-sky-taf text-sm mt-1">
                  {frequency === "monthly" ? "Recurring monthly — " : "One-time — "}
                  {selectedLevel.impact}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <Button href="#mpesa" variant="gold" className="text-base px-8 py-4">
                  Give via M-Pesa
                </Button>
                <Button href="#international" variant="outline-sky">
                  Pay by Card
                </Button>
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
