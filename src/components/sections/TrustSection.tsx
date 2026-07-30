"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Zap, Cpu, Layers, Rocket, Building2 } from "lucide-react";

const clientLogos = [
  { name: "FinEdge Capital", icon: ShieldCheck },
  { name: "NextGen SaaS", icon: Cpu },
  { name: "UrbanCart", icon: Globe },
  { name: "MedicoCare", icon: ShieldCheck },
  { name: "EduBridge", icon: Layers },
  { name: "LaunchPad", icon: Rocket },
  { name: "RetailHive", icon: Building2 },
  { name: "AI Products", icon: Zap },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden border-y" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)' }}>
      <div className="content-container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#888888' }}>
            Trusted by 40+ growing brands worldwide
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-2 md:gap-3 transition-all duration-300 hover:translate-y-[-2px]"
              style={{ color: '#888888' }}
            >
              <client.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#2563EB' }} />
              <span className="text-base md:text-lg font-semibold tracking-tight">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
