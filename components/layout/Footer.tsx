import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const programs = [
  { href: "/football-academy", label: "Football Academy" },
  { href: "/programs/chess", label: "Chess" },
  { href: "/programs/table-tennis", label: "Table Tennis & Darts" },
  { href: "/programs/education", label: "Education & Library" },
  { href: "/programs/mentorship", label: "Mentorship" },
  { href: "/programs/women", label: "Women's Empowerment" },
  { href: "/programs/outreach", label: "Community Outreach" },
];

const organisation = [
  { href: "/about", label: "About TAF" },
  { href: "/gallery", label: "Photo Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  { href: "https://facebook.com/TumainiAfricanFoundation", label: "Facebook", icon: Facebook },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "YouTube", icon: Youtube },
  { href: "https://wa.me/254733441983", label: "WhatsApp", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="bg-[#1a0303]" aria-label="Site footer">

      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-maroon via-gold-taf to-sky-taf" aria-hidden />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit" aria-label="Tumaini African Foundation home">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden border-2 border-gold-taf/50 flex-shrink-0 shadow-lg">
                <Image
                  src="/images/taf-logo.jpg"
                  alt="TAF logo"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm leading-tight group-hover:text-gold-taf transition-colors">
                  Tumaini African Foundation
                </p>
                <p className="text-white/35 text-[10px] tracking-widest uppercase mt-0.5">
                  Community Centre
                </p>
              </div>
            </Link>

            <p className="text-white/42 text-sm leading-relaxed mb-4 max-w-[260px]">
              A registered CBO transforming lives in Kayole Soweto through sport,
              education, and community since our founding.
            </p>

            <p className="text-gold-taf text-sm font-medium italic mb-6">
              &ldquo;We Empower to Empower&rdquo;
            </p>

            <div className="flex gap-2" role="list" aria-label="Social media links">
              {socials.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} — opens in new tab`}
                  className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-white/45 hover:bg-gold-taf hover:text-maroon-deep transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
                >
                  <Icon size={15} aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h2 className="text-white text-[11px] font-bold tracking-[0.12em] uppercase mb-5 pb-3 border-b border-white/8">
              Programs
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {programs.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/45 text-sm hover:text-gold-taf transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h2 className="text-white text-[11px] font-bold tracking-[0.12em] uppercase mb-5 pb-3 border-b border-white/8">
              Organisation
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {organisation.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/45 text-sm hover:text-gold-taf transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — no M-Pesa block here; it lives in the CTA section */}
          <div>
            <h2 className="text-white text-[11px] font-bold tracking-[0.12em] uppercase mb-5 pb-3 border-b border-white/8">
              Get in Touch
            </h2>
            <address className="not-italic flex flex-col gap-5">
              <div className="flex gap-3">
                <MapPin size={15} className="text-sky-taf flex-shrink-0 mt-0.5" aria-hidden />
                <p className="text-white/45 text-sm leading-relaxed">
                  Kayole Soweto, Nairobi<br />
                  1242 00100, Kenya
                </p>
              </div>
              <div className="flex gap-3">
                <Phone size={15} className="text-sky-taf flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <Link href="tel:+254733441983" className="text-white/45 text-sm hover:text-white transition-colors">
                    0733 441 983
                  </Link>
                  <p className="text-white/28 text-[11px] mt-0.5">WhatsApp available</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/22 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Tumaini African Foundation Community Centre &middot; Kayole Soweto, Nairobi
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 bg-gold-taf/8 border border-gold-taf/18 rounded-md px-3 py-1.5 text-gold-taf text-[10px] font-bold tracking-widest uppercase">
              Registered CBO &middot; Kenya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
