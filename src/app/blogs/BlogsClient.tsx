"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogsClient({ blogs }: { blogs: any[] }) {
  const categories = ["All", "Engineering", "Design", "DevOps", "Strategy", "News", "Press", "Community"];

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
            Our Insights
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Engineering & Growth Insights
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            Thought leadership from our collective on performance, design, and building digital products that win.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col p-6 md:p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-soft h-full"
                style={{ borderColor: 'rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold" style={{ backgroundColor: '#F4F7F1', color: '#2563EB' }}>
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#888888' }}>
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-semibold mb-3 tracking-tight group-hover:text-[#2563EB] transition-colors duration-300" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {blog.title}
                </h3>

                <p className="text-xs leading-relaxed mb-6 line-clamp-2" style={{ color: '#888888' }}>
                  {blog.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: '#1B1B1B' }}>{blog.author}</p>
                    <p className="text-[10px]" style={{ color: '#888888' }}>{blog.date}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: '#2563EB' }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
