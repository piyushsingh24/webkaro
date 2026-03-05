import DynamicDetailTemplate from "@/app/dynamic-detail";

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  return <DynamicDetailTemplate params={params} category="CAREERS" />;
}
