import DynamicDetailTemplate from "@/app/dynamic-detail";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `${title} | Webkaro Community`,
    description: `Explore our ${title} initiative at Webkaro. Join our developer community and open source contributions.`,
    alternates: {
      canonical: `/community/${slug}`,
    },
  };
}

export default async function CommunityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  return <DynamicDetailTemplate params={awaitedParams} category="COMMUNITY" />;
}
