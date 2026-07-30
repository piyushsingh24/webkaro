"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, serviceCategories } from "@/data/services";
import { ServiceIcon } from "@/components/ui/service-icon";

export default function ServicesOverview() {
  const categories = serviceCategories.map(cat => ({
    ...cat,
    services: services.filter(s => s.category === cat.name)
  }));

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#F6F3EE' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            A collective of craftsmen, engineers, and strategists.
          </h2>
          <p className="text-base md:text-lg leading-relaxed lg:pt-2" style={{ color: '#656565' }}>
            From the first line of code to the final deployment, we build digital products that perform. Not just beautiful — effective.
          </p>
        </motion.div>

        {/* Category Blocks */}
        <div className="space-y-8 md:space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start"
            >
              {/* Category Header */}
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: '#2563EB' }}>
                  {String(catIndex + 1).padStart(2, '0')}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  {category.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                  {category.description}
                </p>
              </div>

              {/* Services List */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {category.services.map((service, i) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="group flex items-start gap-4 p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:shadow-soft"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(0,0,0,0.06)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:opacity-80" style={{ backgroundColor: '#F4F7F1' }}>
                      <ServiceIcon name={service.icon} className="w-5 h-5" style={{ color: '#2563EB' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold mb-1 truncate" style={{ color: '#1B1B1B' }}>
                        {service.title}
                      </h4>
                      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: '#888888' }}>
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: '#6E8E59' }} />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 pt-12 border-t text-center"
          style={{ borderColor: 'rgba(0,0,0,0.06)' }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:gap-3"
            style={{ color: '#2563EB' }}
          >
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
