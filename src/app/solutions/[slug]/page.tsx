import DynamicDetailTemplate from "@/app/dynamic-detail";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `${title} Solutions | Webkaro`,
    description: `Deep technical expertise in ${title}. Our verified collective of specialists delivers high-performance solutions tailored for scale.`,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  return <DynamicDetailTemplate params={awaitedParams} category="SOLUTION" />;
}
