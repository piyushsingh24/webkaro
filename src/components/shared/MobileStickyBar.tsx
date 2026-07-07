"use client";

import Link from "next/link";
import { Zap, MessageSquare, Phone, Rocket } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-6 left-6 right-6 z-[100] h-16 bg-[#0E1424]/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-around px-2 shadow-2xl">
      <Link href="#services" className="flex flex-col items-center gap-1 group">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 group-focus:text-primary transition-colors">
          <Zap className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Services</span>
      </Link>
      
      <Link href="#work" className="flex flex-col items-center gap-1 group">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 group-focus:text-primary transition-colors">
          <Rocket className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Work</span>
      </Link>

      <Link href="#contact" className="px-6 h-10 bg-primary text-white rounded-xl flex items-center gap-2 font-bold text-xs shadow-glow">
        <MessageSquare className="w-4 h-4" />
        Enquire
      </Link>

      <a href="tel:+917048903201" className="flex flex-col items-center gap-1 group">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 group-focus:text-primary transition-colors">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-widest text-white/20">Call</span>
      </a>
    </div>
  );
}
