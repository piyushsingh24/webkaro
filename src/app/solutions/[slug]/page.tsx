import DynamicDetailTemplate from "@/app/dynamic-detail";

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  return <DynamicDetailTemplate params={awaitedParams} category="SOLUTION" />;
}
