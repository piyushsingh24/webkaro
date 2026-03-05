"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowRight, Clock, Server, Database, Shield, Zap, Globe, Cpu, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import FinalCTA from "@/components/sections/FinalCTA";

const expertise = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "Node.js & Laravel",
    description: "Robust backend architectures built for speed, security, and absolute reliability."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Microservices",
    description: "Decoupled systems that scale independently and communicate via lightning-fast APIs."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "SQL & NoSQL",
    description: "Optimized data schemas and queries for PostgreSQL, MongoDB, and Redis."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security",
    description: "Multi-layered security protocols, JWT authentication, and data encryption."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Systems",
    description: "WebSockets and event-driven architectures for instant data synchronization."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "API Design",
    description: "Restful and GraphQL APIs designed for developer experience and performance."
  }
];

export default function BackendEngineeringPage() {
  const filteredBlogs = blogs.filter(b => b.category.toLowerCase() === "engineering" || b.category.toLowerCase() === "software architecture");

  return (
    <div className="pt-56 pb-32">
      {/* Hero Section */}
      <section className="px-8 md:px-16 mb-32 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            Development / Backend
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-10 font-outfit leading-[1.1]"
          >
            Backend <br />
            <span className="text-gradient">Engineering.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            The engines behind the experiences. We build scalable, secure, and
            high-performance server-side solutions that power modern digital products.
          </motion.p>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="px-8 md:px-16 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border-border bg-background/30 hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-outfit">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Blogs */}
      <section className="px-8 md:px-16 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 px-4">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Core Systems</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground font-outfit">Backend Insights</h2>
            </div>
            <Link href="/blogs" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col glass p-8 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 font-outfit h-full border-border bg-background/50"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold">
                      {blog.category}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/30 text-[10px] uppercase tracking-widest font-bold">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 font-outfit group-hover:text-primary transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-foreground/60 text-base leading-relaxed mb-10 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="pt-8 border-t border-border flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center font-bold text-white text-[10px]">
                        W
                      </div>
                      <div>
                        <p className="text-foreground font-bold text-xs">{blog.author}</p>
                        <p className="text-foreground/30 text-[10px]">{blog.date}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all border border-border group-hover:border-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
