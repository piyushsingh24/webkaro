"use client";

import { Laptop, Palette, Rocket, Plug, ShieldCheck, Cloud, Zap, Globe, LucideIcon } from "lucide-react";

const IconMap: Record<string, LucideIcon> = {
  Laptop,
  Palette,
  Rocket,
  Plug,
  ShieldCheck,
  Cloud,
  Zap,
  Globe
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = IconMap[name] || Globe;
  return <Icon className={className} />;
}
