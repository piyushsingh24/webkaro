"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Header */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Selected Work
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Case Studies
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            A curated selection of our recent work. Each project is a study in constraint, craft, and measurable outcomes.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300",
                activeCategory === cat
                  ? "text-white"
                  : "border hover:border-[#2563EB]"
              )}
              style={activeCategory === cat ? { backgroundColor: '#2563EB' } : { borderColor: 'rgba(0,0,0,0.06)', color: '#656565' }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:shadow-soft"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} case study`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: '#2563EB' }}>
                  {project.category}
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed mb-5 line-clamp-2" style={{ color: '#888888' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold"
                      style={{ backgroundColor: '#F6F3EE', color: '#656565' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: '#2563EB' }}
                  >
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300 hover:text-[#2563EB]"
                      style={{ color: '#888888' }}
                    >
                      Live Preview <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
