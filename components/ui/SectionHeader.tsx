import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeader({ eyebrow, title, titleEm, subtitle, centered = false, light = false, className, id }: SectionHeaderProps) {
  return (
    <div className={clsx(centered && "text-center", className)}>
      {eyebrow && (
        <p className={clsx("text-[11px] font-bold tracking-[0.12em] uppercase mb-4", light ? "text-gold-taf/85" : "text-sky-dark/80")}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={clsx(
          "font-display font-black leading-[1.06] text-balance text-4xl sm:text-5xl",
          light ? "text-white" : "text-maroon-deep"
        )}
      >
        {title}
        {titleEm && (
          <>{" "}<em className={clsx("not-italic", light ? "text-sky-taf" : "text-sky-dark")}>{titleEm}</em></>
        )}
      </h2>
      {subtitle && (
        <p className={clsx("mt-5 text-[1.02rem] leading-relaxed max-w-2xl", centered && "mx-auto", light ? "text-white/72" : "text-maroon-deep/65")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
