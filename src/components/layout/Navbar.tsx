"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Calendar,
  Clock,
  Globe,
} from "lucide-react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";

/* ---------------- NAV LINKS ---------------- */

const navLinks = [
  { name: "Product", href: "/products", hasMega: true },
  { name: "Services", href: "/services", hasMega: true },
  { name: "Blogs", href: "/blogs", hasMega: true },
  { name: "About", href: "/about", hasMega: true },
  { name: "Contact", href: "/contact", hasMega: false },
];

/* ---------------- MEGA MENU CONTENT ---------------- */

const megaMenuContent: Record<string, any> = {
  Product: [
    {
      title: "Website Solutions",
      items: [
        { name: "Static Website Design", href: "/services/static-website-design" },
        { name: "Dynamic Website Design", href: "/services/dynamic-website-design" },
        { name: "E-Commerce Website Design", href: "/services/ecommerce-website-design" },
        { name: "Corporate Website Design", href: "/services/corporate-website-design" },
        { name: "Website Redesign", href: "/services/website-redesign" },
        { name: "Landing Page Development", href: "/services/landing-page-development" },
      ],
    },
    {
      title: "Portal Solutions",
      items: [
        { name: "Portal Development", href: "/services/portal-development" },
        { name: "News Portal Development", href: "/services/news-portal" },
        { name: "Matrimonial Portal", href: "/services/matrimonial-portal" },
        { name: "B2B Portal Development", href: "/services/b2b-portal" },
        { name: "Travel Portal", href: "/services/travel-portal" },
        { name: "Job Portal Development", href: "/services/job-portal" },
      ],
    },
  ],

  Services: [
    {
      title: "Web Development",
      items: [
        { name: "Custom Web Development", href: "/services/custom-web-development" },
        { name: "CMS Web Development", href: "/services/cms-development" },
        { name: "Laravel Web Development", href: "/services/laravel-development" },
        { name: "PHP Web Development", href: "/services/php-development" },
        { name: "CRM Development", href: "/services/crm-development" },
        { name: "Full Stack Development", href: "/services/fullstack-development" },
      ],
    },
    {
      title: "Modern Stack Solutions",
      items: [
        { name: "Next.js Development", href: "/services/nextjs-development" },
        { name: "React Development", href: "/services/react-development" },
        { name: "Node.js Backend", href: "/services/nodejs-development" },
        { name: "MERN Stack Development", href: "/services/mern-development" },
        { name: "API Development", href: "/services/api-development" },
        { name: "Microservices Architecture", href: "/services/microservices" },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "Cloud Migration", href: "/services/cloud-migration" },
        { name: "AWS Deployment", href: "/services/aws-deployment" },
        { name: "CI/CD Setup", href: "/services/ci-cd" },
        { name: "Performance Optimization", href: "/services/performance" },
        { name: "Server Management", href: "/services/server-management" },
      ],
    },
  ],

  Blogs: [
    {
      title: "Development",
      items: [
        { name: "Frontend Tutorials", href: "/blogs/frontend" },
        { name: "Backend Engineering", href: "/blogs/backend" },
        { name: "DevOps & Cloud", href: "/blogs/devops" },
        { name: "Database Optimization", href: "/blogs/database" },
        { name: "Open Source Projects", href: "/community/open-source" },
      ],
    },
    {
      title: "Business & Growth",
      items: [
        { name: "Startup Guides", href: "/blogs/startup" },
        { name: "SaaS Growth", href: "/blogs/saas" },
        { name: "Product Strategy", href: "/blogs/product" },
        { name: "Market Trends", href: "/blogs/trends" },
        { name: "Case Studies", href: "/projects" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "/blogs?category=docs" },
        { name: "Company News", href: "/blogs?category=news" },
        { name: "Press & Media", href: "/blogs?category=press" },
        { name: "Community Updates", href: "/blogs?category=community" },
      ],
    },
  ],

  About: [
    {
      title: "Company",
      items: [
        { name: "Our Mission", href: "/about#mission" },
        { name: "Vision 2030", href: "/about#vision" },
        { name: "Leadership Team", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Work Culture", href: "/about#culture" },
      ],
    },
    {
      title: "Trust & Governance",
      items: [
        { name: "Compliance", href: "/compliance" },
        { name: "Legal / Terms", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Security Practices", href: "/security" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Developer Community", href: "/community" },
        { name: "Open Source", href: "/community#open-source" },
        { name: "Alumni Network", href: "/community#alumni" },
        { name: "Events & Workshops", href: "/community#events" },
      ],
    },
  ],
};


/* ---------------- COMPONENT ---------------- */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const pathname = usePathname();
  const lenis = useLenis();

  /* ---------------- EFFECTS ---------------- */

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  /* ---------------- JSX ---------------- */

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0  left-0 right-0 z-[1000] transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-2xl shadow-premium border-b border-border/50"
            : "bg-transparent"
        )}
      >
        {/* ---------- TOP BAR ---------- */}
        <div className="hidden border  lg:block border-b border-border/50 py-2 px-6 lg:px-10 text-xs font-bold uppercase tracking-wider text-foreground/50 dark:text-white/30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {formatDate(currentTime)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {formatTime(currentTime)}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> EN
              </div>
              <Link href="/contact" className="text-primary font-medium hover:underline transition-all">
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* ---------- MAIN BAR ---------- */}
        <div className="px-6 sm:px-10 lg:px-16 py-4">
          <div className="max-w-screen mx-auto flex justify-between  items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center group">
                <Image
                  src="/logo.png"
                  alt="Webkaro Logo"
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground dark:text-white truncate max-w-[120px] xs:max-w-none">
                WebKaro
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 ">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasMega && setActiveMega(link.name)
                  }
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium flex items-center gap-1 transition-colors",
                      pathname === link.href || activeMega === link.name
                        ? "text-primary"
                        : "text-foreground/70 dark:text-white/50 hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {link.hasMega && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          activeMega === link.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link href="/contact">
                <MagnetizeButton particleCount={14}>
                  Start Project <ArrowRight className="w-4 h-4" />
                </MagnetizeButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ---------- MEGA MENU (FIXED OUTSIDE NAV TRANSFORM) ---------- */}
      <AnimatePresence mode="wait">
        {activeMega && (
          <motion.div
            key={activeMega}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed left-0 top-[112px] lg:top-[128px] w-full z-[1001] hidden lg:block"
            onMouseEnter={() => setActiveMega(activeMega)}
            onMouseLeave={() => setActiveMega(null)}
          >
            {/* outer gutter */}
            <div className="mx-auto max-w-7xl px-6">
              {/* card */}
              <div className="relative overflow-hidden rounded-2xl border border-border/60 dark:border-white/[0.06] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] bg-white/95 dark:bg-[#0d0d10]/95 backdrop-blur-2xl">

                {/* top accent gradient line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

                <div className="p-8">
                  <div className={cn(
                    "grid gap-10",
                    megaMenuContent[activeMega]?.length === 2 ? "grid-cols-2" : "grid-cols-3"
                  )}>
                    {megaMenuContent[activeMega]?.map((cat: any) => (
                      <div key={cat.title}>

                        {/* CATEGORY HEADER */}
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/60 dark:border-white/[0.06]">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-primary/10 dark:bg-primary/20">
                            <span className="block w-1.5 h-1.5 rounded-full bg-primary" />
                          </span>
                          <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-primary/80 dark:text-primary/70">
                            {cat.title}
                          </h4>
                        </div>

                        {/* LINKS */}
                        <div className="space-y-0.5">
                          {cat.items.map((item: any) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group/item flex items-center justify-between rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/65 dark:text-white/50 hover:text-foreground dark:hover:text-white hover:bg-primary/[0.07] dark:hover:bg-white/[0.05] transition-all duration-150"
                            >
                              <span>{item.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-150 text-primary" />
                            </Link>
                          ))}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* footer strip */}
                <div className="flex items-center justify-between px-8 py-3.5 border-t border-border/50 dark:border-white/[0.04] bg-gray-50/80 dark:bg-white/[0.02]">
                  <span className="text-xs text-foreground/40 dark:text-white/25 font-medium">
                    Explore all {activeMega?.toLowerCase()} →
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    Talk to an expert
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- MOBILE DRAWER (FIXED OUTSIDE NAV TRANSFORM) ---------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1002]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              data-lenis-prevent
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l z-[1003] p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <Link href="/" className="flex items-center gap-3">
                  <div className="relative w-24 h-24  flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Webkaro Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-black font-outfit uppercase">WebKaro</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 text-foreground">
                  <X size={30} />
                </button>
              </div>

              <div className="space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-semibold text-foreground hover:text-primary transition-colors flex-1"
                      >
                        {link.name}
                      </Link>
                      {link.hasMega && (
                        <button
                          onClick={() =>
                            setActiveMega(
                              activeMega === link.name ? null : link.name
                            )
                          }
                          className="p-3 -mr-3 text-foreground/50 hover:text-primary transition-colors"
                          aria-label={`Toggle ${link.name} sub-menu`}
                        >
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              activeMega === link.name && "rotate-180"
                            )}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {activeMega === link.name && megaMenuContent[link.name] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pl-4 space-y-6 border-l border-border/50 ml-1">
                            {megaMenuContent[link.name].map((cat: any) => (
                              <div key={cat.title}>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary/70 mb-3">
                                  {cat.title}
                                </p>
                                <div className="space-y-3">
                                  {cat.items.map((item: any) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <MagnetizeButton particleCount={10} className="w-full justify-center py-4">
                    Start Project <ArrowRight className="w-4 h-4" />
                  </MagnetizeButton>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
