"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section id="work" className="section-padding relative">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="h2 mb-6">Recent Masterpieces</h2>
            <p className="text-white/60 text-lg">
              We don&apos;t just build sites; we build competitive advantages. Every project is an engineering case study in speed and scale.
            </p>
          </div>
          <Link href="/projects" className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
            View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5 aspect-[4/3] md:aspect-[16/10]"
            >
              {/* Image / Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex flex-wrap庆 gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-end gap-6">
                  <div className="flex-1">
                    <span className="text-accent-teal text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                      {project.metrics.label}: {project.metrics.value}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black mb-2">{project.title}</h3>
                    <p className="text-white/40 text-sm md:text-base max-w-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
