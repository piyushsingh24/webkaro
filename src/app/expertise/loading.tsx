"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-44 pb-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-32 h-4 bg-primary/10 rounded-full mx-auto mb-6"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          className="w-2/3 h-16 bg-foreground/5 rounded-2xl mx-auto mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass p-12 rounded-[3rem] border-white/5 space-y-8">
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="w-16 h-16 rounded-full bg-primary/10 mx-auto"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-1/2 h-8 bg-foreground/10 rounded-lg mx-auto"
              />
              <div className="space-y-3">
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="w-full h-4 bg-foreground/5 rounded"
                />
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                  className="w-full h-4 bg-foreground/5 rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
