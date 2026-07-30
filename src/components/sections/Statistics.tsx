"use client";

import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#888888' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
