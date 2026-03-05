"use client";

import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const GlobalFloatingButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 
                 bg-primary text-white 
                 p-4 rounded-full shadow-2xl shadow-primary/40
                 hover:bg-primary/90 transition-all duration-300
                 animate-float flex items-center justify-center
                 backdrop-blur-sm border border-white/10"
      aria-label="Scroll to top"
    >
      <Rocket className="w-6 h-6" />
    </motion.button>
  );
};

export default GlobalFloatingButton;
