"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function BlogsClient({ blogs }: { blogs: any[] }) {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filteredBlogs = categoryFilter
    ? blogs.filter(b => b.category.toLowerCase() === categoryFilter.toLowerCase())
    : blogs;

  const categories = ["All", "Engineering", "Design", "DevOps", "Strategy", "News", "Press", "Community"];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <section className="px-8 md:px-16 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-6"
        >
          Our Insights
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-foreground mb-10 font-outfit leading-[1.1]"
        >
          Engineering & <br />
          <span className="text-gradient">Growth Insights.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          Thought leadership from our collective on performance, design,
          and building digital products that win.
        </motion.p>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-16"
        >
          {categories.map(cat => (
            <Link
              key={cat}
              href={cat === "All" ? "/blogs" : `/blogs?category=${cat.toLowerCase()}`}
              className={`px-6 py-2 rounded-full border text-xs font-bold transition-all ${(cat === "All" && !categoryFilter) || (categoryFilter === cat.toLowerCase())
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                : "border-border bg-background/50 text-foreground/40 hover:border-primary/50 hover:text-primary"
                }`}
            >
              {cat}
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  key={blog.id}
                  href={`/blogs/${blog.slug}`}
                  className="group flex flex-col glass p-8 rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 font-outfit h-full border-border bg-background/50 shadow-premium"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold">
                      {blog.category}
                    </div>
                    <div className="flex items-center gap-2 text-foreground/30 dark:text-white/30 text-[10px] uppercase tracking-widest font-bold">
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
                        <p className="text-foreground/30 dark:text-white/30 text-[10px]">{blog.date}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all border border-border group-hover:border-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-foreground/40 text-xl font-medium">No articles found in this category.</p>
              <Link href="/blogs" className="text-primary font-bold mt-4 inline-block hover:underline">View all posts</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
