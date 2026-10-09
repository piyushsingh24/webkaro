"use client";

import { RevealGroup } from "@/components/motion/Reveal";

const stats = [
  { value: "250+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "8M+", label: "Users Impacted" },
  { value: "15+", label: "Experts" },
  { value: "4+", label: "Years" },
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden border-y" style={{ backgroundColor: '#F6F3EE', borderColor: 'rgba(0,0,0,0.06)' }}>
      <div className="content-container py-20 md:py-28">
        <RevealGroup
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
          stagger={0.1}
          y={16}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              data-reveal-item
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#888888' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
