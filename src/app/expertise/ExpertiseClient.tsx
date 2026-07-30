"use client";

import { motion } from "framer-motion";
import { Globe, Database, Cpu, Zap } from "lucide-react";

const icons = {
  Globe,
  Database,
  Zap,
  Cpu
};

export default function ExpertiseClient({ expertise }: { expertise: any[] }) {
  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Header */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Our Capabilities
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Our Expertise
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            We combine deep technical knowledge with product-thinking to build architectures that don&apos;t just work today, but scale for the next decade.
          </p>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertise.map((exp, idx) => {
            const Icon = icons[exp.icon as keyof typeof icons] || Globe;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 md:p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-soft"
                style={{ borderColor: 'rgba(0,0,0,0.06)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F4F7F1' }}>
                  <Icon className="w-6 h-6" style={{ color: '#2563EB' }} />
                </div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {exp.title}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item: string) => (
                    <li key={item} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: '#888888' }}>
                      <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: '#2563EB' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
