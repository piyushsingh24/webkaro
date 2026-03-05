"use client";

import { use } from "react";
import { getProjectBySlug } from "@/data/projects";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FinalCTA from "@/components/sections/FinalCTA";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-32 pb-24">
      {/* Hero Header */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <Link href="/projects" className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">
                Case Study: {project.category}
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 font-outfit">
                {project.title}
              </h1>
              <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-8 items-center justify-start lg:justify-end">
              {project.metrics.map(metric => (
                <div key={metric.label} className="glass px-10 py-6 rounded-3xl border-border dark:border-primary/20 text-center">
                  <p className="text-3xl font-black text-foreground mb-1 font-outfit">{metric.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden border border-border/40 relative">
            <img src={project.thumbnail} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <Link
              href={project.demoUrl || "#"}
              className="absolute bottom-12 right-12 px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit flex items-center gap-4">
                <Target className="w-6 h-6 text-primary" /> The Problem
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-primary" /> Our Strategy
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {project.strategy}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit flex items-center gap-4">
                <Zap className="w-6 h-6 text-primary" /> Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.tags.map(tag => (
                  <div key={tag} className="glass p-6 rounded-2xl border-border dark:border-white/5 flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass p-10 rounded-[2.5rem] border-primary/20 sticky top-32">
              <h4 className="text-xl font-bold text-foreground mb-8 font-outfit">The Results</h4>
              <ul className="space-y-6">
                {project.results.map((result, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/70 text-sm leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full mt-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Build Your Version <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((s, i) => (
              <div key={i} className="rounded-[2.5rem] overflow-hidden border border-border/40 aspect-video">
                <img src={s} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
