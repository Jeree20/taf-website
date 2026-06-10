import Link from "next/link";
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    primary: "0733 441 983",
    secondary: "+254 733 441 983 (international)",
    href: "tel:+254733441983",
    whatsapp: "https://wa.me/254733441983",
    accentColor: "bg-green-500",
    description: "Fastest response. Available Mon–Sat, 8am–6pm EAT.",
  },
  {
    icon: MapPin,
    label: "Physical Address",
    primary: "Kayole Soweto",
    secondary: "Nairobi, Kenya · 1242 00100",
    href: "https://maps.google.com/?q=-1.23931,36.81621",
    accentColor: "bg-maroon",
    description: "Home of Transformation · GPS: -1.23931, 36.81621",
  },
  {
    icon: Facebook,
    label: "Facebook",
    primary: "TumainiAfricanFoundation",
    secondary: "facebook.com/TumainiAfricanFoundation",
    href: "https://facebook.com/TumainiAfricanFoundation",
    accentColor: "bg-sky-dark",
    description: "Follow for program updates, match days, and community news.",
  },
  {
    icon: Clock,
    label: "Office Hours",
    primary: "Mon – Fri: 8:00am – 5:00pm",
    secondary: "Saturday: 9:00am – 1:00pm",
    href: null,
    accentColor: "bg-gold-dark",
    description: "Sunday: Closed · Public holidays: varies · EAT (UTC+3)",
  },
];

export function ContactDetails() {
  return (
    <section
      className="bg-cream py-16 lg:py-20 border-b border-cream-dark"
      aria-labelledby="contact-details-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <p
            id="contact-details-heading"
            className="text-xs font-semibold tracking-widest uppercase text-maroon mb-8 text-center"
          >
            Ways to Reach Us
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_ITEMS.map(({ icon: Icon, label, primary, secondary, href, whatsapp, accentColor, description }, i) => (
            <FadeUp key={label} delay={i * 65}>
              <article className="bg-white border border-cream-dark rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 ${accentColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400 mb-0.5">{label}</p>
                    {href ? (
                      <Link
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-display font-bold text-maroon-deep text-base hover:text-maroon transition-colors focus-visible:outline-none focus-visible:underline leading-tight block"
                      >
                        {primary}
                      </Link>
                    ) : (
                      <p className="font-display font-bold text-maroon-deep text-base leading-tight">{primary}</p>
                    )}
                    <p className="text-neutral-500 text-xs mt-0.5">{secondary}</p>
                  </div>
                </div>

                <p className="text-neutral-500 text-xs leading-relaxed font-light flex-1 mb-4">{description}</p>

                {whatsapp && (
                  <Link
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-green-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 self-start"
                    aria-label="Open WhatsApp chat with TAF"
                  >
                    <MessageCircle size={13} aria-hidden />
                    WhatsApp Us
                  </Link>
                )}
              </article>
            </FadeUp>
          ))}
        </div>

        {/* Quick action strip */}
        <FadeUp delay={200}>
          <div className="mt-8 bg-maroon-deep rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5 flex-wrap">
            <div>
              <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-1">Need an Urgent Response?</p>
              <p className="text-white text-sm font-light">
                For urgent matters, WhatsApp or call{" "}
                <Link href="tel:+254733441983" className="text-sky-taf font-semibold hover:underline focus-visible:outline-none focus-visible:underline">
                  0733 441 983
                </Link>{" "}
                directly. We aim to respond within the same business day.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 flex-wrap">
              <Link
                href="tel:+254733441983"
                className="inline-flex items-center gap-2 bg-gold-taf text-maroon-deep font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
              >
                <Phone size={15} aria-hidden /> Call Now
              </Link>
              <Link
                href="https://wa.me/254733441983"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="WhatsApp TAF — opens in new tab"
              >
                <MessageCircle size={15} aria-hidden /> WhatsApp
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
