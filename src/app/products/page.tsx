import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Our Innovations | Webkaro Internal Products",
  description: "Explore the proprietary software solutions engineered by Webkaro, including headless CMS systems, authentication gateways, and BI dashboards.",
  keywords: ["Webkaro Products", "Headless CMS", "Auth Gateway", "Business Intelligence Dashboard", "SaaS Solutions"],
  openGraph: {
    title: "Webkaro Products | Engineering Digital Excellence",
    description: "Bespoke internal tools and SaaS products built for scale.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
