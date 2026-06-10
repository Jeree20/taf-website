import clsx from "clsx";

interface TAFLogoProps {
  size?: number;
  className?: string;
}

export function TAFLogo({ size = 44, className }: TAFLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tumaini African Foundation logo"
      role="img"
      className={clsx(className)}
    >
      <circle cx="50" cy="50" r="48" fill="#3AABE0" fillOpacity="0.15" />
      <circle cx="50" cy="27" r="7.5" fill="#1C1C1C" />
      <circle cx="31" cy="34" r="6.5" fill="#1C1C1C" />
      <circle cx="69" cy="34" r="6.5" fill="#1C1C1C" />
      <path d="M50 35 C50 44 50 50 50 57" stroke="#8B1A1A" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M43 38 C38 44 33 45 28 47" stroke="#8B1A1A" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M57 38 C62 44 67 45 72 47" stroke="#8B1A1A" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M31 41 C31 49 31 53 31 57" stroke="#8B1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M69 41 C69 49 69 53 69 57" stroke="#8B1A1A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M27 64 Q50 57 73 64 Q73 75 50 77 Q27 75 27 64Z" fill="#3AABE0" fillOpacity="0.65" />
      <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="900" fill="#8B1A1A" fontFamily="Georgia, serif">TAF</text>
    </svg>
  );
}
