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
    <div className="pt-44 pb-24 text-foreground">
      {/* Hero */}
      <section className="px-6 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
          >
            JOIN OUR COLLECTIVE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground mb-8 font-outfit"
          >
            Engineered for <br />
            <span className="text-gradient">Freedom.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            We're not a traditional studio. We're a meritocratic collective
            of high-performance builders who value autonomy, quality, and profit.
          </motion.p>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-10 rounded-[3rem] border-border dark:border-white/5 space-y-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <perk.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-foreground">{perk.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 mb-32" id="open-positions">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-outfit">Open Opportunities</h2>
            <p className="text-foreground/50">Current high-priority roles in our collective ecosystem.</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-8 rounded-[2rem] border border-border dark:border-white/5 bg-primary/[0.02] hover:border-primary/40 hover:bg-primary/[0.04] transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary/5 dark:bg-white/5 rounded-full text-[10px] uppercase font-bold text-primary tracking-widest">
                      {job.category}
                    </span>
                    <span className="text-foreground/40 text-xs font-medium font-outfit">
                      {job.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h4>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Compensation</p>
                    <p className="text-foreground font-bold">{job.compensation}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <ArrowRight className="w-5 h-5 text-foreground group-hover:text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-12 glass rounded-[3rem] border-border text-center bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="text-2xl font-bold mb-4 font-outfit text-foreground">Don't see your role?</h3>
            <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
              We're always looking for world-class developers, designers, and growth experts.
              Send us your portfolio and we'll reach out when a match opens.
            </p>
            <Link
              href="mailto:careers@webkaro.tech"
              className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
            >
              General Application →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
