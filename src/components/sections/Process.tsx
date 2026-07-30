"use client";

import { motion } from "framer-motion";

const steps = [
  { name: "Discover", description: "Understanding your vision, market, and goals" },
  { name: "Strategy", description: "Architecture planning and technical blueprint" },
  { name: "Design", description: "Crafting the visual language and UX" },
  { name: "Development", description: "Engineering with precision and care" },
  { name: "Testing", description: "Quality assurance and performance tuning" },
  { name: "Launch", description: "Deployment and ongoing partnership" },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#6E8E59' }}>
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Process
          </h2>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }} />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="relative z-10 mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-6 border" style={{ 
                  backgroundColor: i === 3 ? '#6E8E59' : '#FFFFFF',
                  borderColor: 'rgba(0,0,0,0.06)'
                }}>
                  <span className="text-sm font-semibold" style={{ color: i === 3 ? '#FFFFFF' : '#1B1B1B' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {step.name}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
