"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

export function AccordionItem({ title, children, className }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all", isOpen && "border-white/10 bg-white/[0.04]", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-semibold text-lg text-white/90">{title}</span>
        <ChevronDown 
          className={cn("w-5 h-5 text-white/40 transition-transform duration-300", isOpen && "rotate-180 text-primary")} 
        />
      </button>
      <div 
        className={cn(
          "px-6 transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="text-white/60 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
