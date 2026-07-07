"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Rocket, Zap, ShoppingBag, ShieldCheck, Link, Search, 
  Layout, Cloud, RefreshCcw, BarChart3, Lock, Users,
  User, PenTool, Calendar
} from "lucide-react";

const iconMap = {
  Rocket: Rocket,
  Zap: Zap,
  ShoppingBag: ShoppingBag,
  ShieldCheck: ShieldCheck,
  Link: Link,
  Search: Search,
  Layout: Layout,
  Cloud: Cloud,
  RefreshCcw: RefreshCcw,
  BarChart3: BarChart3,
  Lock: Lock,
  Users: Users,
  User: User,
  PenTool: PenTool,
  Calendar: Calendar,
};

export default function ServicesSection() {
  const categories = ["startup", "enterprise", "personal"];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="content-container">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="h2 mb-6">What We Build</h2>
          <p className="text-white/60 text-lg">
            Hyper-specialized engineering for those who refuse to settle for &quot;good enough.&quot; Select your focus area below.
          </p>
        </div>

        <Tabs defaultValue="startup" className="flex flex-col items-center">
          <TabsList className="mb-16">
            <TabsTrigger value="startup">Startup</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            <TabsTrigger value="personal">Personal Brand</TabsTrigger>
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(services as any[])
                  .filter((s) => (s.category || "startup") === cat)
                  .map((service, index) => {
                    const Icon = iconMap[service.icon as keyof typeof iconMap] || Zap;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all hover:border-primary/20 relative"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-white/50 text-base leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(service.tags || []).map((tag: string) => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-white/40">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </motion.div>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
