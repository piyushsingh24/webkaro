"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, Lock, Globe, FileText, Scale } from "lucide-react";

const standards = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    status: "Compliant Environment",
    description: "Our infrastructure and development processes adhere to SOC 2 security, availability, and confidentiality standards.",
  },
  {
    icon: Lock,
    title: "GDPR Ready",
    status: "Data Processing Protected",
    description: "We help global clients maintain GDPR compliance through robust data processing agreements and privacy-by-design principles.",
  },
  {
    icon: CheckCircle,
    title: "ISO 27001",
    status: "Security Managed",
    description: "Our collective follows information security management system (ISMS) best practices for every project we undertake.",
  },
];

export default function ComplianceClient() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            TRUST & INTEGRITY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-8 font-outfit"
          >
            Compliance & <br />
            <span className="text-gradient">Governance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/80 dark:text-foreground/70 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-outfit"
          >
            Webkaro integrates rigorous compliance standards into every line of code.
            We ensure your digital products meet global regulatory requirements.
          </motion.p>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {standards.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3.5rem] border-border dark:border-white/10 space-y-8 shadow-premium"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold font-outfit text-foreground">{s.title}</h3>
                </div>
                <p className="inline-block px-3 py-1 bg-primary/5 dark:bg-white/5 rounded-full text-[10px] uppercase font-bold text-primary tracking-widest border border-primary/20">
                  {s.status}
                </p>
                <p className="text-foreground/80 dark:text-foreground/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Governance Framework */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[4rem] border-border dark:border-white/5 bg-gradient-to-br from-background/50 to-transparent shadow-premium">
          <h2 className="text-3xl md:text-4xl font-black mb-12 font-outfit text-center text-foreground">Governance Framework</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0 shadow- glow">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Ethics & Integrity</h4>
                <p className="text-foreground/80 dark:text-foreground/60">Our code of conduct ensures all collective members operate with the highest professional ethics and financial transparency.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0 shadow-glow">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Contractual Rigor</h4>
                <p className="text-foreground/80 dark:text-foreground/60">We use clear, iron-clad service level agreements (SLAs) to protect both the client and the collective, ensuring deliverables are always met.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0 shadow-glow">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Regional Compliance</h4>
                <p className="text-foreground/80 dark:text-foreground/60">From Indian IT laws to US data privacy regulations, we adapt our engineering to match the legal landscape of your target market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
