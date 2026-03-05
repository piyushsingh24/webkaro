"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ui/service-icon";

const categories = [
  {
    name: "Website Solutions",
    ids: ["static-website-design", "dynamic-website-design", "ecommerce-website-design", "corporate-website-design", "website-redesign", "landing-page-development"]
  },
  {
    name: "Portal Solutions",
    ids: ["portal-development", "news-portal", "matrimonial-portal", "b2b-portal", "travel-portal", "job-portal"]
  },
  {
    name: "Web Development",
    ids: ["custom-web-development", "cms-development", "laravel-development", "php-development", "crm-development", "fullstack-development"]
  },
  {
    name: "Modern Stack",
    ids: ["nextjs-development", "react-development", "nodejs-development", "mern-development", "api-development", "microservices"]
  },
  {
    name: "Cloud & DevOps",
    ids: ["cloud-migration", "aws-deployment", "ci-cd", "performance", "server-management"]
  }
];

export default function ServicesClient({ services }: { services: any[] }) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <section className="px-6 mb-16 md:mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Our Offerings
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-foreground mb-8 font-outfit"
        >
          Digital Engineering <br />
          <span className="text-gradient">Redefined.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          We deliver high-performance solutions tailored for growth and scale.
          Explore our specialized engineering capabilities across the stack.
        </motion.p>
      </section>

      {/* Categorized Services List */}
      <div className="space-y-32">
        {categories.map((cat, catIdx) => (
          <section key={cat.name} className="px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl md:text-4xl font-black text-foreground font-outfit whitespace-nowrap">
                  {cat.name}
                </h2>
                <div className="h-px bg-border flex-grow" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.ids.map((id, sIdx) => {
                  const s = services.find(service => service.id === id);
                  if (!s) return null;
                  return (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.05 }}
                      className="group flex flex-col glass p-8 rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-8 shadow-lg shadow-black/20`}>
                        <ServiceIcon name={s.icon} className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 font-outfit group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-grow">
                        {s.shortDescription}
                      </p>

                      <div className="space-y-4 pt-6 border-t border-border">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                          <span className="text-foreground/40">Includes</span>
                          <span className="text-primary">{s.timeline}</span>
                        </div>
                        <ul className="space-y-2.5 mb-6">
                          {s.deliverables.slice(0, 4).map((d: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-[13px] text-foreground/70">
                              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                              <span className="line-clamp-1">{d}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest pt-4 border-t border-border">
                          <span className="text-foreground/40">Starting From</span>
                          <span className="text-primary font-black text-xs">{s.price}</span>
                        </div>
                        <Link
                          href={`/services/${s.id}`}
                          className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl text-xs font-bold transition-all"
                        >
                          Explore Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
