"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import FinalCTA from "@/components/sections/FinalCTA";
import Testimonials from "@/components/sections/Testimonials";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  outcomes?: string[];
}

const categories = ["All", "Web Development", "Full Stack", "EdTech", "Web Design"];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-44 pb-24">
      {/* Header */}
      <section className="px-6 mb-24 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            OUR PORTFOLIO – Proven Results Globally
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-foreground dark:text-white mb-8 font-outfit tracking-tight">
            Proven Results <br />
            <span className="text-gradient font-italic">Globally.</span>
          </h1>
          <p className="text-foreground/60 dark:text-white/50 text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            High-converting web applications and scalable platforms for startups and growing businesses.
          </p>

          {/* Logo Strip / Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale mb-20 pointer-events-none">
            <div className="flex items-center gap-2 font-black text-2xl">⚡ FAST</div>
            <div className="flex items-center gap-2 font-black text-2xl">🛡️ SECURE</div>
            <div className="flex items-center gap-2 font-black text-2xl">📈 SCALABLE</div>
            <div className="flex items-center gap-2 font-black text-2xl">✨ PREMIUM</div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-[24px] mt-12 bg-primary/5 p-2 rounded-full w-fit mx-auto border border-border px-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "py-3 rounded-full text-sm font-black transition-all relative group h-full flex items-center",
                  activeCategory === cat
                    ? "text-primary"
                    : "text-foreground/40 hover:text-primary"
                )}
                aria-pressed={activeCategory === cat}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-8 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-[2rem] border border-border overflow-hidden hover:border-primary/40 transition-all duration-700 shadow-premium flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={project.thumbnail}
                  alt={`Screenshot of ${project.title} project showcase`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Outcomes Floating Tag */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  {project.outcomes?.map((outcome, i) => (
                    <div key={i} className="px-3 py-1.5 bg-background/80 backdrop-blur-md border border-border rounded-lg text-[9px] font-black uppercase tracking-widest text-primary shadow-xl">
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-black text-foreground mb-[8px] font-outfit leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-base leading-relaxed mb-[16px]">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-[24px]">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-md text-[9px] uppercase tracking-wider text-primary/70 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={`View case study for ${project.title}`}
                    className="group/btn px-8 py-3.5 bg-primary text-white rounded-xl font-black text-xs transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 border border-primary/20"
                  >
                    View Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={project.demoUrl || "#"}
                    target="_blank"
                    aria-label={`Live preview of ${project.title}`}
                    className="flex items-center gap-2 text-foreground/40 font-black text-xs hover:text-primary transition-colors group/link underline-offset-4 hover:underline"
                  >
                    Live Preview <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Block */}
      <Testimonials />

      <FinalCTA />
    </div>
  );
}
