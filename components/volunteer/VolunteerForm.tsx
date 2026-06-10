"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import clsx from "clsx";
import { CheckCircle2, Send } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  roleInterest: string;
  availability: string;
  startDate: string;
  duration: string;
  skills: string;
  motivation: string;
  howHeard: string;
  hasWorkedWithChildren: string;
  agreement: boolean;
}

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  roleInterest: "",
  availability: "",
  startDate: "",
  duration: "",
  skills: "",
  motivation: "",
  howHeard: "",
  hasWorkedWithChildren: "",
  agreement: false,
};

const ROLES_OPTIONS = [
  "Football Coach / Assistant",
  "Chess Facilitator",
  "Academic Tutor",
  "Library Assistant",
  "Girl Mentor",
  "Women's Skills Trainer",
  "Social Media & Content Creator",
  "Photographer / Videographer",
  "Grant Writer / Fundraiser",
  "Community Outreach Volunteer",
  "Other (describe in skills field)",
];

const INPUT_BASE =
  "w-full bg-cream border border-cream-dark rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent transition-colors hover:border-neutral-300";
const SELECT_BASE = clsx(INPUT_BASE, "cursor-pointer");
const LABEL_BASE = "block text-xs font-semibold tracking-wide text-neutral-500 mb-1.5";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={LABEL_BASE}>
        {label}
        {required && <span className="text-maroon ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export function VolunteerForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Replace with your form submission endpoint (e.g. Formspree, Netlify Forms, custom API)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section
      id="apply"
      className="bg-cream py-20 lg:py-28 scroll-mt-[70px]"
      aria-labelledby="apply-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="apply-heading"
            eyebrow="Volunteer Application"
            title="Apply to"
            titleEm="Join Our Team"
            subtitle="Complete the form below and our team will be in touch within 3 business days. All fields marked with * are required."
            centered
          />
        </FadeUp>

        <FadeUp delay={100}>
          {submitted ? (
            <div
              className="mt-12 bg-white border-2 border-green-200 rounded-3xl p-12 text-center"
              role="alert"
              aria-live="polite"
            >
              <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" aria-hidden />
              <h3 className="font-display font-black text-maroon-deep text-2xl mb-3">
                Application Received!
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed font-light max-w-md mx-auto mb-6">
                Thank you for applying to volunteer at Tumaini African Foundation. We will review your application and be in touch within 3 business days.
              </p>
              <div className="inline-flex items-center gap-3 bg-sky-pale border border-sky-taf/20 rounded-xl px-5 py-3">
                <span className="text-xl text-maroon-deep" aria-hidden>☏</span>
                <p className="text-sm text-neutral-600">
                  Questions? Call or WhatsApp us:{" "}
                  <a href="tel:+254733441983" className="font-semibold text-maroon hover:underline">
                    0733 441 983
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-12 bg-white border border-cream-dark rounded-3xl p-6 sm:p-10 space-y-8"
              aria-label="Volunteer application form"
            >
              {/* Personal details */}
              <fieldset>
                <legend className="font-display font-bold text-maroon-deep text-xl mb-6 pb-3 border-b border-cream-dark w-full">
                  Personal Details
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First Name" required>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={set("firstName")}
                      required
                      autoComplete="given-name"
                      placeholder="Jane"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="Last Name" required>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={set("lastName")}
                      required
                      autoComplete="family-name"
                      placeholder="Wanjiku"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="Email Address" required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="Phone / WhatsApp">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      autoComplete="tel"
                      placeholder="+254 7XX XXX XXX"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="Current Location" required>
                    <input
                      type="text"
                      value={form.location}
                      onChange={set("location")}
                      required
                      placeholder="Nairobi, Kenya / London, UK"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="How did you hear about TAF?">
                    <select value={form.howHeard} onChange={set("howHeard")} className={SELECT_BASE}>
                      <option value="">Select one</option>
                      <option>Social media</option>
                      <option>Friend or colleague</option>
                      <option>Church / faith community</option>
                      <option>St Mark's Dundela partnership</option>
                      <option>Internet search</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>
              </fieldset>

              {/* Role & availability */}
              <fieldset>
                <legend className="font-display font-bold text-maroon-deep text-xl mb-6 pb-3 border-b border-cream-dark w-full">
                  Role & Availability
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Role of Interest" required>
                    <select
                      value={form.roleInterest}
                      onChange={set("roleInterest")}
                      required
                      className={SELECT_BASE}
                    >
                      <option value="">Select a role</option>
                      {ROLES_OPTIONS.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Weekly Availability" required>
                    <select
                      value={form.availability}
                      onChange={set("availability")}
                      required
                      className={SELECT_BASE}
                    >
                      <option value="">Select hours per week</option>
                      <option>1–2 hours</option>
                      <option>3–5 hours</option>
                      <option>6–10 hours</option>
                      <option>10+ hours</option>
                      <option>Event-based (flexible)</option>
                    </select>
                  </Field>
                  <Field label="Earliest Start Date">
                    <input
                      type="date"
                      value={form.startDate}
                      onChange={set("startDate")}
                      min={new Date().toISOString().split("T")[0]}
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field label="Expected Duration">
                    <select value={form.duration} onChange={set("duration")} className={SELECT_BASE}>
                      <option value="">Select duration</option>
                      <option>1–4 weeks</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>Ongoing (no fixed end)</option>
                    </select>
                  </Field>
                  <Field label="Have you worked with children before?">
                    <select
                      value={form.hasWorkedWithChildren}
                      onChange={set("hasWorkedWithChildren")}
                      className={SELECT_BASE}
                    >
                      <option value="">Select one</option>
                      <option>Yes — professionally</option>
                      <option>Yes — as a volunteer</option>
                      <option>No, but I am willing to complete safeguarding training</option>
                    </select>
                  </Field>
                </div>
              </fieldset>

              {/* Skills & motivation */}
              <fieldset>
                <legend className="font-display font-bold text-maroon-deep text-xl mb-6 pb-3 border-b border-cream-dark w-full">
                  Skills & Motivation
                </legend>
                <div className="flex flex-col gap-5">
                  <Field label="Relevant Skills & Experience" required>
                    <textarea
                      value={form.skills}
                      onChange={set("skills")}
                      required
                      rows={3}
                      placeholder="Briefly describe the skills, qualifications, or experience most relevant to your chosen role..."
                      className={clsx(INPUT_BASE, "resize-none")}
                    />
                  </Field>
                  <Field label="Why do you want to volunteer at TAF?" required>
                    <textarea
                      value={form.motivation}
                      onChange={set("motivation")}
                      required
                      rows={4}
                      placeholder="Tell us what draws you to Tumaini African Foundation and what you hope to contribute to Kayole Soweto..."
                      className={clsx(INPUT_BASE, "resize-none")}
                    />
                  </Field>
                </div>
              </fieldset>

              {/* Agreement */}
              <div className="bg-cream border border-cream-dark rounded-xl p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agreement}
                    onChange={set("agreement")}
                    required
                    className="mt-0.5 w-4 h-4 accent-maroon flex-shrink-0 cursor-pointer"
                    aria-required="true"
                  />
                  <span className="text-sm text-neutral-600 leading-relaxed font-light">
                    I confirm that the information provided is accurate. I understand that all volunteers
                    working with children will be required to complete a safeguarding induction and
                    agree to TAF&apos;s code of conduct.
                    <span className="text-maroon ml-0.5">*</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting || !form.agreement}
                className={clsx(
                  "w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-base tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon focus-visible:ring-offset-2",
                  submitting || !form.agreement
                    ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                    : "bg-maroon text-white hover:bg-maroon-dark shadow-lg shadow-maroon/25 hover:-translate-y-0.5"
                )}
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden />
                    Submitting…
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden />
                    Submit My Application
                  </>
                )}
              </button>

              <p className="text-center text-xs text-neutral-400">
                We respond to all applications within 3 business days. Prefer to call?{" "}
                <a href="tel:+254733441983" className="text-maroon font-semibold hover:underline">
                  0733 441 983
                </a>
              </p>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
