"use client";

import { motion } from "framer-motion";
import { Ghost, Home, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden font-outfit">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-2xl w-full text-center space-y-12 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Error 404</span>
          </div>

          <h1 className="text-8xl md:text-[12rem] font-black text-foreground tracking-tighter leading-none select-none">
            VOID<span className="text-primary">.</span>
          </h1>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">You've reached the edge of the digital map.</h2>
            <p className="text-foreground/70 dark:text-foreground/50 text-lg max-w-md mx-auto font-medium leading-relaxed">
              The page you are looking for has been moved, evaporated, or never existed in this timeline.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="h-16 px-10 bg-primary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/30 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" /> Return Home
          </Link>
          <Link
            href="/services"
            className="h-16 px-10 glass border-border text-foreground rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-background/80 transition-all w-full sm:w-auto"
          >
            View Services <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-16 border-t border-border/50 flex flex-col items-center gap-6"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30">Lost in the grid?</p>
          <div className="flex items-center gap-8 opacity-20 group">
            <div className="w-16 h-px bg-foreground group-hover:w-24 transition-all duration-700" />
            <Ghost className="w-10 h-10 text-foreground animate-bounce" />
            <div className="w-16 h-px bg-foreground group-hover:w-24 transition-all duration-700" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
