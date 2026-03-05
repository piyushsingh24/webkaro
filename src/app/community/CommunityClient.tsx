"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Users, Zap, MessageSquare, Github } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";

const initiatives = [
  {
    icon: Github,
    title: "Open Source First",
    description: "We contribute to and maintain several open-source libraries in the Next.js and MERN ecosystem.",
    link: "https://github.com/webkaro",
    action: "View on GitHub",
    id: "open-source"
  },
  {
    icon: Code,
    title: "Developer Collective",
    description: "A private network of vetted senior engineers who collaborate on high-stakes digital products.",
    link: "#vetted",
    action: "Apply to Join",
    id: "vetted"
  },
  {
    icon: MessageSquare,
    title: "Weekly Webinars",
    description: "Deep-dives into architecture, performance optimization, and the future of the web.",
    link: "#events",
    action: "See Upcoming",
    id: "events"
  },
];

const values = [
  {
    title: "Collaborative Over Competitive",
    description: "We believe in sharing knowledge and growing together. Our collective thrives when everyone succeeds.",
  },
  {
    title: "Quality as a Standard",
    description: "We don't just ship code; we craft solutions that are peer-reviewed and tested for excellence.",
  },
  {
    title: "Radical Transparency",
    description: "From project timelines to compensation models, we keep everything clear and honest.",
  },
];

export default function CommunityClient() {
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
            OUR COLLECTIVE IMPACT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-foreground mb-8 font-outfit"
          >
            More Than Just <br />
            <span className="text-gradient">Developers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            We are a thriving community of engineers, designers, and innovators
            building tools and sharing knowledge to move the web forward.
          </motion.p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              id={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-12 rounded-[3.5rem] border-border group hover:border-primary/30 transition-all flex flex-col items-center text-center space-y-8"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-outfit">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href={item.link}
                  className="font-black uppercase tracking-widest text-[10px] text-foreground/40 group-hover:text-primary transition-colors flex items-center gap-2"
                >
                  {item.action} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 mb-32" id="vetted">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-24 rounded-[4rem] border-border relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 font-outfit">Vetted Expertise</h2>
                <div className="space-y-12">
                  <p className="text-foreground/60 leading-relaxed">
                    Our collective isn't open to everyone. We follow a rigorous vetting process
                    to ensure only the top 1% of engineering and design talent enters our network.
                  </p>
                  {values.map((v, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-xl font-bold text-primary font-outfit">{v.title}</h4>
                      <p className="text-foreground/60 leading-relaxed max-w-md">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-primary/5 border border-border flex items-center justify-center p-16">
                  <div className="w-full h-full rounded-2xl border border-border bg-primary/[0.02] flex items-center justify-center">
                    <Users className="w-32 h-32 text-primary/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="px-6 mb-32" id="alumni">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-outfit">Alumni Network</h2>
            <p className="text-foreground/50">Our members go on to build world-changing companies.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="glass p-8 rounded-3xl border-border flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full mb-4 grayscale" />
                <p className="text-foreground font-bold text-sm">Alumni #{i}</p>
                <p className="text-foreground/40 text-[10px] uppercase font-bold tracking-widest">Founder / CTO</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Anchor */}
      <section className="px-6 mb-32" id="events">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-outfit">Collective Events</h2>
            <p className="text-foreground/50">Where we meet, share, and build the future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2rem] border border-border bg-primary/[0.01] flex items-center justify-between text-left group hover:border-primary/20 transition-all">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">March 15, 2026</p>
                <h4 className="text-xl font-bold text-foreground font-outfit">The Future of Next.js 16</h4>
                <p className="text-sm text-foreground/40 font-medium">Remote Talk by @piyush_sh</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all">
                <Zap className="w-5 h-5 text-foreground/20 group-hover:text-primary transition-all" />
              </div>
            </div>
            <div className="p-8 rounded-[2rem] border border-border bg-primary/[0.01] flex items-center justify-between text-left group hover:border-primary/20 transition-all">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">April 02, 2026</p>
                <h4 className="text-xl font-bold text-foreground font-outfit">Performance at Scale</h4>
                <p className="text-sm text-foreground/40 font-medium">Workshop by WebKaro Experts</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all">
                <Zap className="w-5 h-5 text-foreground/20 group-hover:text-primary transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
