import { services } from "@/data/services";
import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Specialized Engineering Services | Webkaro",
  description: "Explore our specialized engineering capabilities across the stack. We deliver high-performance solutions in Web Development, SaaS Growth, and Cloud Infrastructure.",
  openGraph: {
    title: "Web Engineering & Design Services | Webkaro",
    description: "From Next.js development to Cloud Migration, we help brands scale with premium digital engineering.",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-36 md:pt-44 pb-16 md:pb-24">
      <ServicesClient services={services} />
      <FinalCTA />
    </div>
  );
}
