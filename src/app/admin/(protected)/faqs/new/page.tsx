import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import FaqForm from "../_components/FaqForm";

export default async function NewFaqPage() {
  const session = await getServerSession(authOptions);
  let services: { id: string; title: string }[] = [];
  if (isDbConfigured()) {
    try {
      services = await prisma.service.findMany({
        orderBy: { title: "asc" },
        select: { id: true, title: true },
      });
    } catch {
      services = [];
    }
  }
  return (
    <FaqForm
      mode="create"
      services={services}
      canPublish={session?.user?.role === "ADMIN"}
    />
  );
}
