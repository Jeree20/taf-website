import { CreditCard, Building2, Globe } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const methods = [
  {
    id: "card",
    icon: CreditCard,
    title: "Credit / Debit Card",
    subtitle: "Via Pesapal or Flutterwave",
    desc: "Secure international card payments processed through Kenya-based payment gateways. Accepts Visa, Mastercard, and American Express. Instant confirmation.",
    badge: "Recommended",
    badgeColor: "bg-sky-taf text-white",
    detail: [
      "Visa, Mastercard, Amex accepted",
      "USD, EUR, GBP & KES supported",
      "Instant payment confirmation",
      "SSL encrypted & PCI compliant",
    ],
    cta: "Donate by Card",
    ctaHref: "#",
    ctaNote: "Link your payment gateway here",
  },
  {
    id: "bank",
    icon: Building2,
    title: "Bank Transfer",
    subtitle: "Kenya or International SWIFT",
    desc: "Direct bank transfer for larger donations or organisations. Please email us before transferring so we can allocate your gift correctly.",
    badge: "For larger gifts",
    badgeColor: "bg-neutral-200 text-neutral-600",
    detail: [
      "Bank: [Your bank name]",
      "Account Name: Tumaini African Foundation",
      "Account No: [Account number]",
      "SWIFT/BIC: [SWIFT code]",
    ],
    cta: "Request Bank Details",
    ctaHref: "/contact",
    ctaNote: "Email us for full wire transfer details",
  },
  {
    id: "diaspora",
    icon: Globe,
    title: "Diaspora Giving",
    subtitle: "Send Money from Abroad",
    desc: "Kenyan diaspora in the UK, US, Canada, Europe, and beyond can send funds via Sendwave, WorldRemit, or Wise directly to our M-Pesa Paybill or bank account.",
    badge: "Kenyan diaspora",
    badgeColor: "bg-gold-taf/20 text-gold-dark border border-gold-taf/30",
    detail: [
      "Sendwave — send to M-Pesa",
      "WorldRemit — bank or M-Pesa",
      "Wise — bank transfer",
      "Use Paybill: 123456 / TAF-DONATE",
    ],
    cta: "Learn More",
    ctaHref: "/contact",
    ctaNote: "Contact us for help with diaspora giving",
  },
];

export function DonateInternational() {
  return (
    <section
      id="international"
      className="bg-cream py-20 lg:py-28 scroll-mt-[70px]"
      aria-labelledby="international-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionHeader
            id="international-heading"
            eyebrow="International & Card Payments"
            title="Give from Anywhere"
            titleEm="in the World"
            subtitle="Supporting Kayole Soweto doesn't require being in Kenya. Choose the payment method that works best for you."
          />
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {methods.map(({ id, icon: Icon, title, subtitle, desc, badge, badgeColor, detail, cta, ctaHref, ctaNote }, i) => (
            <FadeUp key={id} delay={i * 80}>
              <article className="bg-white border border-cream-dark rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-maroon/8 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-maroon" aria-hidden />
                  </div>
                  <span className={`text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1 ${badgeColor}`}>
                    {badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-maroon-deep text-xl mb-1">{title}</h3>
                <p className="text-sky-dark text-xs font-semibold tracking-wide uppercase mb-4">{subtitle}</p>
                <p className="text-neutral-600 text-sm leading-relaxed font-light mb-5 flex-1">{desc}</p>

                <ul className="flex flex-col gap-2 mb-6 border-t border-cream-dark pt-5" role="list" aria-label={`${title} details`}>
                  {detail.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-taf flex-shrink-0 mt-1.5" aria-hidden />
                      <span className="text-neutral-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <a
                    href={ctaHref}
                    className="block w-full text-center bg-maroon-deep text-white font-semibold text-sm py-3 px-6 rounded-xl hover:bg-maroon transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 mb-2"
                  >
                    {cta}
                  </a>
                  <p className="text-center text-neutral-400 text-xs">{ctaNote}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
