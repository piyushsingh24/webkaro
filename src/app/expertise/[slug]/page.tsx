import DynamicDetailTemplate from "@/app/dynamic-detail";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: `${title} Expertise | Webkaro`,
    description: `Deep technical expertise in ${title}. Our verified collective of specialists delivers high-performance solutions tailored for scale.`,
  };
}

export default async function ExpertiseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  return <DynamicDetailTemplate params={awaitedParams} category="EXPERTISE" />;
}
