"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "Is my donation tax deductible?",
    a: "TAF is a registered Community Based Organisation with the Government of Kenya. For Kenyan donors, please consult your tax advisor regarding deductibility. For international donors, deductibility depends on your country's laws regarding foreign charitable giving. We are happy to provide a formal donation receipt.",
  },
  {
    q: "How do I know my money reaches the community?",
    a: "TAF operates with full financial transparency. We provide annual impact reports, respond to all donor queries, and can arrange calls with Director Antony Njoroge for larger donors. Our 20-year partnership with international organisations like St Mark's Dundela and CMS Ireland is itself a testament to our accountability.",
  },
  {
    q: "Can I donate to a specific program?",
    a: "Absolutely. When paying via M-Pesa, you can add a note to your account reference (e.g. 'TAF-FOOTBALL' or 'TAF-LIBRARY'). For bank transfers or card payments, please contact us first so we can allocate your gift correctly to your chosen program.",
  },
  {
    q: "Can I set up a recurring monthly donation?",
    a: "Yes. For M-Pesa, you can set up a standing order through your bank or simply pay each month using the Paybill details. For international card donors, please contact us and we will set up a recurring arrangement. Monthly donors receive a quarterly impact update.",
  },
  {
    q: "What is the minimum donation amount?",
    a: "There is no minimum. Even KES 100 contributes toward our programs. The M-Pesa system accepts any amount from KES 10 upwards. Every shilling counts and is gratefully received.",
  },
  {
    q: "Can my company or organisation donate?",
    a: "Yes — TAF welcomes corporate donations, CSR partnerships, and grant funding. We can provide a formal partnership agreement, tax documentation, impact reports, and recognition on our website and communications. Please contact Antony Njoroge directly to discuss a corporate giving arrangement.",
  },
  {
    q: "Do you accept in-kind donations (goods, equipment, books)?",
    a: "Yes. We regularly accept books for the library, sports equipment for the Football Academy, and other goods relevant to our programs. Please contact us before sending anything so we can confirm current needs and arrange a handover.",
  },
  {
    q: "How will I receive a donation receipt?",
    a: "M-Pesa sends an automatic SMS confirmation which serves as your receipt. For a formal TAF receipt, WhatsApp or email us with your payment reference and amount. For bank transfers, receipts are issued within 3 business days of funds clearing.",
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
        <span className="font-display font-bold text-maroon-deep text-base leading-snug">
          {q}
        </span>
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

export function DonateFAQ() {
  return (
    <section
      className="bg-cream py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="faq-heading"
            eyebrow="Frequently Asked Questions"
            title="Donor Questions"
            titleEm="Answered"
            subtitle="Everything you need to know before making your gift to Tumaini African Foundation."
            centered
          />
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-12 bg-white border border-cream-dark rounded-2xl px-6 sm:px-8 divide-y-0">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="mt-8 text-center">
            <p className="text-neutral-500 text-sm mb-3">
              Have a question not answered here?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-maroon font-semibold text-sm hover:text-maroon-dark underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon rounded"
            >
              Ask us directly →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
