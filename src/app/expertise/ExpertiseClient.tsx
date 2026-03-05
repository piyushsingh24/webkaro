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
    <div className="max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6"
      >
        Our Capabilities
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-8xl font-black text-foreground mb-10 font-outfit leading-[1.1]"
      >
        Our <span className="text-gradient">Expertise.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-2xl text-foreground/60 max-w-3xl mb-24 font-medium leading-relaxed"
      >
        We combine deep technical knowledge with product-thinking to build
        architectures that don't just work today, but scale for the next decade.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-32">
        {expertise.map((exp, idx) => {
          const Icon = icons[exp.icon as keyof typeof icons] || Globe;
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border-border hover:border-primary/50 transition-all group bg-background/50 shadow-premium flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit uppercase tracking-tight">{exp.title}</h3>
              <ul className="space-y-5 mt-auto">
                {exp.items.map((item: string) => (
                  <li key={item} className="text-foreground/50 flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em]">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-glow shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}