import Link from "next/link";
import clsx from "clsx";
import { type ReactNode } from "react";

type Variant = "gold" | "outline-sky" | "dark" | "outline-dark" | "sky" | "outline-white";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}

const variants: Record<Variant, string> = {
  gold:          "bg-gold-taf text-maroon-deep hover:bg-gold-dark shadow-md shadow-gold-taf/20 focus-visible:ring-gold-taf",
  "outline-sky": "border-2 border-sky-taf text-sky-taf hover:bg-sky-taf/10 focus-visible:ring-sky-taf",
  dark:          "bg-maroon-deep text-white hover:bg-maroon shadow-md focus-visible:ring-maroon",
  "outline-dark":"border-2 border-maroon-deep/30 text-maroon-deep hover:border-maroon-deep hover:bg-maroon-deep/5 focus-visible:ring-maroon",
  sky:           "bg-sky-taf text-white hover:bg-sky-dark shadow-md shadow-sky-taf/20 focus-visible:ring-sky-taf",
  "outline-white":"border-2 border-white/40 text-white hover:bg-white/12 hover:border-white/60 focus-visible:ring-white",
};

export function Button({ href, onClick, variant = "gold", children, className, external, "aria-label": ariaLabel }: ButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0";
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </Link>
    );
  }
  return <button onClick={onClick} className={classes} aria-label={ariaLabel}>{children}</button>;
}
