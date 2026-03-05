"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-3rem)] max-w-2xl">
      <div className="glass p-6 md:p-8 rounded-3xl border-primary/30 flex flex-col md:flex-row items-center gap-6 shadow-2xl shadow-black">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <Cookie className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-grow text-center md:text-left">
          <p className="text-white font-bold text-sm mb-1">We value your privacy</p>
          <p className="text-foreground/60 text-xs leading-relaxed">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. 
            Read our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={accept}
            className="px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:scale-105 transition-transform"
          >
            Accept All
          </button>
          <button 
            onClick={() => setShow(false)}
            className="p-3 bg-white/5 text-white/40 hover:text-white rounded-xl transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
