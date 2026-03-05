"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-7xl mx-auto pt-44">
        {/* Skeleton Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-32 h-4 bg-primary/10 rounded-full mb-6"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="w-3/4 md:w-1/2 h-12 md:h-16 bg-foreground/5 rounded-2xl mb-8"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className="w-full md:w-2/3 h-6 bg-foreground/5 rounded-lg"
          />
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass p-8 rounded-[2.5rem] border-white/5 space-y-6">
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="w-14 h-14 rounded-2xl bg-foreground/5"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                className="w-2/3 h-6 bg-foreground/10 rounded-lg"
              />
              <div className="space-y-3">
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-full h-4 bg-foreground/5 rounded"
                />
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
                  className="w-5/6 h-4 bg-foreground/5 rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
