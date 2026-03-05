"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Zap, Cpu, Layers, Rocket, Building2 } from "lucide-react";

const clientLogos = [
  { name: "FinEdge Capital", icon: ShieldCheck, color: "text-emerald-500" },
  { name: "NextGen SaaS", icon: Cpu, color: "text-blue-500" },
  { name: "UrbanCart", icon: Globe, color: "text-purple-500" },
  { name: "MedicoCare Network", icon: ShieldCheck, color: "text-red-500" },
  { name: "EduBridge Academy", icon: Layers, color: "text-indigo-500" },
  { name: "LaunchPad Labs", icon: Rocket, color: "text-amber-500" },
  { name: "RetailHive Pvt Ltd", icon: Building2, color: "text-cyan-500" },
  { name: "AI & SaaS Products", icon: Zap, color: "text-orange-500" },
];

export default function TrustSection() {
  return (
    <section className="pt-24 pb-28 px-6 md:px-16 bg-background transition-colors duration-500 relative border-t border-border/40 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h3 className="h3 text-muted-foreground uppercase tracking-[0.2em] md:tracking-[0.3em]">
            Trusted by 40+ Growing Brands Worldwide
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-500">
          
          {clientLogos.map((client) => (
            <motion.div
              key={client.name}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 md:gap-3 transition-all cursor-pointer group"
            >
              <client.icon
                className={`w-6 h-6 md:w-8 md:h-8 ${client.color} transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(var(--primary),0.3)]`}
              />
              <span className="text-lg md:text-2xl font-black text-foreground group-hover:text-primary dark:text-white/80 dark:group-hover:text-white tracking-tighter transition-colors duration-300">
                {client.name}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}