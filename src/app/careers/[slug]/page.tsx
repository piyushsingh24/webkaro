import DynamicDetailTemplate from "@/app/dynamic-detail";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `${title} | Webkaro Careers`,
    description: `Explore career opportunities in ${title} at Webkaro. Join our engineering collective of specialists building high-performance digital solutions.`,
    alternates: {
      canonical: `/careers/${slug}`,
    },
  };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  return <DynamicDetailTemplate params={awaitedParams} category="CAREERS" />;
}
