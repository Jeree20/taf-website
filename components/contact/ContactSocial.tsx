import Link from "next/link";
import { Facebook, Instagram, Youtube, MessageCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    platform: "Facebook",
    handle: "TumainiAfricanFoundation",
    href: "https://facebook.com/TumainiAfricanFoundation",
    desc: "Program updates, match days, community news, and event announcements.",
    accentBg: "bg-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]/30",
    followers: "Primary channel",
  },
  {
    icon: Instagram,
    platform: "Instagram",
    handle: "@tumainiafricafoundation",
    href: "https://instagram.com/tumainiafricafoundation",
    desc: "Photos from programs, community life, and stories of transformation in Kayole.",
    accentBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-300",
    followers: "Visual stories",
  },
  {
    icon: Youtube,
    platform: "YouTube",
    handle: "Tumaini African Foundation",
    href: "https://youtube.com",
    desc: "Documentary footage, match highlights, program overviews, and impact stories.",
    accentBg: "bg-[#FF0000]",
    hoverBorder: "hover:border-red-300",
    followers: "Video content",
  },
  {
    icon: MessageCircle,
    platform: "WhatsApp",
    handle: "+254 733 441 983",
    href: "https://wa.me/254733441983",
    desc: "Direct messaging for urgent enquiries, volunteer queries, and donation help.",
    accentBg: "bg-[#25D366]",
    hoverBorder: "hover:border-green-300",
    followers: "Fastest response",
  },
];

export function ContactSocial() {
  return (
    <section
      className="bg-maroon-deep py-16 lg:py-20"
      aria-labelledby="social-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <FadeUp>
            <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-3">
              Follow Our Journey
            </p>
            <h2
              id="social-heading"
              className="font-display font-black text-white text-4xl sm:text-5xl leading-tight mb-5"
            >
              Stay Connected<br />
              <em className="text-sky-taf not-italic">with Kayole</em>
            </h2>
            <p className="text-white/60 text-base leading-relaxed font-light mb-8 max-w-lg">
              Follow Tumaini African Foundation on social media to see the daily reality of transformation in Kayole Soweto — match days, library sessions, feeding programs, and the faces behind the impact.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gold-taf text-xs font-semibold tracking-widest uppercase mb-4">Facebook Community Group</p>
              <p className="text-white/70 text-sm leading-relaxed font-light mb-4">
                Join the TAF Kenya Facebook group for direct community discussion, volunteer coordination, and real-time updates from Kayole Soweto.
              </p>
              <Link
                href="https://facebook.com/groups/tafkenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep group"
                aria-label="Join the TAF Kenya Facebook group — opens in new tab"
              >
                <Facebook size={16} aria-hidden />
                Join TAF Kenya Group
                <ArrowRight size={14} aria-hidden className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, platform, handle, href, desc, accentBg, hoverBorder, followers }) => (
                <Link
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block bg-white/5 border border-white/10 ${hoverBorder} rounded-2xl p-5 hover:bg-white/8 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep`}
                  aria-label={`Follow TAF on ${platform} — opens in new tab`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 ${accentBg} rounded-xl flex items-center justify-center`} aria-hidden>
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-[10px] text-white/30 font-medium">{followers}</span>
                  </div>
                  <p className="font-display font-bold text-white text-base mb-0.5">{platform}</p>
                  <p className="text-sky-taf/80 text-xs mb-3 font-mono">{handle}</p>
                  <p className="text-white/45 text-xs leading-relaxed font-light">{desc}</p>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
