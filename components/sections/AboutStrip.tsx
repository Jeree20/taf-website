import { MapPin, Phone, ShieldCheck, Star } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Registered CBO — Government of Kenya" },
  { icon: Star,        text: "20-Year International Partnership" },
  { icon: MapPin,      text: "Kayole Soweto, Nairobi Eastlands" },
  { icon: Phone,       text: "0733 441 983", href: "tel:+254733441983" },
];

export function AboutStrip() {
  return (
    <div className="bg-sky-dark" role="complementary" aria-label="Quick facts">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2" role="list">
          {items.map(({ icon: Icon, text, href }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon size={13} className="text-white/60 flex-shrink-0" aria-hidden />
              {href ? (
                <a href={href} className="text-white/85 text-xs font-medium hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
                  {text}
                </a>
              ) : (
                <span className="text-white/85 text-xs font-medium">{text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
