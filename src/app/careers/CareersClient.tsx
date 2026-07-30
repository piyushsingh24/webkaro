"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Heart } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    type: "Contract / Remote",
    category: "Engineering",
    compensation: "$80k - $120k",
  },
  {
    title: "Product Designer (UI/UX)",
    type: "Project-based",
    category: "Design",
    compensation: "Competitive Project Fees",
  },
  {
    title: "Growth Marketing Specialist",
    type: "Part-time",
    category: "Marketing",
    compensation: "Base + Performance Bonus",
  },
];

const perks = [
  {
    icon: Globe,
    title: "100% Remote",
    description: "Work from anywhere in the world. We believe in results, not clock-ins.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Work with the top 1% of talent in a fast-paced, community-driven environment.",
  },
  {
    icon: Heart,
    title: "Profit Sharing",
    description: "Our collective members share in the success of the projects they contribute to.",
  },
];

export default function CareersClient() {
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
            Join Our Collective
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Engineered for Freedom
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            We&apos;re not a traditional studio. We&apos;re a meritocratic collective of high-performance builders who value autonomy, quality, and profit.
          </p>
        </motion.div>
      </section>

      {/* Perks */}
      <section className="content-container pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {perks.map((perk, i) => (
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
                <perk.icon className="w-5 h-5" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: '#1B1B1B' }}>{perk.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="content-container pb-20 md:pb-32" id="open-positions">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Opportunities
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Open Roles
            </h2>
            <p className="text-xs md:text-sm mt-3" style={{ color: '#888888' }}>
              Current high-priority roles in our collective ecosystem.
            </p>
          </div>

          <div className="space-y-3">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 md:p-8 rounded-2xl border bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-soft"
                style={{ borderColor: 'rgba(0,0,0,0.06)' }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-widest" style={{ backgroundColor: '#F4F7F1', color: '#2563EB' }}>
                      {job.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#888888' }}>
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>{job.title}</h4>
                </div>
                <div className="flex items-center gap-6 md:gap-8">
                  <p className="text-[10px] uppercase tracking-widest font-semibold hidden md:block" style={{ color: '#888888' }}>
                    {job.compensation}
                  </p>
                  <Link href="/contact" className="inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:border-[#2563EB]" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <ArrowRight className="w-4 h-4" style={{ color: '#2563EB' }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 md:p-12 rounded-2xl border text-center" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Don&apos;t see your role?
            </h3>
            <p className="text-xs leading-relaxed max-w-md mx-auto mb-6" style={{ color: '#888888' }}>
              We&apos;re always looking for world-class developers, designers, and growth experts. Send us your portfolio and we&apos;ll reach out when a match opens.
            </p>
            <Link href="mailto:careers@webkaro.tech" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300" style={{ color: '#2563EB' }}>
              General Application <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
