"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-44 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-24 h-4 bg-primary/10 rounded-full mb-4"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            className="w-1/2 h-12 bg-foreground/5 rounded-2xl mb-6"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="w-1/3 h-6 bg-foreground/5 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass rounded-[2rem] overflow-hidden border-white/5 h-[500px] flex flex-col">
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="aspect-video bg-foreground/5"
              />
              <div className="p-8 space-y-4 flex-grow">
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1/4 h-4 bg-primary/10 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  className="w-full h-8 bg-foreground/10 rounded-xl"
                />
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                  className="w-full h-20 bg-foreground/5 rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
