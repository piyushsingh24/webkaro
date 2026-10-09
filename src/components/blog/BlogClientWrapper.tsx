"use client";

import { motion } from "framer-motion";
import Markdown from "@/components/ui/markdown";

export default function BlogClientWrapper({ excerpt, content }: { excerpt: string; content: string }) {
  return (
    <article className="px-6 mb-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-none"
        >
          <p className="text-xl text-foreground/90 dark:text-white/90 font-medium leading-relaxed italic border-l-4 border-primary pl-8 py-2 mb-10">
            {excerpt}
          </p>

          <Markdown content={content} />
        </motion.div>
      </div>
    </article>
  );
}
