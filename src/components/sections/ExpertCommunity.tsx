"use client";

import { Users, ShieldCheck, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Users,
    title: "Collaborative Collective",
    description: "Our community of vetted developers and designers work together to bring diverse perspectives to every project.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Expertise",
    description: "Every member of our collective undergoes a rigorous vetting process to ensure top-tier development standards.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "We don't just build websites; we engineer high-performance digital machines designed for speed and scale.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Following modern architecture patterns and global best practices for scalable, maintainable products.",
  },
];

export default function ExpertCommunity() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 px-4 max-w-3xl mx-auto space-y-6">
          <h2 className="h2 uppercase leading-[1.25] text-foreground">
            Powered By <span className="text-foreground dark:text-white">Expert</span> <span className="text-gradient">Collective.</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Webkaro is more than just a development studio. We are a community-driven collective of high-performance developers, designers, and strategists collaborating to deliver exceptional digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-foreground dark:text-white font-black uppercase text-[10px] tracking-[0.2em] font-outfit">{feature.title}</h4>
                  <p className="text-muted-foreground text-[13px] leading-relaxed max-w-[240px] mx-auto">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full" />
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
              <div className="space-y-4 md:space-y-6">
                <div className="bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-40 md:h-48 flex flex-col justify-end animate-float border border-border dark:border-white/5 shadow-premium dark:shadow-xl">
                  <p className="text-2xl md:text-3xl font-black text-foreground dark:text-white">50+</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Experts</p>
                </div>
                <div className="bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-56 md:h-64 flex flex-col justify-end border border-border dark:border-white/5 shadow-premium dark:shadow-xl">
                  <p className="text-2xl md:text-3xl font-black text-foreground dark:text-white">100%</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Growth</p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 pt-6 md:pt-8">
                <div className="bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-56 md:h-64 flex flex-col justify-end border border-border dark:border-white/5 shadow-premium dark:shadow-xl">
                  <p className="text-2xl md:text-3xl font-black text-foreground dark:text-white">Global</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Reach</p>
                </div>
                <div className="bg-card dark:transparent dark:glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl h-40 md:h-48 flex flex-col justify-end animate-float border border-border dark:border-white/5 shadow-premium dark:shadow-xl" style={{ animationDelay: "1s" }}>
                  <p className="text-2xl md:text-3xl font-black text-foreground dark:text-white">24/7</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">Sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
