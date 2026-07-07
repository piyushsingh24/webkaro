"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="content-container">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="h2 mb-6 text-white">What our clients say</h2>
          <p className="text-white/60 text-lg">
            We don&apos;t just build websites; we build partnerships. Hear it directly from the founders we help scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                {testi.verified && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20">
                    <ShieldCheck className="w-3 h-3 text-accent-teal" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-teal">Verified</span>
                  </div>
                )}
              </div>

              <blockquote className="flex-1 text-white/80 text-lg leading-relaxed mb-8 italic">
                &quot;{testi.quote}&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center text-white font-black text-sm">
                  {testi.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{testi.name}</h4>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                    {testi.role}, {testi.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 glass-morphism">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0F1E] bg-primary/20 flex items-center justify-center text-[10px] font-black">
                  U{i}
                </div>
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              Joined by 40+ other brands tracking growth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
