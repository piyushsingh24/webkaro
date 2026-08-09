import DynamicDetailTemplate from "@/app/dynamic-detail";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `${title} | Webkaro Products`,
    description: `Discover Webkaro's ${title} — a proprietary engineering solution built for scale and performance.`,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  return <DynamicDetailTemplate params={awaitedParams} category="PRODUCT" />;
}
