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
    <>
      {/* Hero */}
      <section className="px-6 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            FORTRESS ENGINEERING
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-8 font-outfit"
          >
            Security First, <br />
            <span className="text-gradient">Always.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/80 dark:text-foreground/70 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-outfit"
          >
            At Webkaro, security isn't an afterthought—it's woven into our architectural
            DNA. We build digital fortresses that protect your business and your users.
          </motion.p>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3.5rem] border-border dark:border-white/5 space-y-6 group hover:border-primary/20 transition-all font-outfit shadow-premium"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{f.title}</h3>
              <p className="text-foreground/80 dark:text-foreground/60 text-lg leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Operations */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center space-y-16 font-outfit">
          <h2 className="text-3xl md:text-5xl font-black text-foreground">Our Security Lifecycle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center font-black text-primary border border-border dark:border-white/10">1</div>
              <h4 className="text-xl font-bold text-foreground">Code Audits</h4>
              <p className="text-foreground/60 dark:text-foreground/40 text-sm">Automated and manual peer reviews for every pull request to identify potential injection or logic flaws.</p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center font-black text-primary border border-border dark:border-white/10">2</div>
              <h4 className="text-xl font-bold text-foreground">Penetration Testing</h4>
              <p className="text-foreground/60 dark:text-foreground/40 text-sm">Regular ethical hacking simulations to stress-test our production environments and endpoints.</p>
            </div>
            <div className="space-y-4">
              <div className="w-10 h-10 bg-primary/5 dark:bg-white/5 rounded-full flex items-center justify-center font-black text-primary border border-border dark:border-white/10">3</div>
              <h4 className="text-xl font-bold text-foreground">Incident Response</h4>
              <p className="text-foreground/60 dark:text-foreground/40 text-sm">A dedicated team ready to respond to any security anomaly within minutes, 24/7/365.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
