"use client";

import FinalCTA from "@/components/sections/FinalCTA";
import { Users, Shield, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We believe in the power of collaboration over individual competition. Our collective thrives on shared knowledge.",
  },
  {
    icon: Shield,
    title: "Engineering Excellence",
    description: "We don't settle for 'good enough'. We build systems that are secure, scalable, and optimized for performance.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our members bring diverse experiences from around the world, ensuring we build products with a global reach.",
  },
];

export default function AboutClient() {
  return (
    <div className="pt-44 pb-24">
      {/* Hero */}
      <section className="px-6 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 font-outfit">
            More Than Just <br />
            <span className="text-gradient">A Studio.</span>
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Webkaro is a community-driven development collective. We don't have employees;
            we have experts who collaborate to build the future of the web.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 mb-32" id="mission">
        <div className="max-w-7xl mx-auto border-t border-border pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden glass border-primary/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-12 flex items-center justify-center text-center">
                  <div className="space-y-6">
                    <p className="text-6xl font-black text-foreground/10 dark:text-white/10 font-outfit uppercase tracking-widest leading-none">
                      Innovation <br /> Scale <br /> Trust
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 blur-[60px] rounded-full" />
            </div>

            <div id="vision">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Vision 2030</p>
              <h2 className="text-4xl font-bold text-foreground mb-8 font-outfit">Our Collective Philosophy</h2>
              <div className="space-y-8">
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Traditional agencies often operate with rigid hierarchies and siloed talent.
                  Webkaro was founded on a different premise: that the best work happens when
                  vetted experts collaborate in a fluid, community-driven environment.
                </p>
                <div className="space-y-6">
                  {values.map((v, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <v.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-foreground font-bold mb-2">{v.title}</h4>
                        <p className="text-foreground/60 text-sm leading-relaxed">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="px-6 mb-32" id="team">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-foreground font-outfit">Leadership Collective</h2>
            <p className="text-foreground/50 mt-4">The core architects driving our community's excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass p-8 rounded-[3rem] border-border dark:border-white/5 group hover:border-primary/20 transition-all">
                <div className="aspect-square rounded-2xl bg-primary/5 dark:bg-white/5 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-black font-outfit text-xl">Core Architect #{i}</p>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Engineering Lead</p>
                  </div>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  15+ years of experience in distributed systems and modern web architecture.
                  Leading our efforts in high-performance computing.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="px-6 mb-32" id="culture">
        <div className="max-w-7xl mx-auto glass p-12 md:p-24 rounded-[4rem] border-border dark:border-white/5 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative bg-gradient-to-br from-background/50 to-transparent">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black text-foreground font-outfit">Our Work Culture</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We operate on a "Freedom with Responsibility" model. No managers, no vanity
              metrics—just pure engineering excellence and a shared commitment to building
              the best digital products on the planet.
            </p>
            <Link href="/careers" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              See Open Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl bg-primary/5 dark:bg-white/5 flex items-center justify-center p-8 text-center grayscale opacity-50">
              <p className="text-xs font-black uppercase tracking-widest text-foreground/40 dark:text-white/40">Remote First</p>
            </div>
            <div className="aspect-square rounded-3xl bg-primary/10 flex items-center justify-center p-8 text-center border border-primary/10">
              <p className="text-xs font-black uppercase tracking-widest text-primary">High Autonomy</p>
            </div>
            <div className="aspect-square rounded-3xl bg-primary/5 dark:bg-white/5 flex items-center justify-center p-8 text-center grayscale opacity-50">
              <p className="text-xs font-black uppercase tracking-widest text-foreground/40 dark:text-white/40">Async Work</p>
            </div>
            <div className="aspect-square rounded-3xl bg-primary/5 dark:bg-white/5 flex items-center justify-center p-8 text-center grayscale opacity-50">
              <p className="text-xs font-black uppercase tracking-widest text-foreground/40 dark:text-white/40">Profit Share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto glass p-12 md:p-20 rounded-[4rem] border-primary/20 text-foreground">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black text-foreground mb-2 font-outfit">50+</p>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Experts in Collective</p>
            </div>
            <div>
              <p className="text-5xl font-black text-foreground mb-2 font-outfit">100+</p>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-black text-foreground mb-2 font-outfit">10+</p>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Countries Served</p>
            </div>
            <div>
              <p className="text-5xl font-black text-foreground mb-2 font-outfit">99%</p>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
