"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24"
        >
          <div>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
                  Selected Work
                </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Case Studies
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#656565' }}>
              A curated selection of our recent work. Each project is a study in constraint, craft, and measurable outcomes.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16 md:space-y-24">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} case study`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#6E8E59' }}>
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#656565' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold"
                      style={{ 
                        backgroundColor: '#F6F3EE',
                        color: '#656565'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                  style={{ color: '#2563EB' }}
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-medium transition-all duration-300 hover:translate-y-[-1px]"
              style={{ backgroundColor: '#2563EB' }}
            >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
