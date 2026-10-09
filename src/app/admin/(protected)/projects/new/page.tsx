import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import ProjectForm from "../_components/ProjectForm";

export default async function NewProjectPage() {
  const session = await getServerSession(authOptions);
  return (
    <ProjectForm
      mode="create"
      canPublish={session?.user?.role === "ADMIN"}
    />
  );
}
