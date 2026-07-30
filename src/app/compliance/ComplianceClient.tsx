"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle, Globe } from "lucide-react";

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
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Hero */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Trust & Integrity
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Compliance & Governance
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            Webkaro integrates rigorous compliance standards into every line of code. We ensure your digital products meet global regulatory requirements.
          </p>
        </motion.div>
      </section>

      {/* Standards Grid */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {standards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-soft"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#F4F7F1' }}>
                <item.icon className="w-5 h-5" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {item.title}
              </h3>
              <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: '#2563EB' }}>
                {item.status}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
