"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto"
        >
          <AlertTriangle className="w-10 h-10 text-primary" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl font-black text-white font-outfit uppercase tracking-tighter">
            Something Went Wrong
          </h1>
          <p className="text-white/40 font-medium leading-relaxed">
            We encountered an unexpected error. Our team has been notified and we're working to fix it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full h-14 bg-primary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <Link
            href="/"
            className="w-full h-14 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            <Home className="w-4 h-4" /> Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
