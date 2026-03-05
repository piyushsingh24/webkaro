"use client";

import Link from "next/link";
import { ArrowRight, Github, Heart, Users, Code, Star, Zap, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import FinalCTA from "@/components/sections/FinalCTA";

const features = [
  {
    icon: <Github className="w-6 h-6" />,
    title: "Public Components",
    description: "Our library of UI components available for the community to use and improve."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Starter Templates",
    description: "Bilerplate-free Next.js and Laravel starters to jumpstart your next project."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Community First",
    description: "We believe in giving back to the ecosystem that powers our digital studio."
  }
];

const projects = [
  {
    name: "Webkaro UI",
    stars: "1.2k",
    description: "A collection of high-performance React components with built-in accessibility.",
    link: "#"
  },
  {
    name: "Next-Scale",
    stars: "850",
    description: "The ultimate production-ready Next.js boilerplate for SaaS startups.",
    link: "#"
  },
  {
    name: "Laravel-Pulse-Plus",
    stars: "420",
    description: "Extended monitoring and dashboarding for large scale Laravel applications.",
    link: "#"
  }
];

export default function OpenSourcePage() {
  return (
    <div className="pt-56 pb-32">
      {/* Hero Section */}
      <section className="px-8 md:px-16 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            Community / Open Source
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-10 font-outfit leading-[1.1]"
          >
            Building the <br />
            <span className="text-gradient">Open Future.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            We are committed to the open source movement. Explore our projects,
            contribute to our libraries, and build better together.
          </motion.p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-8 md:px-16 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border-border bg-background/30 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-outfit">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="px-8 md:px-16 mb-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-foreground font-outfit mb-16 text-center">Featured Repositories</h2>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={project.link}
                  className="flex flex-col md:flex-row md:items-center justify-between p-10 rounded-[2.5rem] border border-border bg-background/30 hover:border-primary/50 transition-all group glass"
                >
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-foreground/60 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center gap-6">
                    <div className="flex items-center gap-2 text-foreground/40 font-bold">
                      <Star className="w-5 h-5 text-primary" />
                      {project.stars}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all border border-border group-hover:border-primary">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="https://github.com" className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-black rounded-full hover:scale-105 transition-transform">
              <Github className="w-6 h-6" />
              Follow on GitHub
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
