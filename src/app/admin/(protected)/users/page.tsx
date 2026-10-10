import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import {
  PageHeader,
  EmptyState,
  Card,
} from "../_components/ui";
import UserForm from "./_components/UserForm";

export default async function UsersAdminPage() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.role === "ADMIN";

  let users: {
    id: string;
    name: string | null;
    email: string;
    role: "ADMIN" | "EDITOR";
    isActive: boolean;
    createdAt: Date;
  }[] = [];
  let dbError = !isDbConfigured();
  if (!dbError) {
    try {
      users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
        orderBy: { createdAt: "asc" },
      });
    } catch {
      dbError = true;
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Team"
        title="Users"
        description="Administrator accounts with dashboard access. There is no public registration — accounts can only be created here."
      />

      {dbError && (
        <Card className="mb-6">
          <p className="text-sm font-semibold" style={{ color: "#991B1B" }}>
            Database not connected.
          </p>
          <p className="text-sm mt-1" style={{ color: "#656565" }}>
            Set DATABASE_URL and run <code>npm run db:migrate</code>.
          </p>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3">
          {users.length === 0 && !dbError ? (
            <EmptyState title="No users yet." />
          ) : (
            <Card className="!p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[560px]">
                  <thead>
                    <tr
                      className="text-left text-[11px] uppercase tracking-widest"
                      style={{ color: "#888888" }}
                    >
                      <th className="px-5 py-3 font-semibold">Name</th>
                      <th className="px-5 py-3 font-semibold">Role</th>
                      <th className="px-5 py-3 font-semibold">Status</th>
                      <th className="px-5 py-3 font-semibold">Since</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr
                        key={u.id}
                        className="border-t"
                        style={{ borderColor: "rgba(0,0,0,0.06)" }}
                      >
                        <td className="px-5 py-3.5">
                          <p className="font-semibold" style={{ color: "#1B1B1B" }}>
                            {u.name ?? u.email}
                            {session?.user?.email === u.email && (
                              <span
                                className="ml-2 text-[10px] uppercase tracking-widest font-semibold"
                                style={{ color: "#2563EB" }}
                              >
                                You
                              </span>
                            )}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
                            {u.email}
                          </p>
                        </td>
                        <td className="px-5 py-3.5">
                          <span
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
                            style={
                              u.role === "ADMIN"
                                ? { backgroundColor: "#F4F7F1", color: "#6E8E59" }
                                : { backgroundColor: "#F6F3EE", color: "#656565" }
                            }
                          >
                            {u.role.toLowerCase()}
                          </span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
                            style={
                              u.isActive
                                ? { backgroundColor: "#F4F7F1", color: "#6E8E59" }
                                : { backgroundColor: "#FEF2F2", color: "#991B1B" }
                            }
                          >
                            {u.isActive ? "Active" : "Disabled"}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-xs" style={{ color: "#656565" }}>
                          {new Date(u.createdAt).toLocaleDateString("en-IN")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
          <p className="text-xs mt-4" style={{ color: "#888888" }}>
            Editors can sign in but cannot publish, manage users, or change
            site settings. Only administrators see this page.
          </p>
        </div>

        <div className="lg:col-span-2">
          {isAdmin && !dbError ? (
            <UserForm />
          ) : (
            <Card>
              <p className="text-sm" style={{ color: "#656565" }}>
                {!dbError
                  ? "Only administrators can create new users."
                  : "Connect the database to manage users."}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
