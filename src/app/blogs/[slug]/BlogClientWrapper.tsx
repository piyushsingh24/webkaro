"use client";

import { motion } from "framer-motion";

export default function BlogClientWrapper({ excerpt, content }: { excerpt: string; content: string }) {
  return (
    <article className="px-6 mb-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose dark:prose-invert prose-lg max-w-none text-foreground/70 leading-relaxed space-y-8"
        >
          <p className="text-xl text-foreground/90 dark:text-white/90 font-medium leading-relaxed italic border-l-4 border-primary pl-8 py-2">
            {excerpt}
          </p>

          <p>
            {content}
          </p>

          <h3 className="text-2xl font-bold text-foreground dark:text-white font-outfit pt-8">The Core Principles</h3>
          <p>
            In our experience building dozens of high-performance applications, we've found that performance isn't something you can sprinkle on at the end. It's a fundamental architectural decision.
          </p>

          <div className="glass p-8 rounded-3xl border-border dark:border-primary/20 my-12 bg-background/50 shadow-premium">
            <h4 className="text-xl font-bold text-foreground dark:text-white mb-4 font-outfit">Key Takeaways</h4>
            <ul className="space-y-4 text-base">
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span>Always prioritize server-side rendering for critical data.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span>Optimize images and assets using modern compression.</span>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span>Use GSAP for performance-safe animations that don't jank.</span>
              </li>
            </ul>
          </div>

          <p>
            We believe that the future of the web belongs to those who prioritize the user's experience across all devices and connection speeds.
          </p>
        </motion.div>
      </div>
    </article>
  );
}
