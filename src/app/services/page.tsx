import { listPublishedServices } from "@/lib/cms/services";
import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";
import { Suspense } from "react";
import ServicesClient from "./ServicesClient";
import ServicesSkeleton from "./_components/ServicesSkeleton";

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
      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesList />
      </Suspense>
      <FinalCTA />
    </div>
  );
}

async function ServicesList() {
  // Published services from the CMS (static fallback when DB is unconfigured).
  const services = await listPublishedServices();
  return <ServicesClient services={services} />;
}
