"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyClient({ sections }: { sections: any[] }) {
  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Data Protection
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: '#656565' }}>
            How we collect, use, and protect your personal information.
          </p>
        </motion.div>
      </section>

      <section className="content-container pb-20 md:pb-32">
        <div className="max-w-3xl space-y-10">
          {sections.map((section: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 md:p-8 rounded-2xl border"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <h2 className="text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {section.title}
              </h2>
              <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                {section.content}
              </p>
            </motion.div>
          ))}
          <p className="text-xs pt-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)', color: '#888888' }}>
            Last Updated: March 2026
          </p>
        </div>
      </section>
    </div>
  );
}
