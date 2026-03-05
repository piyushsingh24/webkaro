"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Activity, Globe, Target } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
  category: string;
}

export default function DynamicDetailTemplate({ params, category }: PageProps) {
  if (!params?.slug) return null;
  const shouldReduceMotion = useReducedMotion();
  const title = params.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main className="min-h-screen pt-32 pb-20 px-8 md:px-16 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#7C3AED]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{category}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white font-outfit max-w-4xl leading-[1.15] uppercase">
            {title}<span className="text-primary italic">.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 font-bold max-w-2xl leading-relaxed font-outfit">
            Revolutionizing the {category.toLowerCase()} landscape with high-performance, expert-driven {title.toLowerCase()} solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { title: "Strategic Impact", icon: Target, desc: "Data-driven roadmaps for maximum ROI." },
              { title: "Peak Security", icon: ShieldCheck, desc: "ISO-compliant infrastructure by default." },
              { title: "Extreme Velocity", icon: Zap, desc: "Optimized for core web vitals and speed." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] hover:border-primary/20 transition-all group backdrop-blur-3xl"
              >
                <feature.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tighter font-outfit">{feature.title}</h3>
                <p className="text-white/30 text-[10px] font-bold leading-relaxed uppercase tracking-widest">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-24 flex flex-col md:flex-row items-center gap-10">
            <Link
              href="/contact"
              className="h-20 px-12 bg-primary text-white rounded-2xl flex items-center gap-4 text-sm font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/40"
            >
              Start Project <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl border-4 border-background bg-zinc-900 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <img
                    src={`https://i.pravatar.cc/100?u=${i + 10}`}
                    alt={`Webkaro verified ${category.toLowerCase()} specialist`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] leading-tight mb-1">
                Verified Collective
              </p>
              <p className="text-xs font-black text-white uppercase tracking-widest">
                50+ Industry Specialists
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
