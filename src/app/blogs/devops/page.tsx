"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowRight, Clock, Cloud, Infinity, ShieldCheck, Zap, Globe, Cpu, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import FinalCTA from "@/components/sections/FinalCTA";

const expertise = [
  {
    icon: <Infinity className="w-6 h-6" />,
    title: "CI/CD Pipelines",
    description: "Automated testing and deployment workflows that ensure perfect code delivery every time."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    description: "Multi-cloud management across AWS, Azure, and Google Cloud for global scalability."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Infrastructure as Code",
    description: "Terraform and Ansible scripts that make infrastructure reproducible and perfectly versioned."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "DevSecOps",
    description: "Integrating security into the heart of the development lifecycle, from day zero."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Edge Computing",
    description: "Vercel and Netlify edge functions for ultra-low latency user experiences worldwide."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Docker & K8s",
    description: "Containerization and orchestration to ensure consistent environments from dev to prod."
  }
];

export default function DevOpsPage() {
  const filteredBlogs = blogs.filter(b => b.category.toLowerCase() === "engineering" || b.category.toLowerCase() === "performance");

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
            Infrastructure / DevOps
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-10 font-outfit leading-[1.1]"
          >
            Cloud & <br />
            <span className="text-gradient">DevOps Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            We automate the complex, so you can focus on building.
            Scaling infrastructure without the headache of manual maintenance.
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
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Automation Hub</p>
              <h2 className="text-4xl md:text-5xl font-black text-foreground font-outfit">Infrastructure Insights</h2>
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
