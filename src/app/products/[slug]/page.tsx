import DynamicDetailTemplate from "@/app/dynamic-detail";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <DynamicDetailTemplate params={params} category="PRODUCT" />;
}
