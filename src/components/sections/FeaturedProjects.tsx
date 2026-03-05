"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Center Header */}
        <div className="text-center mb-16 md:mb-24 px-4 max-w-3xl mx-auto space-y-6">
          <h2 className="h2 uppercase leading-[1.25] text-foreground">
            Featured <span className="text-foreground dark:text-white">Case</span> <span className="text-gradient">Studies.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
            Explore how we've helped startups and established companies build scalable digital solutions that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[3rem] bg-card border border-border hover:border-primary/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-premium dark:hover:shadow-glow shine-effect shadow-sm"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} - ${project.category} solutions by Webkaro`}
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Overlay with Meta */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex flex-wrap justify-end gap-2 max-w-[200px]">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-background/80 dark:bg-black/40 backdrop-blur-md border border-border dark:border-white/10 rounded-full text-[9px] uppercase tracking-widest text-foreground/80 dark:text-white/80 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <p className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  {project.category}
                </p>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors font-outfit leading-none">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg h-12 overflow-hidden line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="learn-more-link text-primary font-black text-[10px] tracking-widest uppercase hover:gap-3 transition-all"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={project.demoUrl || "#"}
                    target="_blank"
                    className="flex items-center gap-2 text-foreground/40 dark:text-white/20 font-black text-[10px] uppercase tracking-widest hover:text-primary dark:hover:text-white transition-colors"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="text-center mt-16 md:mt-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-primary/20"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
