import Link from "next/link";
import { Plus } from "lucide-react";
import { postStore } from "@/lib/cms/stores";
import { isDbConfigured } from "@/lib/cms/db";
import {
  PageHeader,
  StatusBadge,
  EmptyState,
  Card,
} from "../_components/ui";
import {
  SearchInput,
  StatusFilter,
  DeleteButton,
  Pagination,
} from "../_components/controls";

const PER_PAGE = 20;

const tabs = [
  { href: "/admin/blogs", label: "Posts" },
  { href: "/admin/blogs/categories", label: "Categories" },
  { href: "/admin/blogs/tags", label: "Tags" },
  { href: "/admin/blogs/authors", label: "Authors" },
];

export default async function BlogsAdminPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const q = (sp.q ?? "").slice(0, 200);
  const status = sp.status || undefined;
  const page = Math.max(1, Number(sp.page) || 1);
  const skip = (page - 1) * PER_PAGE;

  let items: Awaited<ReturnType<typeof postStore.list>> = [];
  let total = 0;
  let dbError = !isDbConfigured();
  if (!dbError) {
    try {
      [items, total] = await Promise.all([
        postStore.list({ q, status, skip, take: PER_PAGE }),
        postStore.count(q, status),
      ]);
    } catch {
      dbError = true;
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="CMS"
        title="Blog Posts"
        description="Drafts stay private. Published posts appear on /blogs with Article metadata."
        action={
          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-1px]"
            style={{ backgroundColor: "#2563EB" }}
          >
            <Plus className="w-4 h-4" /> New Post
          </Link>
        }
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <span
          className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
          style={{ backgroundColor: "#1B1B1B", color: "#FFFFFF" }}
        >
          Posts
        </span>
        {tabs.slice(1).map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 hover:opacity-70"
            style={{ backgroundColor: "#FFFFFF", color: "#2563EB", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            Manage {t.label} →
          </Link>
        ))}
      </div>

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

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <SearchInput placeholder="Search posts..." />
        <StatusFilter base="/admin/blogs" />
      </div>

      {items.length === 0 ? (
        <EmptyState
          title={q || status ? "No posts match." : "No posts yet."}
          hint="Run the content import script or write your first post."
        />
      ) : (
        <Card className="!p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-widest" style={{ color: "#888888" }}>
                  <th className="px-5 py-3 font-semibold">Title</th>
                  <th className="px-5 py-3 font-semibold">Category</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Updated</th>
                  <th className="px-5 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((p) => (
                  <tr key={p.id} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <td className="px-5 py-3.5">
                      <Link href={`/admin/blogs/${p.id}`} className="font-semibold hover:opacity-70 transition-opacity" style={{ color: "#1B1B1B" }}>
                        {p.title}
                      </Link>
                      <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
                        /blogs/{p.slug}
                      </p>
                    </td>
                    <td className="px-5 py-3.5" style={{ color: "#656565" }}>{p.category?.name ?? "—"}</td>
                    <td className="px-5 py-3.5"><StatusBadge status={p.status} /></td>
                    <td className="px-5 py-3.5" style={{ color: "#656565" }}>
                      {new Date(p.updatedAt).toLocaleDateString("en-IN")}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="flex justify-end gap-2">
                        <Link href={`/admin/blogs/${p.id}`} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border" style={{ borderColor: "rgba(0,0,0,0.08)", color: "#2563EB" }}>
                          Edit
                        </Link>
                        <DeleteButton endpoint={`/api/admin/blogs/${p.id}`} label={`"${p.title}"`} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Pagination base="/admin/blogs" page={page} perPage={PER_PAGE} total={total} />
    </div>
  );
}

