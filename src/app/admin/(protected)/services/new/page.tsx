import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import ServiceForm from "../_components/ServiceForm";

export default async function NewServicePage() {
  const session = await getServerSession(authOptions);
  const canPublish = session?.user?.role === "ADMIN";

  let categories: { id: string; name: string }[] = [];
  if (isDbConfigured()) {
    try {
      categories = await prisma.serviceCategory.findMany({
        orderBy: { sortOrder: "asc" },
        select: { id: true, name: true },
      });
    } catch {
      categories = [];
    }
  }

  if (categories.length === 0) {
    notFound();
  }

  return (
    <ServiceForm
      mode="create"
      categories={categories}
      canPublish={canPublish}
    />
  );
}
