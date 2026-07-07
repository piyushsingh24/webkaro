"use client";

import { motion } from "framer-motion";
import { Users, Code, Zap, Globe, Sparkles, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: "40+" },
  { label: "Avg. Delivery", value: "3-5 Weeks" },
  { label: "Google Rating", value: "5.0" },
  { label: "Countries Served", value: "8+" }
];

const features = [
  {
    title: "Our Approach",
    icon: Sparkles,
    description: "We are not a traditional agency. We are a decentralized collective of handpicked engineers and designers who actually write code."
  },
  {
    title: "Our Stack",
    icon: Code,
    description: "Next.js, Tailwind, Node.js, MongoDB, and AWS. We focus on the most performant layer of the modern web stack."
  },
  {
    title: "Our Promise",
    icon: ShieldCheck,
    description: "Transparent communication, zero technical debt, and products that deliver measurable ROI from day one."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="h2 mb-8">We&apos;re not an agency. We&apos;re a collective.</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Based in Delhi but operating globally, Webkaro is a community-driven development collective engineering high-performance digital experiences for the modern web. We bypass the bloat of traditional agencies to deliver raw engineering power directly to startups.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex gap-6 hover:bg-white/[0.04] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
