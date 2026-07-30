"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ui/service-icon";

const categories = [
  {
    name: "Website Design",
    ids: ["static-website-design","landing-page-development","corporate-website-design","website-redesign","ecommerce-website-design","dynamic-website-design"]
  },
  {
    name: "Custom Software",
    ids: ["crm-development","custom-web-development","mern-development","fullstack-development","cms-development","api-development","nextjs-development","react-development","laravel-development","php-development","nodejs-development","microservices","portal-development","news-portal","job-portal","matrimonial-portal","b2b-portal","travel-portal"]
  },
  {
    name: "Growth",
    ids: ["performance","cloud-migration","aws-deployment","ci-cd","server-management"]
  }
];

export default function ServicesClient({ services }: { services: any[] }) {
  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Header */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Our Offerings
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            We deliver high-performance solutions tailored for growth and scale. Explore our specialized engineering capabilities across the stack.
          </p>
        </motion.div>
      </section>

      {/* Categorized Services */}
      <div className="content-container pb-20 md:pb-32">
        <div className="space-y-16 md:space-y-24">
          {categories.map((cat, catIdx) => (
            <section key={cat.name}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-8 md:mb-12">
                <div className="lg:col-span-4">
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: '#2563EB' }}>
                    {String(catIdx + 1).padStart(2, '0')}
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                    {cat.name}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#888888' }}>
                    {catIdx === 0 && 'Digital experiences that leave lasting impressions.'}
                    {catIdx === 1 && 'Bespoke engineering for complex business challenges.'}
                    {catIdx === 2 && 'Infrastructure and optimization to scale your product.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {cat.ids.map((id, sIdx) => {
                  const s = services.find(service => service.id === id);
                  if (!s) return null;
                  return (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sIdx * 0.03 }}
                    >
                      <Link
                        href={`/services/${s.id}`}
                        className="group flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-soft h-full"
                        style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300" style={{ backgroundColor: '#F4F7F1' }}>
                          <ServiceIcon name={s.icon} className="w-5 h-5" style={{ color: '#2563EB' }} />
                        </div>
                        <h3 className="text-sm font-semibold mb-2" style={{ color: '#1B1B1B' }}>
                          {s.title}
                        </h3>
                        <p className="text-xs leading-relaxed mb-6 line-clamp-2" style={{ color: '#888888' }}>
                          {s.shortDescription}
                        </p>
                        <div className="mt-auto flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest pt-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)', color: '#2563EB' }}>
                          <span>{s.timeline}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
