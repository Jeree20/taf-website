"use client";

import { useState, useMemo } from "react";
import clsx from "clsx";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconRenderer } from "@/components/ui/IconRenderer";

const PROGRAM_IMPACTS = [
  {
    id: "football",
    label: "Football Academy",
    icon: "Trophy",
    costPerUnit: 3000,
    unit: "player kitted for a season",
    unitPlural: "players kitted for a season",
  },
  {
    id: "feeding",
    label: "Feeding Program",
    icon: "UtensilsCrossed",
    costPerUnit: 1500,
    unit: "child fed for a month",
    unitPlural: "children fed for a month",
  },
  {
    id: "library",
    label: "Library",
    icon: "BookOpen",
    costPerUnit: 800,
    unit: "book added to the library",
    unitPlural: "books added to the library",
  },
  {
    id: "mentorship",
    label: "Girl Mentorship",
    icon: "Star",
    costPerUnit: 5000,
    unit: "girl mentored for a month",
    unitPlural: "girls mentored for a month",
  },
  {
    id: "women",
    label: "Women's Program",
    icon: "Users",
    costPerUnit: 2000,
    unit: "woman supported for a month",
    unitPlural: "women supported for a month",
  },
  {
    id: "outreach",
    label: "Community Outreach",
    icon: "Globe",
    costPerUnit: 500,
    unit: "family reached through outreach",
    unitPlural: "families reached through outreach",
  },
];

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

export function DonateImpactCalculator() {
  const [amount, setAmount] = useState(5000);
  const [customInput, setCustomInput] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("football");
  const [isCustom, setIsCustom] = useState(false);

  const effectiveAmount = isCustom ? (parseInt(customInput) || 0) : amount;

  const program = PROGRAM_IMPACTS.find((p) => p.id === selectedProgram)!;

  const impactCount = useMemo(
    () => (program && effectiveAmount > 0
      ? Math.floor(effectiveAmount / program.costPerUnit)
      : 0),
    [effectiveAmount, program]
  );

  const remainder = useMemo(
    () => (program && effectiveAmount > 0
      ? effectiveAmount % program.costPerUnit
      : 0),
    [effectiveAmount, program]
  );

  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="calculator-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="calculator-heading"
            eyebrow="Impact Calculator"
            title="See What Your Gift"
            titleEm="Will Do"
            subtitle="Choose an amount and a program to see exactly what your donation achieves in Kayole Soweto."
            centered
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-12 bg-cream border border-cream-dark rounded-3xl p-6 sm:p-8">

            {/* Amount selector */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4 block">
                1. Choose an amount (KES)
              </legend>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => { setAmount(preset); setIsCustom(false); setCustomInput(""); }}
                    aria-pressed={!isCustom && amount === preset}
                    className={clsx(
                      "py-3 rounded-xl text-sm font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-1",
                      !isCustom && amount === preset
                        ? "bg-maroon text-white shadow-md shadow-maroon/20"
                        : "bg-white border border-cream-dark text-neutral-600 hover:border-maroon/30 hover:text-maroon"
                    )}
                  >
                    {preset.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCustom(true)}
                  aria-pressed={isCustom}
                  className={clsx(
                    "text-sm font-semibold px-4 py-2 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon",
                    isCustom ? "bg-maroon/10 border-maroon/30 text-maroon" : "border-cream-dark text-neutral-400 hover:border-neutral-300"
                  )}
                >
                  Custom
                </button>
                {isCustom && (
                  <div className="flex-1 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-semibold text-sm">KES</span>
                    <input
                      type="number"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Enter amount"
                      min={0}
                      aria-label="Custom donation amount in Kenyan Shillings"
                      className="w-full bg-white border border-cream-dark rounded-xl pl-14 pr-4 py-3 text-sm font-semibold text-maroon-deep focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </fieldset>

            <div className="my-6 border-t border-cream-dark" />

            {/* Program selector */}
            <fieldset>
              <legend className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4 block">
                2. Choose a program
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PROGRAM_IMPACTS.map(({ id, label, icon }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedProgram(id)}
                    aria-pressed={selectedProgram === id}
                    className={clsx(
                      "flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-1",
                      selectedProgram === id
                        ? "bg-maroon-deep text-white shadow-md"
                        : "bg-white border border-cream-dark text-neutral-600 hover:border-maroon/30 hover:text-maroon"
                    )}
                  >
                    <span aria-hidden><IconRenderer name={icon} size={24} /></span>
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="my-6 border-t border-cream-dark" />

            {/* Result */}
            <div
              className="bg-maroon-deep rounded-2xl p-6 sm:p-8 text-center"
              aria-live="polite"
              aria-atomic="true"
              aria-label="Impact calculation result"
            >
              {effectiveAmount > 0 && impactCount > 0 ? (
                <>
                  <p className="text-white/50 text-sm mb-3">
                    KES {effectiveAmount.toLocaleString()} to {program.label}
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-5xl" aria-hidden><IconRenderer name={program.icon} size={80} /></span>
                    <div className="text-left">
                      <p className="font-display font-black text-white text-5xl sm:text-6xl leading-none">
                        {impactCount}
                      </p>
                      <p className="text-gold-taf text-sm font-semibold mt-1">
                        {impactCount === 1 ? program.unit : program.unitPlural}
                      </p>
                    </div>
                  </div>
                  {remainder > 0 && (
                    <p className="text-white/35 text-xs">
                      + KES {remainder.toLocaleString()} goes toward additional program costs
                    </p>
                  )}
                  <p className="mt-4 text-sky-taf text-sm font-light">
                    That is a real, measurable impact on real lives in Kayole Soweto.
                  </p>
                </>
              ) : (
                <div className="py-4">
                  <p className="text-white/40 text-sm">
                    {effectiveAmount === 0
                      ? "Select or enter an amount above to see your impact."
                      : `KES ${effectiveAmount.toLocaleString()} covers part of ${program.unit.replace("a ", "a ")} (KES ${program.costPerUnit.toLocaleString()} needed).`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
