import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import { serviceStore } from "@/lib/cms/stores";
import ServiceForm from "../_components/ServiceForm";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const canPublish = session?.user?.role === "ADMIN";

  if (!isDbConfigured()) notFound();

  const [item, categories] = await Promise.all([
    serviceStore.findById(id).catch(() => null),
    prisma.serviceCategory
      .findMany({ orderBy: { sortOrder: "asc" }, select: { id: true, name: true } })
      .catch(() => []),
  ]);

  if (!item) notFound();

  return (
    <ServiceForm
      mode="edit"
      id={item.id}
      categories={categories}
      canPublish={canPublish}
      initial={{
        slug: item.slug,
        title: item.title,
        shortDescription: item.shortDescription,
        description: item.description,
        icon: item.icon,
        categoryId: item.categoryId,
        price: item.price ?? "",
        pricingHint: item.pricingHint ?? "",
        timeline: item.timeline ?? "",
        features: item.features,
        deliverables: item.deliverables,
        technologies: item.technologies,
        benefits: item.benefits,
        techStack: item.techStack,
        processSteps: item.processSteps,
        caseStudy: item.caseStudy as unknown,
        featuredImage: item.featuredImage ?? "",
        imageAlt: item.imageAlt ?? "",
        seoTitle: item.seoTitle ?? "",
        seoDescription: item.seoDescription ?? "",
        ogImage: item.ogImage ?? "",
        status: item.status,
        sortOrder: item.sortOrder,
      }}
    />
  );
}
