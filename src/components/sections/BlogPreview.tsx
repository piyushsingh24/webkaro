"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    title: "Why Next.js is the Only Choice for Indian SaaS in 2024",
    excerpt: "Exploring the technical advantages of RSCs and Streaming for high-latency connections in tier-2 cities.",
    date: "March 15, 2024",
    author: "Amit S.",
    image: "/blog/nextjs-saas.jpg"
  },
  {
    title: "Reducing AWS Costs by 40% with Serverless Architecture",
    excerpt: "How we optimized Eco-School's infrastructure using Lambda and Edge workers to save thousands monthly.",
    date: "April 2, 2024",
    author: "Piyush S.",
    image: "/blog/aws-optimization.jpg"
  },
  {
    title: "Conversion Psychology: Beyond Just Fast Loading",
    excerpt: "Technical tricks to improve user trust and reduce checkout friction in modern E-commerce applications.",
    date: "April 10, 2024",
    author: "Sanya G.",
    image: "/blog/conversion.jpg"
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="content-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="h2 mb-6">Engineering Wisdom</h2>
            <p className="text-white/60 text-lg">
              We write about the technical details others ignore. Scale, performance, and modern business logic.
            </p>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
            Read Our Journal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all flex flex-col"
            >
              <div className="aspect-[16/10] rounded-2xl bg-zinc-800 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-teal/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-4xl font-black uppercase tracking-tighter">
                    {blog.title.split(' ')[0]}
                </div>
              </div>

              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4">
                <div className="flex items-center gap-1.5 font-bold">
                  <Calendar className="w-3 h-3 text-primary" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-1.5 font-bold">
                  <User className="w-3 h-3 text-primary" />
                  {blog.author}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                {blog.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-8 flex-1">
                {blog.excerpt}
              </p>

              <Link href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-primary transition-colors">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
