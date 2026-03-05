import DynamicDetailTemplate from "@/app/dynamic-detail";

export default function CommunityDetailPage({ params }: { params: { slug: string } }) {
  return <DynamicDetailTemplate params={params} category="COMMUNITY" />;
}
