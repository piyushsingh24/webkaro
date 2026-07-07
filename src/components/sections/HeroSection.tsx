"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const brands = [
  "Moneybox", "Culture Amp", "Clay", "Lightspeed", "Anthropic", "Monday.com"
];

const DecagonLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0L24.4903 11.5097L36 16L24.4903 20.4903L20 32L15.5097 20.4903L4 16L15.5097 11.5097L20 0Z" fill="white" fillOpacity="0.9" />
    <path d="M20 40L22.2451 34.2451L28 32L22.2451 29.7549L20 24L17.7549 29.7549L12 32L17.7549 34.2451L20 40Z" fill="white" fillOpacity="0.5" />
    <path d="M8 8L9.12255 10.8775L12 11.5L9.12255 12.1225L8 15L6.87745 12.1225L4 11.5L6.87745 10.8775L8 8Z" fill="white" fillOpacity="0.3" />
    <path d="M32 8L33.1225 10.8775L36 11.5L33.1225 12.1225L32 15L30.8775 12.1225L28 11.5L30.8775 10.8775L32 8Z" fill="white" fillOpacity="0.3" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A0F1E] font-sans">
      
      {/* --- ATMOSPHERIC BACKGROUND (DECO STYLE) --- */}
      <div className="absolute inset-0 z-0">
        {/* Vertical Light Rays */}
        <div className="absolute inset-0 flex justify-around pointer-events-none opacity-40">
           <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent blur-xl" />
           <div className="w-[100px] h-full bg-gradient-to-b from-white/5 via-transparent to-white/5 blur-[120px] -translate-x-1/2" />
           <div className="w-[200px] h-full bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 blur-[150px] translate-x-1/2" />
           <div className="w-[100px] h-full bg-gradient-to-b from-white/5 via-transparent to-white/5 blur-[120px] translate-x-full" />
        </div>
        
        {/* Radial Glow Center-Bottom */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-t from-indigo-600/10 to-transparent blur-[160px] rounded-full mix-blend-screen" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.06] select-none pointer-events-none noise-panel" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 pt-20 pb-32">
        
        {/* --- LOGO --- */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="mb-12"
        >
          <DecagonLogo />
        </motion.div>

        {/* --- HEADING --- */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-tight leading-[1.05] text-white"
          >
            We Build High-Performance <br className="hidden md:block" />
            Next.js Products That Convert
          </motion.h1>
        </div>

        {/* --- SUB-TAGLINE --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap庆 justify-center gap-6 md:gap-12 mb-16"
        >
          {["DELHI-BASED ENGINEERING", "LIGHTNING FAST", "SUB-SECOND LOAD"].map((tag) => (
             <span key={tag} className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/30 whitespace-nowrap">
               #1 {tag}
             </span>
          ))}
        </motion.div>

        {/* --- CTAs --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button size="lg" className="h-12 px-10 rounded-full bg-white text-[#0A0F1E] font-medium hover:bg-white/90 transition-all">
            Start Project
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-10 rounded-full border-white/20 bg-transparent text-white font-medium hover:bg-white/5 transition-all">
            View Work
          </Button>
        </motion.div>

        {/* --- BRAND CLOUD --- */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 1 }}
           className="mt-32 w-full max-w-6xl flex flex-wrap justify-around items-center gap-8 md:gap-16 opacity-30 grayscale pointer-events-none"
        >
           {brands.map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-bold tracking-tighter text-white/80 whitespace-nowrap">
                {brand}
              </span>
           ))}
        </motion.div>
      </div>

      {/* Edge Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0F1E] via-transparent to-[#0A0F1E]/80 z-20" />
    </section>
  );
}
