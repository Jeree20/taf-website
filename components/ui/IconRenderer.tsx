import * as LucideIcons from "lucide-react";
import { ComponentType } from "react";

interface IconRendererProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function IconRenderer({
  name,
  size = 24,
  className = "",
  strokeWidth,
}: IconRendererProps) {
  const Icon = (LucideIcons as unknown as Record<string, ComponentType<any>>)[name];

  if (!Icon) {
    console.warn(`Missing icon: ${name}`);
    return null;
  }

  return (
    <Icon
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
