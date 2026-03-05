"use client";

import { motion } from "framer-motion";

export default function CookiePolicyClient({ sections }: { sections: any[] }) {
  return (
    <section className="px-6 mb-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          PREFERENCES & TRANSPARENCY
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-foreground mb-16 font-outfit"
        >
          Cookie <span className="text-gradient">Policy.</span>
        </motion.h1>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold font-outfit text-foreground">{section.title}</h2>
              <p className="text-foreground/80 leading-relaxed text-lg dark:text-foreground/70">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-border">
          <p className="text-foreground/50 text-sm">Last Updated: March 2026</p>
        </div>
      </div>
    </section>
  );
}
