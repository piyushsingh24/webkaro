import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import { faqStore } from "@/lib/cms/stores";
import FaqForm from "../_components/FaqForm";

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!isDbConfigured()) notFound();
  const [item, services] = await Promise.all([
    faqStore.findById(id).catch(() => null),
    prisma.service
      .findMany({ orderBy: { title: "asc" }, select: { id: true, title: true } })
      .catch(() => []),
  ]);
  if (!item) notFound();

  return (
    <FaqForm
      mode="edit"
      id={item.id}
      services={services}
      canPublish={session?.user?.role === "ADMIN"}
      initial={{
        slug: item.slug,
        question: item.question,
        answer: item.answer,
        details: item.details ?? "",
        category: item.category ?? "",
        serviceId: item.serviceId ?? "",
        status: item.status,
        sortOrder: item.sortOrder,
      }}
    />
  );
}
