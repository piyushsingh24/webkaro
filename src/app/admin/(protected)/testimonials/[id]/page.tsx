import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isDbConfigured } from "@/lib/cms/db";
import { testimonialStore } from "@/lib/cms/stores";
import TestimonialForm from "../_components/TestimonialForm";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!isDbConfigured()) notFound();
  const item = await testimonialStore.findById(id).catch(() => null);
  if (!item) notFound();

  return (
    <TestimonialForm
      mode="edit"
      id={item.id}
      canPublish={session?.user?.role === "ADMIN"}
      initial={{
        clientName: item.clientName,
        company: item.company ?? "",
        role: item.role ?? "",
        content: item.content,
        avatar: item.avatar ?? "",
        rating: item.rating,
        featured: item.featured,
        verified: item.verified,
        status: item.status,
        sortOrder: item.sortOrder,
      }}
    />
  );
}
