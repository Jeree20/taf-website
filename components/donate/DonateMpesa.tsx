"use client";

import { useState } from "react";
import { Check, Copy, Smartphone } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PAYBILL = "123456";
const ACCOUNT = "TAF-DONATE";
const PHONE_DISPLAY = "0733 441 983";

const steps = [
  {
    num: "01",
    title: "Open M-Pesa on your phone",
    desc: "Go to the M-Pesa menu on your Safaricom SIM. Select \"Lipa na M-Pesa\".",
  },
  {
    num: "02",
    title: "Select Pay Bill",
    desc: "Choose \"Pay Bill\" from the Lipa na M-Pesa options.",
  },
  {
    num: "03",
    title: "Enter Business Number",
    desc: `Enter the TAF Paybill number: ${PAYBILL}. Press OK to confirm.`,
    highlight: PAYBILL,
  },
  {
    num: "04",
    title: "Enter Account Number",
    desc: `Enter the account number: ${ACCOUNT}. You can also add your name for records.`,
    highlight: ACCOUNT,
  },
  {
    num: "05",
    title: "Enter Amount",
    desc: "Type the amount you wish to donate in Kenyan Shillings. Minimum KES 10.",
  },
  {
    num: "06",
    title: "Enter PIN & Confirm",
    desc: "Enter your M-Pesa PIN, review the details, and press OK. You'll receive a confirmation SMS.",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
    >
      {copied
        ? <Check size={14} className="text-gold-taf" aria-hidden />
        : <Copy size={14} className="text-white/60" aria-hidden />
      }
    </button>
  );
}

export function DonateMpesa() {
  return (
    <section
      id="mpesa"
      className="bg-maroon-deep py-20 lg:py-28 relative overflow-hidden scroll-mt-[70px]"
      aria-labelledby="mpesa-heading"
    >
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" aria-hidden />
      <p className="absolute top-1/2 right-0 -translate-y-1/2 font-display font-black text-[18vw] text-white/[0.025] select-none pointer-events-none leading-none pr-4" aria-hidden>
        MPESA
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — details */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gold-taf/15 border border-gold-taf/25 rounded-xl flex items-center justify-center">
                <Smartphone size={20} className="text-gold-taf" aria-hidden />
              </div>
              <SectionHeader
                id="mpesa-heading"
                eyebrow="M-Pesa Paybill"
                title=""
                light
              />
            </div>

            <h2 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight mb-6">
              Donate Instantly<br />
              <em className="text-sky-taf not-italic">via M-Pesa</em>
            </h2>

            <p className="text-white/60 text-base leading-relaxed font-light mb-8">
              The fastest, most direct way to support TAF for Kenyan donors.
              Your M-Pesa payment reaches us immediately and goes straight into
              our active programs in Kayole Soweto.
            </p>

            {/* Paybill details card */}
            <div className="bg-white/6 border border-white/12 rounded-2xl p-6 mb-6" aria-label="M-Pesa payment details">
              <p className="text-white/35 text-[10px] font-semibold tracking-widest uppercase mb-5">
                Payment Details
              </p>

              <dl className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 bg-white/5 rounded-xl px-5 py-4">
                  <div>
                    <dt className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Paybill Number</dt>
                    <dd className="font-display font-black text-gold-taf text-3xl tracking-wide">{PAYBILL}</dd>
                  </div>
                  <CopyButton text={PAYBILL} />
                </div>

                <div className="flex items-center justify-between gap-4 bg-white/5 rounded-xl px-5 py-4">
                  <div>
                    <dt className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Account Number</dt>
                    <dd className="font-display font-black text-white text-2xl">{ACCOUNT}</dd>
                  </div>
                  <CopyButton text={ACCOUNT} />
                </div>

                <div className="flex items-center justify-between gap-4 bg-white/5 rounded-xl px-5 py-4">
                  <div>
                    <dt className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Organisation Name</dt>
                    <dd className="text-white text-base font-semibold">Tumaini African Foundation</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="bg-sky-taf/10 border border-sky-taf/20 rounded-xl px-5 py-4">
              <p className="text-sky-taf text-xs font-semibold mb-1">Need help? Call us directly</p>
              <a
                href="tel:+254733441983"
                className="text-white font-semibold text-lg hover:text-gold-taf transition-colors focus-visible:outline-none focus-visible:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </FadeUp>

          {/* Right — step-by-step */}
          <FadeUp delay={150}>
            <p className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-6">
              How to Pay — Step by Step
            </p>
            <ol className="flex flex-col gap-3" aria-label="M-Pesa payment instructions">
              {steps.map(({ num, title, desc, highlight }) => (
                <li key={num} className="flex items-start gap-4">
                  <span
                    className="font-display font-black text-gold-taf text-xl w-8 flex-shrink-0 leading-none mt-0.5"
                    aria-hidden
                  >
                    {num}
                  </span>
                  <div className="bg-white/5 border border-white/8 rounded-xl px-5 py-4 flex-1">
                    <p className="font-semibold text-white text-sm mb-1">{title}</p>
                    <p className="text-white/55 text-sm leading-relaxed font-light">
                      {desc}
                    </p>
                    {highlight && (
                      <div className="mt-2 inline-flex items-center gap-2 bg-gold-taf/15 border border-gold-taf/30 rounded-lg px-3 py-1.5">
                        <code className="text-gold-taf font-mono font-bold text-sm">{highlight}</code>
                        <CopyButton text={highlight} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex items-start gap-3 bg-gold-taf/10 border border-gold-taf/20 rounded-xl p-4">
              <span className="text-xl flex-shrink-0" aria-hidden>✅</span>
              <p className="text-white/65 text-sm leading-relaxed font-light">
                After payment you will receive an M-Pesa confirmation SMS. Please screenshot it as your donation receipt. To request a formal receipt, WhatsApp us at {PHONE_DISPLAY}.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
