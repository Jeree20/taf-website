import { FadeUp } from "@/components/ui/FadeUp";
import { IconRenderer } from "@/components/ui/IconRenderer";

const methods = [
  {
    icon: "Smartphone",
    title: "M-Pesa",
    desc: "Instant donation via Safaricom M-Pesa Paybill — the easiest way for Kenyan supporters to give.",
    badge: "Most Popular",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: "CreditCard",
    title: "Card Payment",
    desc: "Visa, Mastercard, and international cards accepted for diaspora and global supporters.",
    badge: "International",
    badgeColor: "bg-sky-pale text-sky-dark",
  },
  {
    icon: "Building2",
    title: "Bank Transfer",
    desc: "Direct bank transfer for individuals, organisations, and corporate donors.",
    badge: "Organisations",
    badgeColor: "bg-gold-pale text-gold-dark",
  },
  {
    icon: "🔁",
    title: "Monthly Giving",
    desc: "Set up a recurring monthly gift and become a sustained partner in Kayole's transformation.",
    badge: "High Impact",
    badgeColor: "bg-maroon/10 text-maroon",
  },
];

export function DonateIntro() {
  return (
    <section className="bg-cream py-14 border-b border-cream-dark" aria-label="Donation methods overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-8">
            Four ways to give
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map(({ icon, title, desc, badge, badgeColor }) => (
              <div
                key={title}
                className="bg-white border border-cream-dark rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-3xl block mb-3" aria-hidden><IconRenderer name={icon} size={32} /></span>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-display font-bold text-maroon-deep text-lg">{title}</h3>
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${badgeColor}`}>
                    {badge}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
