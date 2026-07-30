"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Eye, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All sensitive data is encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3 protocols.",
  },
  {
    icon: Shield,
    title: "Secure Architecture",
    description: "Our microservices and database layers are isolated within private subnets, accessible only through hardened jump-hosts.",
  },
  {
    icon: ShieldAlert,
    title: "Continuous Monitoring",
    description: "We implement real-time intrusion detection and automated vulnerability scanning at every stage of the CI/CD pipeline.",
  },
  {
    icon: Eye,
    title: "Zero-Trust Policy",
    description: "Every request and interaction within our ecosystem is verified, authenticated, and authorized based on least-privilege access.",
  },
];

export default function SecurityClient() {
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
            Fortress Engineering
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Security First, Always
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            At Webkaro, security isn&apos;t an afterthought—it&apos;s woven into our architectural DNA. We build digital fortresses that protect your business and your users.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, i) => (
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
                <feature.icon className="w-5 h-5" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
