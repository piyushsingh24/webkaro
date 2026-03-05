"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { MagnetizeButton } from "../ui/magnetize-button";
import { ServiceIcon } from "@/components/ui/service-icon";

export default function ServicesOverview() {
  return (
    <section className="section-padding flex justify-center items-center top-10 bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[450px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80" />
      </div>

      <div className="max-w-full mx-auto relative z-10 flex flex-col items-center gap-12 md:gap-20">
        {/* Section Header */}
        <div className="text-center px-4 max-w-3xl mx-auto space-y-6">
          <h2 className="h2 uppercase leading-tight text-foreground">
            Premium Digital <span className="text-gradient">Services</span>
          </h2>

          <p className="text-muted-foreground  text-base md:text-lg leading-relaxed">
            We craft scalable, high-performance digital products that drive measurable business growth.
          </p>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={`/services/${service.id}`}
                className={cn(
                  "group relative flex flex-col items-center text-center",
                  "p-10 rounded-3xl",
                  "bg-card border border-border",
                  "hover:border-primary/40",
                  "transition-all duration-500",
                  "hover:-translate-y-3",
                  "hover:shadow-[0_30px_80px_-20px_rgba(124,58,237,0.25)]",
                  "focus:outline-none focus:ring-2 focus:ring-primary/40"
                )}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500">
                  <ServiceIcon name={service.icon} className="w-7 h-7 text-primary transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8 text-left w-full">
                  {service.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-border w-full">
                  <GetStartedButton label="Explore Service" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center flex justify-center items-center ">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-xl bg-primary text-white text-sm font-semibold hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <MagnetizeButton particleCount={14}>
              View All Services <ArrowRight className="w-4 h-4" />
            </MagnetizeButton>
          </Link>
        </div>

      </div>
    </section>
  );
}