import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import TestimonialForm from "../_components/TestimonialForm";

export default async function NewTestimonialPage() {
  const session = await getServerSession(authOptions);
  return (
    <TestimonialForm
      mode="create"
      canPublish={session?.user?.role === "ADMIN"}
    />
  );
}
