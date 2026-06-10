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
  organisation: string;
  enquiryType: string;
  subject: string;
  message: string;
  preferredContact: string;
  consent: boolean;
}

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organisation: "",
  enquiryType: "",
  subject: "",
  message: "",
  preferredContact: "",
  consent: false,
};

const ENQUIRY_TYPES = [
  "General enquiry",
  "Donation / financial support",
  "Volunteering",
  "Partnership / sponsorship",
  "Media & press",
  "Football Academy",
  "Library & education",
  "Women's empowerment program",
  "Community outreach",
  "Feedback or complaint",
  "Other",
];

const INPUT_BASE =
  "w-full bg-cream border border-cream-dark rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent transition-colors hover:border-neutral-300";

function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold tracking-wide text-neutral-500 mb-1.5">
        {label}
        {required && <span className="text-maroon ml-0.5" aria-label="required">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-neutral-400 font-light">{hint}</p>}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const set =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.enquiryType) newErrors.enquiryType = "Please select an enquiry type";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Please write at least 20 characters";
    if (!form.consent) newErrors.consent = "Please accept to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Replace with your form endpoint — Formspree, Netlify Forms, custom API route, etc.
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section
      id="message"
      className="bg-white py-20 lg:py-28 scroll-mt-[70px]"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* Sidebar */}
          <FadeUp className="lg:col-span-2">
            <SectionHeader
              id="contact-form-heading"
              eyebrow="Send a Message"
              title="We Read"
              titleEm="Every Message"
              subtitle="Use this form for general enquiries, partnership requests, media, or anything else. We respond to every message within 3 business days."
            />

            <div className="mt-10 flex flex-col gap-4">
              <div className="bg-cream border border-cream-dark rounded-2xl p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">Response Times</p>
                <dl className="flex flex-col gap-3">
                  {[
                    { type: "General enquiries", time: "Within 3 business days" },
                    { type: "Donation questions", time: "Within 1 business day" },
                    { type: "Volunteer applications", time: "Within 3 business days" },
                    { type: "Partnership enquiries", time: "Within 5 business days" },
                    { type: "Media / press", time: "Within 2 business days" },
                  ].map(({ type, time }) => (
                    <div key={type} className="flex items-center justify-between gap-3">
                      <dt className="text-sm text-neutral-600 font-light">{type}</dt>
                      <dd className="text-xs text-sky-dark font-semibold shrink-0">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-maroon-deep rounded-2xl p-6">
                <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-3">Director</p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-maroon flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-black text-white text-base">AN</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-base">Antony Njoroge</p>
                    <p className="text-white/50 text-xs">Founder & Director, TAF</p>
                  </div>
                </div>
                <p className="text-white/55 text-xs leading-relaxed font-light">
                  For partnership proposals, major donations, or media requests, Antony responds personally to all enquiries directed to the organisation.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={120} className="lg:col-span-3">
            {submitted ? (
              <div
                className="bg-cream border-2 border-green-200 rounded-3xl p-12 text-center"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" aria-hidden />
                <h3 className="font-display font-black text-maroon-deep text-2xl mb-3">Message Sent!</h3>
                <p className="text-neutral-600 text-base leading-relaxed font-light max-w-md mx-auto mb-6">
                  Thank you for getting in touch with Tumaini African Foundation. We will review your message and respond within{" "}
                  <strong className="text-maroon">3 business days</strong>.
                </p>
                <p className="text-neutral-400 text-sm">
                  For urgent matters, call or WhatsApp{" "}
                  <a href="tel:+254733441983" className="text-maroon font-semibold hover:underline">
                    0733 441 983
                  </a>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="bg-cream border border-cream-dark rounded-3xl p-6 sm:p-8 space-y-6"
              >
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="firstName" label="First Name" required>
                    <input
                      id="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={set("firstName")}
                      autoComplete="given-name"
                      placeholder="Jane"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      className={clsx(INPUT_BASE, errors.firstName && "border-red-400 focus:ring-red-400")}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" role="alert" className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                    )}
                  </Field>
                  <Field id="lastName" label="Last Name" required>
                    <input
                      id="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={set("lastName")}
                      autoComplete="family-name"
                      placeholder="Wanjiku"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      className={clsx(INPUT_BASE, errors.lastName && "border-red-400 focus:ring-red-400")}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" role="alert" className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                    )}
                  </Field>
                </div>

                {/* Email + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="email" label="Email Address" required>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      autoComplete="email"
                      placeholder="jane@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={clsx(INPUT_BASE, errors.email && "border-red-400 focus:ring-red-400")}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </Field>
                  <Field id="phone" label="Phone / WhatsApp" hint="Optional — for faster follow-up">
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      autoComplete="tel"
                      placeholder="+254 7XX XXX XXX"
                      className={INPUT_BASE}
                    />
                  </Field>
                </div>

                {/* Organisation + enquiry type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="organisation" label="Organisation / Company" hint="Optional — leave blank if individual">
                    <input
                      id="organisation"
                      type="text"
                      value={form.organisation}
                      onChange={set("organisation")}
                      placeholder="Your organisation name"
                      className={INPUT_BASE}
                    />
                  </Field>
                  <Field id="enquiryType" label="Enquiry Type" required>
                    <select
                      id="enquiryType"
                      value={form.enquiryType}
                      onChange={set("enquiryType")}
                      aria-invalid={!!errors.enquiryType}
                      aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
                      className={clsx(INPUT_BASE, "cursor-pointer", errors.enquiryType && "border-red-400 focus:ring-red-400")}
                    >
                      <option value="">Select enquiry type</option>
                      {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    {errors.enquiryType && (
                      <p id="enquiryType-error" role="alert" className="mt-1 text-xs text-red-600">{errors.enquiryType}</p>
                    )}
                  </Field>
                </div>

                {/* Subject */}
                <Field id="subject" label="Subject">
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={set("subject")}
                    placeholder="Brief subject line"
                    className={INPUT_BASE}
                  />
                </Field>

                {/* Message */}
                <Field id="message" label="Your Message" required>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    placeholder="Tell us how we can help, what you'd like to know, or what you'd like to discuss with the TAF team..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : "message-hint"}
                    className={clsx(INPUT_BASE, "resize-none", errors.message && "border-red-400 focus:ring-red-400")}
                  />
                  {errors.message ? (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message}</p>
                  ) : (
                    <p id="message-hint" className="mt-1 text-xs text-neutral-400">Minimum 20 characters</p>
                  )}
                </Field>

                {/* Preferred contact method */}
                <Field id="preferredContact" label="Preferred Response Method">
                  <select
                    id="preferredContact"
                    value={form.preferredContact}
                    onChange={set("preferredContact")}
                    className={clsx(INPUT_BASE, "cursor-pointer")}
                  >
                    <option value="">No preference</option>
                    <option>Email</option>
                    <option>Phone call</option>
                    <option>WhatsApp</option>
                  </select>
                </Field>

                {/* Consent */}
                <div className={clsx(
                  "rounded-xl p-4 border",
                  errors.consent ? "bg-red-50 border-red-200" : "bg-white border-cream-dark"
                )}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={set("consent")}
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? "consent-error" : undefined}
                      className="mt-0.5 w-4 h-4 accent-maroon flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-sm text-neutral-600 leading-relaxed font-light">
                      I agree that TAF may store and use my contact details to respond to this enquiry. I understand my data will not be shared with third parties.
                      <span className="text-maroon ml-0.5">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="mt-2 text-xs text-red-600 ml-7">{errors.consent}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={clsx(
                    "w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-base tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-maroon focus-visible:ring-offset-2",
                    submitting
                      ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                      : "bg-maroon text-white hover:bg-maroon-dark shadow-lg shadow-maroon/20 hover:-translate-y-0.5"
                  )}
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={17} aria-hidden />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-400">
                  Fields marked <span className="text-maroon font-semibold">*</span> are required · We respond within 3 business days
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
