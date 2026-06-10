"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X, ChevronDown, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/programs",
    label: "Programs",
    children: [
      { href: "/programs", label: "All Programs" },
      { href: "/football-academy", label: "Football Academy" },
      { href: "/programs#chess", label: "Chess" },
      { href: "/programs#sports", label: "Table Tennis & Darts" },
      { href: "/programs#education", label: "Education & Library" },
      { href: "/programs#mentorship", label: "Mentorship" },
      { href: "/programs#women", label: "Women's Empowerment" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); setDropdown(null); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      role="banner"
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-maroon-deep shadow-2xl shadow-black/40 border-b border-white/8"
          : "bg-maroon-deep/98 border-b border-white/8"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >

        {/* ── Brand ── */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
          aria-label="Tumaini African Foundation — home"
        >
          <div className="w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-gold-taf/60 flex-shrink-0 shadow-md">
            <Image
              src="/images/taf-logo.jpg"
              alt="TAF logo"
              width={42}
              height={42}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="font-display font-bold text-white text-[13px] tracking-tight group-hover:text-gold-taf transition-colors duration-200">
              Tumaini African Foundation
            </p>
            <p className="text-white/38 text-[10px] tracking-[0.12em] uppercase font-medium">
              Kayole Soweto · Nairobi
            </p>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden lg:flex items-center gap-0" role="list">
          {navLinks.map(({ href, label, children: sub }) => (
            <li key={href} className="relative">
              {sub ? (
                <>
                  <button
                    onMouseEnter={() => setDropdown(label)}
                    onMouseLeave={() => setDropdown(null)}
                    onClick={() => setDropdown(dropdown === label ? null : label)}
                    className={clsx(
                      "flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf",
                      isActive(href) ? "text-gold-taf" : "text-white/65 hover:text-white"
                    )}
                    aria-expanded={dropdown === label}
                    aria-haspopup="menu"
                  >
                    {label}
                    <ChevronDown size={12} aria-hidden className={clsx("transition-transform duration-200 text-white/40", dropdown === label && "rotate-180")} />
                  </button>
                  {dropdown === label && (
                    <div
                      role="menu"
                      onMouseEnter={() => setDropdown(label)}
                      onMouseLeave={() => setDropdown(null)}
                      className="absolute top-full left-0 mt-1.5 w-56 bg-[#1e0404] border border-white/12 rounded-xl shadow-2xl shadow-black/60 overflow-hidden py-1.5"
                    >
                      {sub.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className="block px-4 py-2.5 text-[13px] text-white/55 hover:text-white hover:bg-white/7 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={href}
                  className={clsx(
                    "block px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf",
                    isActive(href) ? "text-gold-taf" : "text-white/65 hover:text-white"
                  )}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* ── CTA + hamburger ── */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center gap-2 bg-gold-taf text-maroon-deep text-[12px] font-bold tracking-wide uppercase px-4 py-2 rounded-md hover:bg-gold-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf focus-visible:ring-offset-2 focus-visible:ring-offset-maroon-deep"
          >
            <Heart size={13} aria-hidden />
            Donate
          </Link>
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md text-white/70 hover:text-white hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-taf"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#200505] border-t border-white/8 max-h-[calc(100vh-68px)] overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <ul className="px-4 py-5 flex flex-col gap-1" role="list">
            {navLinks.map(({ href, label, children: sub }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    "block px-4 py-3 rounded-lg font-medium text-[15px] transition-colors",
                    isActive(href) ? "text-gold-taf bg-white/6" : "text-white/75 hover:text-white hover:bg-white/5"
                  )}
                >
                  {label}
                </Link>
                {sub && (
                  <ul className="ml-4 mt-0.5 border-l border-white/10 pl-4 flex flex-col gap-0.5 pb-1">
                    {sub.slice(1).map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block py-2 text-sm text-white/40 hover:text-white/80 transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-3 pb-1">
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 w-full bg-gold-taf text-maroon-deep text-sm font-bold tracking-wide uppercase px-6 py-3.5 rounded-lg hover:bg-gold-dark transition-colors"
              >
                <Heart size={15} aria-hidden />
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
